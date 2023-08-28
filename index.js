require("dotenv").config();
const Express = require("express");
const mongoose = require("mongoose");
const hotelDataRouter = require("./routes/hotelDataRouter");
const userRouter = require("./routes/userRouter");
const cors = require("cors");
const tripsRouter = require("./routes/tripsRouter");
const wishListRouter = require("./routes/wishListRouter");
const Auth = require("./middleware/Auth");
const cityCodeRouter = require("./routes/cityCodesRouter");
const hotelByIdRouter = require("./routes/hotelByIdRouter");
const paymentRouter = require("./routes/paymentRouter");
const app = Express();
app.use(cors())
app.use(Express.json());
app.use(Express.urlencoded({extended: true}))
app.use(Auth);
mongoose.connect(
    `mongodb+srv://chandu_V:${process.env.MONGO_PASS}@cluster0.ueuz9jd.mongodb.net/Airbnb`
)

app.use("/hotels",hotelDataRouter);
app.use("/users", userRouter);
app.use("/trips",tripsRouter);
app.use("/wishlist",wishListRouter);
app.use("/cityCodes",cityCodeRouter)
// app.use("/payment", paymentRouter )
app.use("/hotelById",hotelByIdRouter)
app.listen(4000, () => console.log("server is running at port 4000"));
