const userAPI = require('../database/user')

module.exports = (app) => {
    app.post(`/api/users`, (req, res, next) => {
        console.log(req.body);
        userAPI.insertUser(req.body)
    })

    app.get(`/api/users`, (req, res, next) => {
        console.log(req.body);
        userAPI.findUser(req.body.name, req.body.email, () => console.log("logged in !!!"))
    })

}
