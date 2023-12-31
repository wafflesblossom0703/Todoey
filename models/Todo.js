import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    }
});

export const Todo = mongoose.model("Todo", ToDoSchema);