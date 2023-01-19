const express = require("express");
const router = express.Router();
const cityController = require("../../controllers/city_controller")

router.post("/city", cityController.create)
router.delete("/city/:id", cityController.destroy)
router.get("/city/:id", cityController.getCity)
router.patch("/city/:id", cityController.update)
router.get("/city", cityController.getAllCities)
router.post("/createBulkCities", cityController.createBulkCities)



module.exports = router