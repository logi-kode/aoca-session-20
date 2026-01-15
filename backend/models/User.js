const moongose = require('mongoose');

const UserSchema = new moongose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, index: true},
    password: {type: String, required: true}
}, {timestamps: true});

module.exports = moongose.model('User', UserSchema);