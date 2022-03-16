const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get("/", userController.getIndex);
router.get("/signup", userController.sendSignUp);
router.post("/createAccount", userController.createAccount)
router.get("/signin", userController.sendSignIn);
router.post("/loging", userController.loging);
router.get("/profile", userController.viewProfile);
router.get("/profileEdit", userController.editProfile);
router.post("/profileSave", userController.saveProfile);
router.get("/logingout", userController.logingout);
router.get("/logout", userController.logout);

module.exports = router;