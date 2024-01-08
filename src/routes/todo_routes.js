const express = require("express");
const router = express.Router();
const index_controller = require("../controllers/index_controller");
const todo_controller = require("../controllers/todo_controller");

router.get("/", index_controller.get_index);
router.get("/todo/:id", todo_controller.get_todo);
router.post("/todo", todo_controller.create_todo);
router.put("/todo/:id", todo_controller.update_todo);
router.delete("/todo/:id", todo_controller.delete_todo);

module.exports = router;
