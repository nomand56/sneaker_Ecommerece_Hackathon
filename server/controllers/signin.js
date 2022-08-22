const bcrypt = require("bcrypt");
const User = require("../Schema/userSchema")
const jwt = require('jsonwebtoken');
exports.signin = async (req, res) => {

    const { email, password } = req.body
    try {

        let user = await User.findOne({
            email: email
        })


        if (!user) {
            res.json("error not found user")
        }


        // console.log(user)
        const dbPassword = await user.password
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
    }
    catch (err) {
        console.log(err, "Error agaya hai bhai")
    }
}