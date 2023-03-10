const { City } = require("../models/index");

// console.log(Ci)
class cityRepository {

    async createCity( {name} ) {
        try {
            // console.log({name} + "from cityRepo");
            // console.log(name);
            const data = await City.create({ name })
            return data
        } catch (error) {
            console.log("something wrong at Repository layer");
            throw { error }
        }
    }

    async deleteCity(cityId) {
        try {
            const deletedCity = await City.destroy({
                where: {
                    id: cityId
                }
            })
            return true
        } catch (error) {
            console.log("something wrong at Repository layer");
            throw { error }
        }
    }


    async updateCity(cityId, data) {
        try {
            const updateData = await City.findByPk(cityId);
            console.log(updateData);
            // console.log(data);
            // const {name} = data
            updateData.name = data.name;
            await updateData.save();
            return updateData;
        } catch (error) {
            console.log("something wrong at Repository layer");
            throw { error }
        }
    }

    async getCity(cityid) {
        try {
            const city = await City.findByPk(cityid);
            return city;
        } catch (error) {
            console.log("something wrong at Repository layer");
            throw { error }
        }

    }

    async getAllCities(){
        try{
            const city = await City.findAll();
            return city
        }catch(error){
            console.log("something wrong at Repository layer");
            throw { error }
        }
    }

    async createBulkCities(arr){
    
        try{

            const allCities = await City.bulkCreate(arr);
            return allCities;
        }catch(err){
            onsole.log("something wrong at Repository layer");
            console.log(err);
        }


    }

}
module.exports = cityRepository;