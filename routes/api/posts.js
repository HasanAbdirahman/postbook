const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/posts");

// path
router.post("/", postsCtrl.create);
router.get("/all", postsCtrl.index);
router.delete("/:id", postsCtrl.deletePost);
router.put("/:id/edit", postsCtrl.update);
module.exports = router;
