exports.getIndex = (request, response) => {
    response.render("index");
}

exports.sendSignUp = (request, response) => {
    response.render("signup");
}

exports.createAccount = (request, response) => {
    response.redirect("/signin")
}

exports.sendSignIn = (request, response) => {
    response.render("signin");
}

exports.loging = (request, response) => {
    response.redirect("/profile")
}

exports.viewProfile = (request, response) => {
    response.render("profile");
}

exports.editProfile = (request, response) => {
    response.render("profileEdit");
}

exports.saveProfile = (request, response) => {
    response.redirect("/profile");
}

exports.logingout = (request, response) => {
    response.redirect("/logout");
}

exports.logout = (request, response) => {
    response.redirect("/");
}