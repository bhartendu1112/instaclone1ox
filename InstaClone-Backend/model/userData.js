const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    img: { type: String,required: true },
    author: { type: String, required: true },
    location : { type: String, required: true},
    description:{type: String, required: true},
    date:{ type:String },
    likes:{ type: Number }
});

const Data = mongoose.model('Data', taskSchema);

module.exports = Data;