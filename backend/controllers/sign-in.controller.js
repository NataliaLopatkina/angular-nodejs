const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const userService = require('../services/user');

exports.getUser = async function(req, res, next) {
    const { email, password } = req.body;
    const hash = crypto.createHash('md5').update(password).digest("hex");
    const query = { where: {email: email, password: hash}};

    try {
        const user = await userService.getUser(query);

        if (user) {
            const token = jwt.sign({id: user.id, name: user.name, email: user.email}, 'secret', {expiresIn: '3h'});

            return res.status(200).json({message: 'Logged in!', token: token, user: user});
        }

        throw new Error('Incorrected email or password!');
    }

    catch(e) {
        return res.status(400).json({message: e.message})
    }
}
