const { Router } = require("express");
const { Register,
     Login, 
     loggedInUser, 
     getUser,
      getAll, 
     updateUser,
     passwordReset,
       verify,
       changePass
    } = require("../controllers/userController");

const userRouter = Router();
const isAuth = require("../middleware/Auth")
 userRouter.post("/register",async(req,res) => {
    try {
        const data = await Register(req);
        res.send(data)
    } catch (error) {
        res.send({ err : error.message})
    }
})


userRouter.post("/login",async(req,res) => {
    try {
        const data = await Login(req);
        res.send(data)
    } catch (error) {
        res.send({ err : error.message})
    }
})

userRouter.get("/loggedInUser",async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await loggedInUser(req)
        res.send(data)
    } catch (error) {
        res.send({ err : error.message})
    }
})

userRouter.get("/get/:userId",async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await getUser(req);
        res.send(data)
    } catch (error) {
        res.send({ err : error.message})
    }
})



userRouter.get("/getAll",async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await getAll(req);
        res.send(data)
    } catch (error) {
        res.send({ err : error.message})
    }
});

userRouter.patch("/:userId",async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("Unauthenticated");
        const data = await updateUser(req);
        res.send(data)
    } catch (error) {
        res.send({ err : error.message})
    }
})

userRouter.post("/passwordReset",async(req,res) => {
    try {
      const data = await passwordReset(req)  ;
      res.send(data)
    } catch (error) {
        res.send({err : error.message})
    }
})

userRouter.get("/verify", async(req,res) => {
    try {
        const data = await verify(req);
        res.send(data)
    } catch (error) {
        res.send({err : error.message})
    }
})

userRouter.post("/changePass", async(req,res) => {
    try {
       const data = await changePass(req);
       res.send(data)  
    } catch (error) {
        res.send({err : error.message})
    }
})

module.exports = userRouter;