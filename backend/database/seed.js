const User = require('../models/User');

User.countDocuments({}).exec((err, count) => {

    if(err) {
        return;
    }

    if(count == 0) {
        User.create({
            name: 'Allen',
            username: 'allen',
            password: 'vendoradmin'
        }, (err, seedUser) => {
            if(err) {
                return;
            }
        })
    }
})