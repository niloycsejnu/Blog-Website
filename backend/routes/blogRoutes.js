const express = require("express");
const { getBlogs, createBlog, deleteBlog, updateBlog } = require("../controllers/blogController");
const router = express.Router();
//const protect = require('../middleware/authMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.get("/", getBlogs);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
