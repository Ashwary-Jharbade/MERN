const express = require("express")
const cors = require("cors")
const mongoose= require("mongoose")

const uri = "mongodb+srv://1234:1234@cluster0.kav3e.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
}).catch(err => console.log(err))

const app = express()

app.use(cors())
app.use(express.json())

const exampleRoute = require("./routes/exampleRoute")

app.use('/',exampleRoute)

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})

