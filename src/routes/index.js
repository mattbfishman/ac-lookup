const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardsController");
const addController = require("../controllers/addController");
const adminController = require("../controllers/adminController");

router.get("/items", cardController.cards);

router.post("/add", addController.add);

router.post("/login", adminController.login);

module.exports = router;

