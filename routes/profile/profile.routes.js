const express = require('express');
const router = express.Router();

router.get("/temp", (req, res, next) => {
  res.render("profile/avatar");
});

module.exports = router;
