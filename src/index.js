const app = require("express")();
const bodyParser = require('body-parser');
// require('dotenv').config()
require('dotenv').config({ path: '../.env' })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const apiRouter = require("./router/index")
PORT = 3000 || process.env.PORT
const db = require("./models/index")

const { Airport, City } = require("./models/index")
const { FlightRepository } = require("./repository/index")

const serverSetup = async () => {
    app.use("/api", apiRouter);
    app.listen(PORT, () => {
        console.log(`listning to port no ${PORT}`);
    })
    if (process.env.SYNC_DB) {
        db.sequelize.sync({ alter: true })
    }
    // createCity("mughalsarai")

    // const city = await City.findOne({
    //     where:{
    //         id:3
    //     }
    // })
    // const airport = await city.getAirports();
    // console.log(airport);
    // console.log(city);
    // FlightRepository.getAirplane();
    FlightRepository.getAirplane()
}

serverSetup();