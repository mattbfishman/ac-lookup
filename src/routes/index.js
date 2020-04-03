const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardsController");

// const usersController = require("../controllers/usersController");
// usersController routes
// router.get("/users", usersController.getAllUsers);
// router.get("/confirm/:token", usersController.confirmEmailAddress);
// router.post("/newuser", usersController.createNewUser);
// router.get("/currentUser", usersController.getCurrentUser);

// router.post("/updateProfileImage", usersController.updateImage);
router.get("/items", cardController.cards);


// router.get('/test', (req, res) => (res.send('Hello Worldjhbhj!'), console.log("HERE")))
module.exports = router;

