const { Router } = require("express");
const { addCityCodes, getAllCodes} = require("../controllers/cityCodeController");
const cityCodeRouter = Router();

cityCodeRouter.post("/add",async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await addCityCodes(req);
        res.send(data);
    } catch (error) {
        console.log(error)
       res.send({err : error.message});
    }
})


cityCodeRouter.get("/all",async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await getAllCodes(req);
        res.send(data)
    } catch (error) {
        res.send({err : error.message})
    }
})

module.exports = cityCodeRouter;