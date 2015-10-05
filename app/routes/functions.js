import Ember from 'ember';
import TestItem from '../utils/test-item';

export default Ember.Route.extend({
    model() {
        let sayIt = function(greeting, name, punctuation) {
            return greeting + ', ' + name +(punctuation || '!');
        };
        return [
            TestItem.create({
                func: "function argsAsArray(fn, args) {\n //your code here \n}",
                testDescription: "you should be able to use an array as arguments when calling a function",
                extendedTestDescription: "Expect argsAsArray(sayIt, ['Hello', 'Ellie', '!']) to be the same as sayIt('Hello', 'Ellie', '!')",
                test: function(func) {
                    return sayIt('Hello', 'Ellie', '!') === func(sayIt, ['Hello', 'Ellie', '!']);
                }
            }),
            TestItem.create({
                func: "function speak(fn, obj) {\n //your code here \n}",
                testDescription: "you should be able to change the context in which a function is called.",
                extendedTestDescription: "<p>Where obj is {greeting: 'Hello', name: 'Greeting'}<br>Where callSayIt is function() { return sayIt(this.greeting, this.name, '!!!');<br> Expect speak(callsayIt, obj) to be 'Hello, Rebecca!!!'",
                test: function(func) {
                    let obj = {
                        name: 'Rebecca',
                        greeting: 'Hello'
                    },
                        speak = function() {
                            return sayIt(this.greeting, this.name, '!!!');
                        };

                    return func(speak, obj) === "Hello, Rebecca!!!";
                }
            }),
            TestItem.create({
                func: "function functionFuction(str) {\n //your code here  \n}",
                testDescription: "you should be able to return a function from a function",
                extendedTestDescription: "<p>Expect functionFunction('Hello')('World!') to be 'Hello World!'<br>Expect functionFunction('Hai')('can i haz funxtion?') to be 'Hai can i haz funxtion'</p>",
                test: function(func) {
                    return func && func("Hello")("World!") === "Hello World!" && func("Hai")("can i haz funxtion") === "Hai can i haz funxtion";
                }
            })
        ];
    }
});
