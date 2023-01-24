import mongoose from "mongoose";

//schema for post message
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    selectedFile: String
})

//model from schema
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;