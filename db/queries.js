const knex = require('./knex');

module.exports = {
    getUser: function(id) {
        return knex('user').where('id', id).first();
    }
};
