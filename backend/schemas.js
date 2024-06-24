import mongoose from mongoose;

const { Schema } = mongoose;

const taskSchema = new Schema({
    title: String,
    description: String,
    date: { type: Date, default: Date.now},
    completion: Boolean
});

export default taskSchema;