const express = require("express")
const cors = require("cors")
const mongoose= require("mongoose")

const uri = "";
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

