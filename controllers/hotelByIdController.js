const { hotelById} = require("../mongoConfig");
const mongoDb = require("mongodb");
const addHotelId = (req) => {
    return hotelById.insertMany(req.body)
}

const getAllHotelId = (req) => {
    const { page = 1, count = 50 } = req.query;
   return hotelById.find({})
   .skip((parseInt(page) - 1) * parseInt(count))
   .limit(parseInt(count))
   .sort("title","asc").toArray();
}

module.exports = { addHotelId, getAllHotelId}