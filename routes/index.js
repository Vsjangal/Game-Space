const express = require("express");
const router = express.Router();
const homeController = require("../controller/home_controllers");

router.get("/", homeController.home);
router.get("/AboutUs", homeController.AboutUs);
router.use("/2048", require("./2048"));
router.use("/blog", require("./Blog"));
router.use("/chess", require("./chess"));
router.use("/minesweeper", require("./minesweeper"));
router.use("/sudoku", require("./sudoku"));
router.use("/tic-tac-toe", require("./tic-tac-toe"));
router.use("/users", require("./users"));
module.exports = router;
