// import { cityRepository } from "../repository/index";
const { CityRepository } = require("../repository/index")

class cityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createcity(data) {
        try {
            const city = await this.cityRepository.createCity(data)
            return city
        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw { error }
        }
    }

    async deleteCity(id) {
        try {
            const city = await this.cityRepository.deleteCity(id);
        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw { error }
        }

    }

    async getCity(id) {
        try {
            const city = await this.cityRepository.getCity(id);
            return city
        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw { error }
        }

    }

    async updateCity(id, data) {
        try {
            const city = await this.cityRepository.updateCity(id, data);
            return city

        } catch (error) {
            console.log("error at city service");
            throw { error }
        }

    }
    async getAllCities() {
        try {
            const city = this.cityRepository.getAllCities();
            return city
        } catch (error) {
            console.log("error at city service");
            throw { error }
        }
    }

    async createBulkCities(arr) {
        console.log(arr);
        try {
            const bulkCities = this.cityRepository.createBulkCities(arr);
            return bulkCities
        } catch (error) {
            console.log("error at city service")
            throw {error}
        }
    }

}



module.exports = cityService