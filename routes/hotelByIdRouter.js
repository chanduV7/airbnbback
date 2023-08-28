const { Router } = require("express");
const { addHotelId, getAllHotelId} = require("../controllers/hotelByIdController");
const hotelByIdRouter = Router();

hotelByIdRouter.post("/add",async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await addHotelId(req);
        res.send(data);
    } catch (error) {
        console.log(error)
       res.send({err : error.message});
    }
})


hotelByIdRouter.get("/all",async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await getAllHotelId(req);
        res.send(data)
    } catch (error) {
        res.send({err : error.message})
    }
})

module.exports = hotelByIdRouter;