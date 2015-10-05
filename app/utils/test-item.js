import Ember from 'ember';

export default Ember.Object.extend({
    signature: null,
    func: null,
    testDescription: null,
    test: null,
    extendedTestItem: null,
    isTestPassing: Ember.computed('test', 'func', function() {
        let test = this.get('test');
        let func;
        let result;

        try {
            func = eval(`(${this.get('func')})`);
            result = func && test(func);
        } catch (e) {
            // if (e instanceof SyntaxError) {
            //     alert(e.message);
            // }
        }

        return result;
    })
});
