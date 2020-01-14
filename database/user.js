const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: { type: String, required: true }
})

const User = mongoose.model('Users', UserSchema);

const insertUser = (data, cb) => {

    // bcrypt.genSalt(10, function (err, salt) {
    //     bcrypt.hash(data.password, salt, function (err, hash) {

    //     });
    var user = new User(data)

    user.save()
        .catch(err => console.log('this is a nono !!! : ' + err))

}

const findUser = (name, email, cb) => {
    User.findOne({ name: name, email: email }, cb);
};

exports.User = User;
exports.insertUser = insertUser;
exports.findUser = findUser;