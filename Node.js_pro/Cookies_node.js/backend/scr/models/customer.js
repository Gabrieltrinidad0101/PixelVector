const {Schema,model} = require("mongoose");

const customerSchema = Schema({
    name: {type: String,require: true}
});

module.exports =  model("customer",customerSchema)