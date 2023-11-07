// Importações
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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


// .pre("save") -> Define que algo seja realizado antes de salvar no BD
UsuarioSchema.pre("save", async function(next) {

    if(this.senha) {
        // bcrypt.hash(this.senha, 10); -> Criptografa a senha com 10 saltos
        this.senha = await bcrypt.hash(this.senha, 10);
    }

    next();

});

const Usuario = mongoose.model('usuarios', UsuarioSchema);

module.exports = Usuario;