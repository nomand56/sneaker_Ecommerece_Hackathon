const express = require("express")
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors')
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const loginrouter = require('./routing/signin')
const logoutrouter = require('./routing/signup')
require("./db/connections")



app.use(express.json())
// app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())


app.use("/signup", logoutrouter)
app.use("/signin", loginrouter)




app.listen(8555, console.log("Server Started"))