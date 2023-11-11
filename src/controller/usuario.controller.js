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

        return res.status(200).send(await userService.findAllUsersService(req.query.limit, req.query.offset));

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};


const createUserController = async (req, res) => {

    try {
        const body = req.body;
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

        if (deletedUser == null) {
            return res.status(404).send({ message: "Usuário não encontrado. Tente novamente!" })
        }

        return res.status(200).send({ message: "Usuário excluído com sucesso!" })


    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};


const addUserAddressController = async (req, res) => {

    try {
        const endereco = await userService.addUserAddressService(req.params.id, req.body);

        if (endereco == null) {
            return res.status(400).send({ message: "Algo deu errado no endereço. Tente Novamente!" });
        } else {
            return res.status(201).send({ message: "Endereço adicionado com sucesso!" });
        }


    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};

const removeUserAddressController = async (req, res) => {

    try {

        const endereco = await userService.removeUserAddressService(req.body.id, req.body.addressId);

        let found = false;

        endereco.enderecos.map((valor, chave) => {
            if(valor._id == req.body.addressId) {
                found = true;
            }
        });


        if (found) {
            return res.status(200).send({ message: "Endereço removido com sucesso!" });
        } else {

            return res.status(400).send({ message: "Algo deu errado: Endereço não removido. Tente Novamente!" });
        }


    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};

const addUserFavProductController = async (req, res) => {

    try {
        res.status(201).send(await userService.addUserFavProductService(req.params.id, req.body));
    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};

const removeUserFavProductController = async (req, res) => {

    try {
        res.status(200).send(await userService.removeUserFavProductService(req.params.id, req.body));
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