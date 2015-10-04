import Ember from 'ember';

export default Ember.Component.extend({
    test: null,
    showTestItem: true,
    testClass: Ember.computed('test.isTestPassing', function() {
        return this.get('test.isTestPassing') ? "passing" : "failing";
    }),
    //observes isTestPassing to hide testItem
    _closeItem: Ember.observer('test.isTestPassing', function() {
        if (this.get('test.isTestPassing')) {
            this.set('showTestItem', false);
        }
    }),
    actions: {
        toggleShowTestItem: function() {
            this.toggleProperty('showTestItem');
        }
    }
});
