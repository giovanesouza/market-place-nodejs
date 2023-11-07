const mongoose = require('mongoose');

function connectToDataBase() {

    mongoose.connect('mongodb://localhost:27017', {

        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then(() => {

        console.log('MongoDB conectado!');

    }).catch(err => {

        console.log(`Erro na conexão com o banco: ${err}`);

    });

}

module.exports = connectToDataBase;