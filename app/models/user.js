import DS from 'ember-data';

export default DS.Model.extend({
    first_name: DS.attr('string'),
    last_name: DS.attr('string'),
    email: DS.attr('string'),
    team: DS.attr('string'),
    image: DS.attr('string'),
    joiningDate: DS.attr('date')
});
