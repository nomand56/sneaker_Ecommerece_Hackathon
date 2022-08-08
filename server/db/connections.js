
const mongoose = require("mongoose")


let url = "mongodb+srv://NomanDogar56:Hassan1314@cluster0.nt8flex.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url).then((res) => {
    console.log("Data base Connected")
})