const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");
const {protect} = require("../middleware/auth.middleware");

// user booking routes 
router.post("/",protect,bookingController.createBooking);
router.get("/my",protect,bookingController.getBookings);
router.post("/:id",protect,bookingController.cancelBooking);


module.exports=router;