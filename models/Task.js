const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,"Name cannot be empty"],
        trim:true,
        maxlength:[25,'Name cannot have more than 25 characters']
    }, 
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('Task',TaskSchema)