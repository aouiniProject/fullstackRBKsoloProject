const userAPI = require('../database/user');

module.exports = (app) => {
    app.post(`/api/usersUp`, (req, res, next) => {

        userAPI.insertUser(req.body)
    })

    app.post(`/api/usersIn`, (req, res, next) => {
        userAPI.findUser(req.body, res);

    })


}
