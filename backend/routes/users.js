var express = require('express');
var router  = express.Router();
const sequelize = require('../sequelize');

router.get('/', async function(req, res) {
    //const id = req.user.id;
    const { params } = req.body;
    
    // const result = await sequelize.query(`SELECT users.id, users.name, users.email, followers.follower 
    // FROM users LEFT JOIN followers on users.id = followers.following' 
    // AND name ILIKE '%${params}%'`, { type: sequelize.QueryTypes.SELECT });
    
    // if (result.length > 0) {
    //     res.send({
    //       users:  result
    //     })
    // } else {
    //     res.status(404).send('Users are not found!')
    // }

    console.log('fdssfs')
});

module.exports = router;
