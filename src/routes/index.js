const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardsController");
const addController = require("../controllers/addController");

// const usersController = require("../controllers/usersController");
// usersController routes
// router.get("/users", usersController.getAllUsers);
// router.get("/confirm/:token", usersController.confirmEmailAddress);
// router.post("/newuser", usersController.createNewUser);
// router.get("/currentUser", usersController.getCurrentUser);

// router.post("/updateProfileImage", usersController.updateImage);
router.get("/items", cardController.cards);

router.post("/add", addController.add);

module.exports = router;

