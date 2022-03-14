const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get("/", userController.getIndex);
router.get("/login", userController.sendSignIn);
router.get("/signup", userController.sendSignUp);
router.post("/apiConnection", userController.loginApi)
router.get("/users/profile", userController.viewProfile);
router.get("/users/profile/edit", userController.editProfile);
router.post("/users/profile/save", userController.saveProfile);
router.get("/logout", userController.logout);

module.exports = router;