import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

var component;
moduleForComponent('test-item', 'Unit | Component | test item', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true,
    beforeEach: function() {
        component = this.subject({test: Ember.Object.create({func: "function sum(arr) { return arr.reduce(function(a,b) { return a + b;}, 0)}",
                                                             test:function(func) {
                                                                 return func && func([1, 2, 3]) === 6 &&
                                                                     func([5, 6, 8]) === 19;
                                                             },
                                                             testDescription: null,
                                                             extendedTestDescription: null,
                                                             isTestPassing: false
                                                            })
                                 });
    }
});

test('it should compute testClass based on test passing status', function(assert) {
    assert.equal(component.get('testClass'), 'failing');
    component.set('test.isTestPassing', true);
    assert.equal(component.get('testClass'), 'passing');
});

test('it should close the test item on successful test run', function(assert) {
    assert.equal(component.get('showTestItem'), true);
    component.send('runTest');
    assert.equal(component.get('showTestItem'), false);
});


test('it should capture error message on test run', function(assert) {
    assert.equal(component.get('errorMessage'), null);
    component.set('test.func', 'function() {foo}');
    component.send('runTest');
    assert.ok(component.get('errorMessage'));
});

test('error message clears on successful test run', function(assert) {
    assert.equal(component.get('errorMessage'), null);
    component.set('test.func', 'function() {foo}');
    component.send('runTest');
    assert.ok(component.get('errorMessage'));
    component.set('test.func', 'function sum(arr) { return arr.reduce(function(a,b) { return a + b;}, 0)}');
    component.send('runTest');
    assert.equal(component.get('errorMessage'), null);
});


test('it should not break when running test with errors', function(assert) {
    component.send('runTest');
    assert.equal(component.get('test.isTestPassing'), true);

    component.set('test.func', 'func(');
    component.send('runTest');
    assert.equal(component.get('test.isTestPassing'), false);

    component.set('test.func', 'function sum(arr) { return arr.reduce(function(a,b) { return a + b;}, 0)}');
    component.send('runTest');
    assert.equal(component.get('test.isTestPassing'), true);

});


test('it should update button copy when test is run', function(assert){
    component.send('runTest');
    assert.equal(component.get('buttonCopy'), 'Run Code!');

    component.set('test.func', 'func(');
    component.send('runTest');
    assert.equal(component.get('buttonCopy'), 'Retry Code?');

    component.set('test.func', 'function sum(arr) { return arr.reduce(function(a,b) { return a + b;}, 0)}');
    component.send('runTest');
    assert.equal(component.get('buttonCopy'), 'Run Code!');
});


test('it should update button class when test is run', function(assert){
    component.send('runTest');
    assert.equal(component.get('buttonClass'), 'btn-primary');

    component.set('test.func', 'func(');
    component.send('runTest');
    assert.equal(component.get('buttonClass'), 'btn-warning');

    component.set('test.func', 'function sum(arr) { return arr.reduce(function(a,b) { return a + b;}, 0)}');
    component.send('runTest');
    assert.equal(component.get('buttonClass'), 'btn-primary');
});


test('it should be able to toggle test item visiblility', function(assert) {
    assert.equal(component.get('showTestItem'), true);
    component.send('toggleShowTestItem');
    assert.equal(component.get('showTestItem'), false);
    component.send('toggleShowTestItem');
    assert.equal(component.get('showTestItem'), true);
});
