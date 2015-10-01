import Ember from 'ember';

export default Ember.Object.extend({
    signature: null,
    func: null,
    testDescription: null,
    test: null,
    isTestPassing: Ember.computed('test', 'func', function() {
        let test = this.get('test');
        let func;
        try {
            func = eval(`(${this.get('func')})`);
        } catch (e) {
            // if (e instanceof SyntaxError) {
            //     alert(e.message);
            // }
        }
        return func && test(func);
    }),
    testClass: Ember.computed('isTestPassing', function() {
        return this.get('isTestPassing') ? "passing" : "failing";
    })
});
