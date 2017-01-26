const knex = require('./knex');
const bcrypt = require('bcryptjs');

module.exports = {

    getUsers: function(body) {
        return knex("user")
    },

    getPets: function(body) {
        return knex("pet")
    },

    getOnePet: function(id) {
        return knex("pet")
            .where(id, 'id')
            .first()
    },

    addPet: function(body) {
        return knex("pet")
            .insert({
                name: body.name,
                breed: body.breed,
                age: body.age,
                user_id: 1
            }, 'id')
    },

    editPet: function(body, id) {
        return knex("pet")
            .update({
                name: body.name,
                breed: body.breed,
                age: body.age,
                user_id: 1
            })
            .where('id', body.id);
    },

    deletePet: function(id) {
        return knex("pet")
            .where(body.id, 'id')
            .del()
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

};;
