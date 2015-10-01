import Ember from 'ember';

export default Ember.Component.extend({
    test: null,
    showTest: false,
    actions: {
        toggleShowTest: function() {
            this.toggleProperty('showTest');
        }
    }
});
