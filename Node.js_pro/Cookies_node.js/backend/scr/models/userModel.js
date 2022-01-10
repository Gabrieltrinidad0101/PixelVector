const {Schema,model} = require("mongoose");

const userShema = new Schema({
    email: {type: String, require: true},
    passwordHash: {type: String,require: true}
});

module.exports = model("user",userShema);