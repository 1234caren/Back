const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cors = require('cors');
const { mongoose } = require('./database');

//settings
app.set('port', process.env.PORT || 3001);



//instalo morgan para modulo que me permite ver por consola las peticiones que hacen los clientes 404 etc
app.use(morgan('dev'));
//metodo json verifica que el dato que llega al server es un dato json para recibir y enviar
app.use(express.json());

app.use(cors());

//routes
app.use('/tasks' ,require('./routes/task.routes'));
//static files

app.use(express.static(path.join(__dirname, 'public')));



//starting the server
app.listen(app.get ('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
});