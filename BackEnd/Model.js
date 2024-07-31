const mongoose = require('mongoose');
const Schema1 = mongoose.Schema;

const userSchema = new Schema1({
    id: String,
    name: String,
});

const User = mongoose.model('User',userSchema);

module.exports = User;