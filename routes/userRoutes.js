const userAPI = require('../database/user')

module.exports = (app) => {
    app.post(`/api/users`, (req, res, next) => {

        console.log(req.body);
        // userAPI.findUser(req.body.email, (err, data) => {
        //     if (err) return res.status(404).send(err);
        //     if (data) return res.send('data already existed !!!');
        userAPI.insertUser(req.body)
        // })

    })

}
