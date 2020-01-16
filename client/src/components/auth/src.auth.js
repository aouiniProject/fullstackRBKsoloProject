
const Auth = {

    authenticated: false,


    login(cb) {
        this.authenticated = true;
        cb()
    },

    logout(cb) {
        this.authenticated = false;
        cb()
    }

}

export default Auth