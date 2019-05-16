const express = require("express");
const logger = require("morgan");
const PORT = process.env.PORT || 3001
const routes = require("./routes")


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

routes(app);

  


if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/build"));
};

app.listen(PORT, (err)=>{
    if (err) console.log(err);
    console.log(`Now listening on PORT ${PORT}, go check it out, boiiii`)
})