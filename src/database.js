const mongoose = require('mongoose');
const URI = 'mongodb://localhost/MCGA';

mongoose.connect(URI)
    .then(db => console.log('estoy conectada'))
    .catch(err => console.log(err));

module.exports = mongoose;