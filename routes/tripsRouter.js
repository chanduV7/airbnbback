const { Router } = require("express");
const { addTrip, getUserTrips, updateTrip, deleteTrip} = require("../controllers/tripsController")
const tripsRouter = Router();

tripsRouter.post("/add",async(req,res) => {
    try {
        const data = await addTrip(req);
        res.send(data)
    } catch (error) {
        res.send({Err : error.message})
    }
})

tripsRouter.get("/getUserTrips",async(req,res) => {
    try {
        const data = await getUserTrips(req);
        res.send(data.map(e => e.value))
    } catch (error) {
        res.send({Err : error.message})
    }
})

tripsRouter.patch("/:tripId",async(req,res) => {
    try {
        const data = await updateTrip(req);
        res.send(data)
    } catch (error) {
        res.send({ Err : error.message})
    }
})

tripsRouter.delete("/:tripId",async(req,res) => {
    try {
        const data = await deleteTrip(req);
        res.send(data)
    } catch (error) {
        res.send({ Err : error.message})
    }
})
module.exports = tripsRouter;