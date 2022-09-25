import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import User from "../models/userModel.js";


const userRouter = express.Router();


userRouter.post(
    "/signin",
    expressAsyncHandler(async (req, res) => {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            email: user.email,
          });
          return;
        }
      }
      res.status(401).send({ message: "Invalid email or password" });
    })
  );

userRouter.post(
    "/signup",
    expressAsyncHandler(async (req, res) => {
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        });
        const createdUser = await user.save();
        res.send({
            _id: createdUser._id,
            email: createdUser.email,
        });
    })
);
export default userRouter;




