const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardsController");
const addController = require("../controllers/addController");

router.get("/items", cardController.cards);

router.post("/add", addController.add);

module.exports = router;

