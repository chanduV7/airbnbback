const { Router } = require("express");
const { addHotel, getAllHotels, getAllHotelsByType, getHotelById} = require("../controllers/hotelsDataController");
const hotelDataRouter = Router();

hotelDataRouter.post("/add",async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await addHotel(req);
        res.send(data);
    } catch (error) {
        console.log(error)
       res.send({err : error.message});
    }
})


hotelDataRouter.get("/all",async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await getAllHotels(req);
        res.send(data)
    } catch (error) {
        res.send({err : error.message})
    }
})

hotelDataRouter.get("/find", async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await getAllHotelsByType(req);
        res.send(data)
    } catch (error) {
        res.send({err : error.message})
    }
})

hotelDataRouter.get("/room/:hotelId", async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await getHotelById(req);
        res.send(data)
    } catch (error) {
        res.send({err : error.message})
    }
})

module.exports = hotelDataRouter;