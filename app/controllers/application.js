import Ember from 'ember';
import TestItem from '../utils/test-item';

export default Ember.Controller.extend({
    init: function() {
        this._super();

        let assessments = [
            TestItem.create({
                signature: "indexOf(Array, Item)",
                testDescription: "You should be able to determine the location of an item in an array",
                test: function(func) {
                    let array = [1, 2, 3, 4];
                    return func && func.length === 2 && func(array, 3) === 2 && func(array, 5) === -1;
                }
            }),
            TestItem.create({
                signature: "sum(Array)",
                testDescription: "you should be able to add the values of an array",
                test: function(func) {
                    let array = [1, 2, 3, 4];
                    return func && func.length === 1 && func(array) === 10;
                }
            }),
            TestItem.create({
                signature: "remove(Array, Item)",
                testDescription: "you should be able to remove all instances of a value from an array",
                test: function(func) {
                    let array = [1, 2, 3, 4, 2]; //Value appears more than one time.
                    let result =  func && func(array, 2);

                    return func && func.length === 2 && result.length === 3 && result.join(' ') === '1 3 4';
                }
            }),
            TestItem.create({
                signature: "removeWithoutCopy(Array, Item)",
                testDescription: "you should be able to remove all instances of a value from an array, returning the original.",
                test: function(func) {
                    let array = [1, 2, 3, 2, 4];
                    let result = func && func(array, 2);

                    return func && func.length === 2 && result.length === 3 && result.join(' ') === '1 3 4' && array === result; //return same array instance
                }
            }),
            TestItem.create({
                signature: "append(array, Item)",
                testDescription: "you should be able to add an item to the end of an array",
                test: function(func) {
                    let array = [1, 2, 3, 4];

                    if(func) {
                        func(array, 10);
                    }

                    return func && func.length === 2 &&
                         array.length === 5 &&
                         array[array.length - 1] === 10;
                }
            }),
            TestItem.create({
                signature: "truncate(Array)",
                testDescription: "you should be able to remove last item from Array.",
                test: function(func) {
                    let array = [1, 2, 3, 4];

                    let result = func && func(array);

                    return func && func.length === 1 &&
                        result.length === 3 &&
                        result.join(' ') === '1 2 3';
                }
            }),
            TestItem.create({
                signature: "curtail(Array)",
                testDescription: "you should be able to remove the first item from an array.",
                test: function(func) {
                    let array = [1, 2, 3, 4];
                    let result = func && func(array);

                    return func && func.length === 1 &&
                         result.length === 3 &&
                         result.join(' ') === '2 3 4';
                }
            }),
            TestItem.create({
                signature: "prepend(Array, Item)",
                testDescription: "you should be able to add an item to the beginning of an array.",
                test: function(func) {
                    let array = [1, 2, 3, 4];
                    let result = func && func(array, 10);

                    return func && func.length === 2 &&
                        result.length === 2 &&
                        result[0] === 10;
                }
            })
        ];
        this.set('assessments', assessments);
    }
});
