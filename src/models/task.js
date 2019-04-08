const mongoose = require('mongoose');
//permite describir el esquema de los datos
const { Schema } = mongoose;

 const TaskSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('Task' , TaskSchema);