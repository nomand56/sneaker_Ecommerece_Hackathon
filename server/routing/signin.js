const express = require("express")
const router = express.Router()


const { signin } = require("../controllers/signin");
router.post("/", signin)
module.exports = router