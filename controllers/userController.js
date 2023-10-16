const { validationResult } = require('express-validator');

const userLogin = (req, res) => {
    res.render('logIn');
}

const userCreate = (req, res) => {

    const error = validationResult(req)
    
    if(!error.isEmpty()){
        console.log('tenemos un error de validación');
        res.json({error: error})
    }
    
    const {name, email, password } = req.body;

    console.log(`Datos recibidos ${name} - ${email} - ${password}`);

    res.json({
        name,
        email,
        password
    })
    
}

module.exports = {
    userCreate,
    userLogin
}