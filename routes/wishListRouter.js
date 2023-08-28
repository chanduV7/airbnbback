const { Router } = require("express");
const { 
    addWishList,
    getUserWishList,
    updateWishList,
    deleteWishlist
} = require("../controllers/wishListController")
const wishListRouter = Router();

wishListRouter.post("/add",async(req,res) => {
    try {
        const data = await addWishList(req);
        res.send(data)
    } catch (error) {
        res.send({Err : error.message})
    }
})

wishListRouter.get("/getUserWishList",async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await getUserWishList(req);
        res.send(data.map(e => e.value))
    } catch (error) {
        res.send({Err : error.message})
    }
})

wishListRouter.patch("/:wishListId",async(req,res) => {
    try {
        const data = await updateWishList(req);
        res.send(data)
    } catch (error) {
        res.send({ Err : error.message})
    }
})

wishListRouter.delete("/:wishListId",async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await deleteWishlist(req);
        res.send(data)
    } catch (error) {
        res.send({ Err : error.message})
    }
})
module.exports = wishListRouter;