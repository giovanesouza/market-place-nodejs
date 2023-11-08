const mongoose = require('mongoose');

function connectToDataBase() {

    mongoose.connect(process.env.URLDATABASE, {

        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then(() => {

        console.log('MongoDB conectado!');

    }).catch(err => {

        console.log(`Erro na conexão com o banco: ${err}`);

    });

}

module.exports = connectToDataBase;