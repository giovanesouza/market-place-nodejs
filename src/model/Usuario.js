const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({

    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
    imagem: { type: String, required: true },
    enderecos: [
        {
            rua: { type: String, required: true },
            numero: { type: Number, required: true },
            complemento: { type: String, required: false },
            cep: { type: String, required: true },
            createdAt: { type: Date, default: Date.now(), required: true }
        }
    ],
    createdAt: { type: Date, default: Date.now(), required: true },
    // produtos_fav: [
    //     {
    //         _id: { type: mongoose.Schema.Types.ObjectId, unique: true, ref: "produtos", required: true },
    //         createdAt: { type: Date, default: Date.now(), required: true }
    //     }
    // ],
    admin: { type: Boolean, default: false, required: true}

});


const Usuario = mongoose.model('usuarios', UsuarioSchema);

module.exports = Usuario;