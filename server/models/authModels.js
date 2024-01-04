const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please enter your name']
    },
    password: {
        type: String, 
        required: [true, 'Please enter your password']
    },
    email: {
        type: String, 
        required: [true, 'Please enter your email']
    },
})   



const User = mongoose.model('User', userSchema);

module.exports = {
    User
}