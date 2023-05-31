import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  selectedFile: String,
});


export default mongoose.model('Images', postSchema);