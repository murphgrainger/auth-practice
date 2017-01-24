const knex = require('./knex');
const bcrypt = require('bcryptjs');

module.exports = {

    getUsers: function(body) {
        return knex("user")
    },

    findUser: function(body) {
        return knex("user").where(body.email, 'user.email').first()
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
