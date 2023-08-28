const { hotelList } = require("../mongoConfig")
const mongoDb = require("mongodb") 
const addHotel = (req) => {
    return hotelList.insertOne(req.body)
}

const getAllHotels = (req) => {
    const { page = 1, count = 50} = req.query;
   return hotelList.find({})
   .skip((parseInt(page) - 1) * parseInt(count))
   .limit(parseInt(count))
   .sort("title","asc").toArray();  
}

const getAllHotelsByType = (req) => {
    const { page = 1, count = 12} = req.query;
    const {type} = req.query;
  
    return hotelList.find({ property_type : type })
    .skip((parseInt(page) - 1) * parseInt(count))
   .limit(parseInt(count))
   .sort("title","asc").toArray();  
}

const getHotelById = async(req) => {
      const hotelId = new mongoDb.ObjectId(req.params.hotelId);
      return hotelList.findOne({_id : hotelId})
}

module.exports = { addHotel, getAllHotels, getAllHotelsByType, getHotelById}