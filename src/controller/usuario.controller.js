

const findUserByIdController = async (req, res) => {

    try {



    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};


const findAllUsersController = async (req, res) => {

    try {



    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};


const createUserController = async (req, res) => {

    try {



    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};


const updateUserController = async (req, res) => {

    try {



    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};


const removeUserController = async (req, res) => {

    try {



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

const addUserFavProduct = async (req, res) => {

    try {



    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" })
    }

};

const removeUserFavProduct = async (req, res) => {

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
    addUserFavProduct,
    removeUserFavProduct
};