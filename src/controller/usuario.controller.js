const userService = require('../service/usuario.service');


const findUserByIdController = async (req, res) => {

    try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user) {
            return res.status(404).send({ message: "Usuário não localizado! Tente novamente." });
        }

        return res.status(200).send(user);

    } catch (err) {
        if (err.kind == "ObjectId") {
            console.log(err.kind == "ObjectId");
            return res.status(500).send({ message: "O ID informado é inválido. Tente novamente!" })
        }

        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};


const findAllUsersController = async (req, res) => {

    try {

        return res.status(200).send(await userService.findAllUsersService());

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};


const createUserController = async (req, res) => {

    try {
        const body = req.body;

        if (!body.nome) {
            return res.status(400).send({ message: "O campo 'nome' precisa ser preenchido!" });
        }

        return res.status(201).send(await userService.createUserService(body));

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};


const updateUserController = async (req, res) => {

    try {

        const body = req.body;

        if (!body.nome) {
            return res.status(400).send({ message: "O campo 'nome' precisa ser preenchido!" });
        }

        return res.send(await userService.updateUserService(req.params.id, body));


    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};


const removeUserController = async (req, res) => {

    try {
        const deletedUser = await userService.removeUserService(req.params.id);

        console.log(deletedUser)
        return res.status(200).send({ message: "Usuário excluído com sucesso!" })
        // if (deletedUser.deletedCount > 0) {
        // }

        // return res.status(404).send({ message: "Usuário não encontrado. Tente novamente!" })


    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};


const addUserAddressController = async (req, res) => {

    try {



    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};

const removeUserAddressController = async (req, res) => {

    try {



    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};

const addUserFavProductController = async (req, res) => {

    try {



    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};

const removeUserFavProductController = async (req, res) => {

    try {



    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};





module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProductController,
    removeUserFavProductController
};