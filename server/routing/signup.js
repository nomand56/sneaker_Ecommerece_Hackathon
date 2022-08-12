const express = require("express")

const router = express.Router()
const { signup } = require("../controllers/signup")
// const bcrypt = require("bcrypt");

router.post("/", signup)
module.exports = router
