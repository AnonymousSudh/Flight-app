const { Airplane, Airport } = require("../models/index");

class airplaneRepository {
    async getAirplane() {
        const allAirplane = await Airplane.findAll();
        console.log(allAirplane);

    }
}
module.exports = airplaneRepository