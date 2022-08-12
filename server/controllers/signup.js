const bcrypt = require("bcrypt");
const User = require("../Schema/userSchema")
exports.signup = (req, res) => {
    console.log("FAILED THE FILE")
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

}