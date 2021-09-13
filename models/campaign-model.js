const mongoose = require('mongoose')

const Registers = mongoose.model('registers', {
    name: String,
    email: String,
    phone: String  
}); 

module.exports = Registers