const {cityRepository} = require("../repository/index")

// const cityServiceUsingClass =()=>{
    const cityrepository = new cityRepository();

    const createCity = async(data)=>{
        const data = await cityrepository.createCity(data);
        // console.log(data);
        return data
    }

// }
// cityServiceUsingClass();