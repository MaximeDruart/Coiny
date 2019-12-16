const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 5001
const passport = require("passport")

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

app.use(cors())
app.use(express.json())

const mongoURI = require("./config/keys").mongoURI
mongoose
  .connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("Connection to mongoDB successful !"))
  .catch(err => console.log(err))

app.use(passport.initialize())

require("./config/userPassport")(passport)
const usersRouter = require("./routes/users")
app.use("/users", usersRouter)

require("./config/businessPassport")(passport)
const BusinessRouter = require("./routes/business")
app.use("/business", BusinessRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
