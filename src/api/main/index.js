const express = require("express");
const Controller = require("./controller.js");

const router = express.Router();

router.use(Controller.init);
router.post("/", Controller.post);
router.get("/:id", Controller.get);
router.get("/", Controller.getAll);
router.patch("/:id", Controller.patch);
router.put("/:id", Controller.put);
router.delete("/:id", Controller.delete);

module.exports = router;
