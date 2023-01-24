import express from "express";

//controllers
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";

//router
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;