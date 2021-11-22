const express = require("express");
const contactscontrollers = require("../Controllers/contact-controllers");
const router = express.Router();

router.post("/contact", contactscontrollers.sendmail);

module.exports = router;
