const mesAPI = require('./../database/chat');

module.exports = (app) => {
    app.post('/api/announce', (req, res, next) => {
        console.log(req.body)
        mesAPI.insertMessage(req.body, () => console.log('message inserted'))
    });

    app.get('/api/announce', (req, res, next) => {
        mesAPI.Message.find({}, (err, data) => {
            if (err) {
                res.status(404).send(err)
            } else {
                res.status(200).send(data);
                res.end()
            }
        })
    })
}