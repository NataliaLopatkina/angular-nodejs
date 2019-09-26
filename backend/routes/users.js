var express = require('express');
var router  = express.Router();
const { User } = require('../sequelize');
const Sequelize = require('sequelize');

router.get('/', async function(req, res) {
    const id = req.user.id;
    const { value } = req.query;
    const Op = Sequelize.Op;

    const users = await User.findAll({ where: { name: { [Op.iLike]: `%${value}%` }, id: { [Op.ne]: id }}});
    
    // const result = await sequelize.query(`SELECT users.id, users.name, users.email, followers.follower 
    // FROM users LEFT JOIN followers on users.id = followers.following' 
    // AND name ILIKE '%${params}%'`, { type: sequelize.QueryTypes.SELECT });
    
    if (users.length > 0) {
        res.status(200).json({users: users})
    } else {
        res.status(404).json({message: 'Users not found!'});
    }
});

module.exports = router;
