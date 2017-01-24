const knex = require('./knex');
const bcrypt = require('bcryptjs');

module.exports = {
    getUsers: function(body) {
        return knex("user")
    },
    postNewUser: function(body) {
        return knex("user")
            .insert({
                name: body.name,
                email: body.email,
                password: bcrypt.hashSync('password', 10)
            }, 'id')
    }

};
