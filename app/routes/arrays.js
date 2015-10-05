import Ember from 'ember';
import TestItem from '../utils/test-item';

export default Ember.Route.extend({
    model() {
        return [
            TestItem.create({
                testDescription: "You should be able to determine the location of an item in an array",
                extendedTestDescription: "<p>Where testArray is [1, 2, 3, 4]<br>Expect indexOf(testArray, 3) to equal 2<br>Expect indexOf(testArray, 5) to equal -1</p>",
                func: "function indexOf(arr, item) {\n //your code here \n}",
                test: function(func) {
                    let array = [1, 2, 3, 4];
                    return func && func.length === 2 && func(array, 3) === 2 && func(array, 5) === -1;
                }
            }),
            TestItem.create({
                testDescription: "you should be able to add the values of an array",
                extendedTestDescription: "<p>Where testArray is [1, 2, 3, 4]<br>Expect sum(testArray) to equal 10</p>",

                func: "function sum(arr) {\n //your code here \n}",
                test: function(func) {
                    let array



 = [1, 2, 3, 4];
                    return func && func.length === 1 && func(array) === 10;
                }
            }),
            TestItem.create({
                testDescription: "you should be able to remove all instances of a value from an array",
                extendedTestDescription: "<p>Where testArray is [1, 2, 3, 4]<br>Where result is remove(testArray,2)<br>Expect result to have the length 3<br>Expect result to be [1, 3, 4]</p>",

                func: "function remove(arr, item) {\n //your code here \n}",
                test: function(func) {
                    let array = [1, 2, 3, 4, 2]; //Value appears more than one time.
                    let result =  func && func(array, 2);

                    return func && func.length === 2 && result.length === 3 && result.join(' ') === '1 3 4';
                }
            }),
            TestItem.create({
                func: "function removewithoutCopy(arr, item) {\n //your code here \n}",
                testDescription: "you should be able to remove all instances of a value from an array, returning the original.",
                extendedTestDescription: "<p>Where testArray is [1, 2, 3, 4]<br>Where result is remove(testArray,2)<br>Expect result to have the length 3<br>Expect result to be [1, 3, 4]<br>Expect result to be the same as testArray</p>",
                test: function(func) {
                    let array = [1, 2, 3, 2, 4];
                    let result = func && func(array, 2);

                    return func && func.length === 2 && result.length === 3 && result.join(' ') === '1 3 4' && array === result; //return same array instance
                }
            }),
            TestItem.create({
                func: "function append(arr, item) {\n //your code here \n}",
                testDescription: "you should be able to add an item to the end of an array",
                extendedTestDescription: "<p>Where testArray is [1, 2, 3, 4]<br>Where result is append(testArray,10)<br>Expect result to have the length 5<br>Expect result to be [1, 2, 3, 4, 10]</p>",

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
                func: "function truncate(arr) {\n //your code here \n}",
                testDescription: "you should be able to remove last item from Array.",
                extendedTestDescription: "<p>Where testArray is [1, 2, 3, 4]<br>Expect truncate(testArray) to be [1, 2, 3]</p>",

                test: function(func) {
                    let array = [1, 2, 3, 4];

                    let result = func && func(array);

                    return func && func.length === 1 &&
                        result.length === 3 &&
                        result.join(' ') === '1 2 3';
                }
            }),
            TestItem.create({
                func: "function curtail(arr) {\n //your code here \n}",
                testDescription: "you should be able to remove the first item from an array.",
                extendedTestDescription: "<p>Where testArray is [1, 2, 3, 4]<br>Expect curtail(testArray) to be [2, 3, 4]</p>",
                test: function(func) {
                    let array = [1, 2, 3, 4];
                    let result = func && func(array);

                    return func && func.length === 1 &&
                         result.length === 3 &&
                         result.join(' ') === '2 3 4';
                }
            }),
            TestItem.create({
                func: "function prepend(arr, item) {\n //your code here \n}",
                testDescription: "you should be able to add an item to the beginning of an array.",
                extendedTestDescription: "<p>Where testArray is [1, 2, 3, 4]<br>Expect prepend(testArray, 10) to be [10, 1, 2, 3, 4]</p>",
                test: function(func) {
                    let array = [1, 2, 3, 4];
                    let result = func && func(array, 10);

                    return func && func.length === 2 &&
                        result[0] === 10;
                }
            }),
            TestItem.create({
                func: "function concat(arr1, arr2) {\n //your code here \n}",
                testDescription: "you should be able to join together two arrays",
                extendedTestDescription: "<p>Where testArray is [1, 2, 3, 4]<br>Where secondArray is [5, 6, 7, 8]<br>Expect concat(testArray, secondArray) to be [1, 2, 3, 4, 5, 6, 7, 8]</p>",
                test: function(func) {
                    let array = [1, 2, 3, 4];
                    let secondArray = [5, 6, 7, 8];

                    let result = func && func(array, secondArray);

                    return func && func.length === 2 && result.join(' ') === "1 2 3 4 5 6 7 8";
                }
            }),
            TestItem.create({
                func: "function insert(arr, item, index) {\n //your code here \n}",
                testDescription: "you should be able to add an item anywhere in an array",
                extendTestDescription: "<p>Where testArray is [1, 2, 3, 4]<br> Expect insert(testArray, 'z', 2) to be [1, 2, 'z', 3, 4]</p>",
                test: function(func) {
                    let array = [1, 2, 3, 4];
                    let result = func && func(array, 'z', 2);

                    return func && func.length === 3 && result.join(' ') === "1 2 z 3 4";
                }
            }),
            TestItem.create({
                func: "function count(arr, item) {\n //your code here \n}",
                testDescription: "you should be able to count the occurances of an item in an array",
                extendedTestDescription: "Where testArray is [1, 2, 4, 4, 3, 4, 3]<br>Expect count(testArray, 4) to equal 3</p>",
                test: function(func) {
                    let array = [1, 2, 4, 4, 3, 4, 3];
                    let result = func && func(array, 4);

                    return result && result === 3;
                }
            }),
            TestItem.create({
                func: "function duplicates(arr) {\n //your code here \n}",
                testDescription: "you should be able to find duplicates in an array.",
                extendedTestDescription: "<p>Where testArray is [1, 2, 4, 4, 3, 3, 1, 3]<br> Expect duplicates(testArray) to be [1, 3, 4]",
                test: function(func) {
                    let array = [1, 2, 4, 4, 3, 4, 3, 1];
                    let result = func && func(array);

                    return result && result.sort().join(' ') === "1 3 4";
                }
            }),
            TestItem.create({
                func: "function square(arr) {\n //your code here \n}",
                testDescription: "you should be able to square each number in an array",
                extendedTestDescription: "Where testArray is [1, 2, 3, 4]<br>Expect square(testArray) to be [1, 4, 9, 16]</p>",
                test: function(func) {
                    let array = [1, 2, 3 ,4];

                    return func && func(array).join(' ') === '1 4 9 16';
                }
            }),
            TestItem.create({
                func: "function findAllOccurences(arr, item) {\n //your code here \n}",
                testDescription: "you should be able to find all occurrences of an item in an array",
                extendedTestDescription: "<p>Where testArray is ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c']<br>Expect findAllOccurences(testArray, 'a') to be [0, 6]</p>",
                test: function(func) {
                    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c'];

                    return func && func(array, 'a').join(' ') === '0 6';
                }
            })

        ];
    }
});
