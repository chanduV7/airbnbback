const {wishList } = require("../mongoConfig");
const Users = require("../model/userModel");
const mongodb = require("mongodb")
async function addWishList(req) {
       const wishListData = await wishList.insertOne(req.body);
       const wishListId = new mongodb.ObjectId(wishListData._id);
       const userUpdate = await Users.findOneAndUpdate(
        {
            _id : req.body.userId
        },
        {
            $push : {
                wishlist : wishListId
            }
        },
        { new : true }
       );
       return wishListData
}

const getUserWishList = async(req,res) => {
    const userData = await Users.find({ _id : new mongodb.ObjectId(req.params.userId)});
    const wishListIds = userData.wishlist;
    const wishlistPromise = wishListIds.map((e) => wishList.findById(e));
    return Promise.allSettled(wishlistPromise)
};

const updateWishList = async(req) => {
    return WishList.findOneAndUpdate(
        {
            _id : req.params.wishListId 
        },
        req.body,
        { new : true }
    );
};

const deleteWishlist = async(req) => {
   const delWish = await WishList.findOneAndDelete(
        {
            _id : req.params.wishListId
        }
    )
    const message = {
        msg : "deleted"
    }
    return {message, delWish}
}

module.exports = { 
    addWishList,
    getUserWishList,
    updateWishList,
    deleteWishlist
}
