const  trips = require("../mongoConfig")
const Users = require("../model/userModel");
async function addTrip(req) {
       const tripData = await trips.create(req.body);
       const tripId = tripData._id;
       const userUpdate = await Users.findOneAndUpdate(
        {
            _id : req.body.userId
        },
        {
            $push : {
                Trips : tripId
            }
        },
        { new : true }
       );
       return tripData
}

const getUserTrips = async(req,res) => {
    const userData = await Users.findById(req.body.userId);
    const tripIds = userData.trips;
    const tripPromise = tripIds.map((e) => Trips.findById(e));
    return Promise.allSettled(tripPromise)
};

const updateTrip = async(req) => {
    return Trips.findOneAndUpdate(
        {
            _id : req.params.tripId 
        },
        req.body,
        { new : true }
    );
};

const deleteTrip = async(req) => {
    return Trips.findOneAndDelete(
        {
            _id : req.params.tripId
        }
    )
}

module.exports = { 
     addTrip,
     getUserTrips,
     updateTrip,
     deleteTrip
}
