/** 
 *  --- Boas Práticas ---
 * Os 5 métodos fundamentais no Controller. Só podem ter esse métodos. 
 * INDEX: Uma lista daquele recurso.
 * SHOW: Retornar um único daquele recurso.
 * STORE: Criar um recurso.
 * UPDATE: Atualizar um recurso.
 * DELETE: Excluir um recurso.
*/

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/secrets');
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        await User.findOne({ username : req.body.username }, (err, user) => {
            if(err){
                return res.status(401).json({ message : err });
            }
    
            var isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
    
            if(!isPasswordValid){
                console.log('IsPasswordValid: ', isPasswordValid);
                return res.status(401).json({ auth : false, token : null, message : "Not Authorised User" });
            }else{
    
                let payload = {
                    user_id : user._id,
                    username : user.username
                }
    
                console.log(config.secrets.session);
                let token = jwt.sign(payload, config.secrets.session, {
                    expiresIn : config.secrets.expiresIn
                });
                
                return res.status(200).json({ auth: true, token: token, message: "User Logged In Successfully" });
            }
        });
    }
}