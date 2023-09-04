const mongoose =require("mongoose")

const messgSchema = new mongoose.Schema({
    messg:{
        type:String,
        required:true
    }
});

const Messg =mongoose.model('Messg',messgSchema);

module.exports = Messg;