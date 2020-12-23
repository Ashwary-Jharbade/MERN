const express = require("express")
const cors = require("cors")
const mongoose= require("mongoose")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))

const uri = "";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:true,
  useCreateIndex:true
})
.then(() => {
  console.log("MongoDB Connected…")
}).catch(err => console.log(err))


const exampleRoute = require("./routes/exampleRoute")
const userRoute = require("./routes/userRoutes")
const userdataRoute = require("./routes/userDataRoute")
const userAccRoute = require("./routes/userAccRoute")

app.use('/',exampleRoute)
app.use('/user',userRoute)
app.use('/user',userdataRoute)
app.use('/user',userAccRoute)

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})

