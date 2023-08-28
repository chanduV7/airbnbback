const { MongoClient } = require("mongodb");

const client = new MongoClient(
  `mongodb+srv://chandu_V:${process.env.MONGO_PASS}@cluster0.ueuz9jd.mongodb.net/Airbnb`,
 { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 }
);

const db = client.db();

const hotelList = db.collection("HotelList");
const cityCodeList = db.collection("CityCodes")
const hotelById = db.collection("HotelById");
const wishList = db.collection("WishList");
const trips = db.collection("Trips")
module.exports = {hotelList, cityCodeList,wishList,trips };