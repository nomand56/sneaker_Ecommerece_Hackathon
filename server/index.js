const express = require("express")
const app = express();
const jwt = require('jsonwebtoken');
require("./db/connections")
const User = require("./Schema/userSchema")


app.use(express.json())
const bcrypt = require("bcrypt");

app.post("/signup", (req, res) => {
    const { password } = req.body
    bcrypt.hash(password, 10).then((hash) => {
        let user = new User({ ...req.body, password: hash })
        user.save().then((result) => {
            console.log(result, "DATA ADDED`")
        }).catch((err) => {
            console.log(err)
        })

    })
    res.send("Data has been added ")

})
app.post("/signin", async (req, res) => {
    const { email, password } = req.body
    let user = await User.findOne({
        email
    });
    const dbPassword = user.password
    bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
            res.status(400).json("not found")

        }
        else {
            console.log("Data found")
            jwt.sign({
                id: user._id
            }, "cat lives in FSD", {
                expiresIn: "1h"
            }, (err, myToken) => {

                res.status(200).json({
                    user,
                    myToken
                 
                });

            })



        }


    })
})



app.listen(8555, console.log("Server Started"))