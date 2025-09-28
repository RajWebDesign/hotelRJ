import mongoose from "mongoose";
import validator from "validator";
const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [2, "name must be contaain 2 or more than 3 digit"],
    maxlength: [20, "name must be contain less than 20 or  20 digit"],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [2, "lastmust be contaain 2 or more than 3 digit"],
    maxlength: [20, "lastname must be contain less than 20 or  20 digit"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide valid email"]
      
  },
  phone: {
    type: String,
    required: true,
    minlength: [10, "not valid"],
    maxlength: [10, "not valid"],
  },
  time: {
    type: String,
    required: true,

  },
  date: {
    type: String,
     required: true,
  },
});
export const Reservation =mongoose.model("Reservation",reservationSchema)