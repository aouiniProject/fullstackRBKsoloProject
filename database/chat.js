const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = Schema({
    message: { type: String, required: true }
})

const Message = mongoose.model('Messages', MessageSchema);

const insertMessage = (data, cb) => {
    const newMessage = new Message(data);
    newMessage.save()
        .catch(err => console.log("this is a nono: " + err))
}

exports.insertMessage = insertMessage;

exports.Message = Message;