exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM pet; ALTER SEQUENCE pet_id_seq RESTART WITH 1;')
        .then(function() {
            const pet = [{
                name: 'Spot',
                breed: 'Labrador Retriever',
                age: 5,
                user_id: 1
            }, {
                name: 'Skip',
                breed: 'Poodle',
                age: 2,
                user_id: 1
            }, {
                name: 'Star',
                breed: 'Thoroughbred',
                age: 2,
                user_id: 2
            }, {
                name: 'Bill',
                breed: 'American Saddlebred',
                age: 9,
                user_id: 2
            }];
            return knex('pet').insert(pet);
        });
};
