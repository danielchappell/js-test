import Ember from 'ember';

export default Ember.Component.extend({
    test: null,
    showTestItem: true,
    errorMessage: null,
    testClass: Ember.computed('test.isTestPassing', function() {
        return this.get('test.isTestPassing') ? "passing" : "failing";
    }),
    buttonCopy: "Run Code!",
    buttonClass: "btn-primary",
    _closeItem: function() {
        this.set('showTestItem', false);
    },
    actions: {
        toggleShowTestItem: function() {
            this.toggleProperty('showTestItem');
        },
        runTest: function() {
            let test = this.get('test.test');
            let func;
            let result;

            try {
                func = eval(`(${this.get('test.func')})`);
                result = func && test(func);
                this.set('errorMessage', null);
            } catch (e) {
                 if (e) {
                     this.set('errorMessage', e.message);
                 }
            }

            if (result === true) {
                this._closeItem();
                this.setProperties({buttonClass: "btn-primary",
                                    buttonCopy: "Run Code!"});

                this.set('test.isTestPassing', true);
            } else {
                this.setProperties({buttonClass: "btn-warning",
                                    buttonCopy: "Retry Code?"});

                this.set('test.isTestPassing', false);

            }
        }
    }
});
