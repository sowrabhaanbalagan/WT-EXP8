const mongoose = require('mongoose')
const FacultySchema = new mongoose.Schema({
    id:Number,
    name:String,
    dept:String,
    contact:Number,
    salary:Number
});

module.exports.Faculty = mongoose.model('Faculty',FacultySchema);