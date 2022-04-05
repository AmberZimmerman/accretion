const router = require('express').Router();
const req = require('express/lib/request');
const res = require('express/lib/response');
// const { TimeoutError } = require('sequelize/types');
const { User } = require ('../models');
const withAuth = require('../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//     try {
//        const userData = await User.findAll({
//            attributes: { exclude: ['password'] },
//            order: [['name', 'ASC']],
//        });

//        const users = userData.map((project) => project.get({ plain: true }));

       
//        res.render('homepage', {
//            users,
//            logged_in: req.session.logged_in,
//        });
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

// router.get('/login', (req, res) => {
//     if (res.session.logged_in) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');
// })

router.get('/', async (req, res) => {

    res.render('homepage');
    
})

module.exports = router;