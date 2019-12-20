const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const passport = require("passport")
const path = require("path")

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

const port = process.env.PORT || 5001

if (process.env.NODE_ENV !== "production") {
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
