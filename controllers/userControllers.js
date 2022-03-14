exports.getIndex = (request, response) => {
    response.render("index");
}

exports.sendSignIn = (request, response) => {
    response.render("signin");
}

exports.sendSignUp = (request, response) => {
    response.render("signup");
}

exports.viewProfile = (request, response) => {
    response.render("userProfile");
}

exports.editProfile = (request, response) => {
    response.render("userProfileEdit");
}

exports.logout = (request, response) => {
    response.redirect("/");
}

exports.loginApi = (request, response) => {
    response.redirect("/users/profile");
}

exports.saveProfile = (request, response) => {
    response.redirect("/users/profile");
}