const {Schema,model} = require('mongoose');

const noteShema = new Schema({
    title: String,
    description: String,
});

module.exports = model("Note",noteShema)
