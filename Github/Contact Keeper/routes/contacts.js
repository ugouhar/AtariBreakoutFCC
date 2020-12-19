const express = require("express");
const router = express.Router();

// @route   GET api/users
// @desc    Get all user's contact
// @access  Private

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private

router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private

router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   DELTE api/contacts/:id
// @desc    DELETE contact
// @access  Private

router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
