const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardsController");
const addController = require("../controllers/addController");
const adminController = require("../controllers/adminController");
var authenticateJWT = require('../server/helpers.js').authenticateJWT;


router.get("/items", cardController.cards);

router.get("/adminItems", authenticateJWT, cardController.adminCards);

router.post("/add", addController.add);

router.get("/isAuthed", authenticateJWT, adminController.checkAuth);

router.post("/login", adminController.login);

module.exports = router;

