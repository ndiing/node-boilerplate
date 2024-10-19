const express = require("express");
const permissions =  require("../../permissions.json");
const { security, cors, cookies, compression, messages, missing, catchAll } = require("@ndiinginc/router");

const router = express.Router();

router.use(security(), cors(), cookies(), compression(), messages());
router.use("/main", require("./main/index.js"));
router.use(missing(), catchAll());

module.exports = router;
