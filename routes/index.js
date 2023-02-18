const express = require("express");
const router = express.Router();

router.use("/api", require("./api/index"));
// polliing
module.exports = router;
