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

const insertUser = (input, cb) => {

    // bcrypt.genSalt(10, function (err, salt) {
    //     bcrypt.hash(input.password, salt, function (err, hash) {
    console.log(input);

    //     });
    var user = new User(input)

    user.save()
        .catch(err => console.log('this is a nono!!! UP: ' + err))

}

const findUser = (input, res) => {

    User.findOne({ email: input.email }, (err, user) => {
        if (err) {
            console.log('this is a nono!!! IN: ' + err)
            return res.status(505).send('there is problem with the server')
        }
        if (!user) {
            return res.status(404).send('user does not exist')
        }
        if (user.email === input.email && user.password === input.password) {

            res.status(200).send(true)
        }

    });

};
// , email: email
exports.User = User;
exports.insertUser = insertUser;
exports.findUser = findUser;