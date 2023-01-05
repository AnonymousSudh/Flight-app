const {cityService} = require("../services/index")

const cityservice = new cityService();



const create = async(req,res)=>{
    try {
        // console.log(req.body.name);
        const city = await cityservice.createcity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            msg:"successfully created a city",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:null,
            success:false,
            msg:"Not able to create a city",
            err:error
        })
    }

}


const destroy = async(req,res)=>{
    try {
        console.log(req.params.id);
        const city = await cityservice.deleteCity(req.params.id);
        return res.status(201).json({
            data:city,
            success:true,
            msg:"successfully deleted a city",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:null,
            success:false,
            msg:"Not able to delete a city",
            err:error
        })
    }

}

const getCity = async(req,res)=>{
    try {
        const city = await cityservice.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            msg:"successfully fetched a city",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:null,
            success:false,
            msg:"Not able to fetched a city",
            err:error
        })
    }

}



const update = async(req,res)=>{
    try {
        const city = await cityservice.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data:city,
            success:true,
            msg:"successfully update a city",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:null,
            success:false,
            msg:"Not able to update a city",
            err:error
        })
    }

}

module.exports ={create,destroy,getCity,update}