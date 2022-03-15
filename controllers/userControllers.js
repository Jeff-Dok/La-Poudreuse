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
    response.render("profile");
}

exports.editProfile = (request, response) => {
    response.render("profileEdit");
}

exports.logout = (request, response) => {
    response.redirect("/");
}

exports.loginApi = (request, response) => {
    response.redirect("/profile");
}

exports.saveProfile = (request, response) => {
    response.redirect("/profile");
}