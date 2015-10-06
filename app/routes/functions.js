import Ember from 'ember';
import TestItem from '../utils/test-item';

export default Ember.Route.extend({
    model() {
        let sayIt = (greeting, name, punctuation) => {
            return `${greeting}, ${name}${punctuation || '!'}`;
        };
        return [
            TestItem.create({
                func: "function argsAsArray(fn, args) {\n //your code here \n}",
                testDescription: "you should be able to use an array as arguments when calling a function",
                extendedTestDescription: "Expect argsAsArray(sayIt, ['Hello', 'Ellie', '!']) to be the same as sayIt('Hello', 'Ellie', '!')",
                test(func) {
                    return sayIt('Hello', 'Ellie', '!') === func(sayIt, ['Hello', 'Ellie', '!']);
                }
            }),
            TestItem.create({
                func: "function speak(fn, obj) {\n //your code here \n}",
                testDescription: "you should be able to change the context in which a function is called.",
                extendedTestDescription: "<p>Where obj is {greeting: 'Hello', name: 'Greeting'}<br>Where callSayIt is function() { return sayIt(this.greeting, this.name, '!!!');<br> Expect speak(callsayIt, obj) to be 'Hello, Rebecca!!!'",
                test(func) {
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
                test(func) {
                    return func && func("Hello")("World!") === "Hello World!" && func("Hai")("can i haz funxtion") === "Hai can i haz funxtion";
                }
            }),
            TestItem.create({
                func: "function makeClosures(arr, fn) {\n //your code here  \n}",
                testDescription: "you should be able to make closures",
                extendedTestDescription: "<p>Where arr is an array of random numbers<br> Where square is x => x * x<br>Where funcs is makeClosures(arr, square)<br>Expect funcs[i]() to equal square(arr[i]) for each index</p>",
                test(func) {
                    let arr = [Math.random(), Math.random(), Math.random()];
                    let square = x => x * x;
                    let result = func && func(arr, square);
                    let passes = true;

                    result.forEach((item, index) => {
                        if (item !== square(arr[index])) {
                            passes = false;
                        }
                    });

                    return passes;
                }
            }),
            TestItem.create({
                func: "function partial(fn, str1, str2) {\n //your code here  \n}",
                testDescription: 'you should be able to create a "partial" function',
                extendedTestDescription: "<p>Where loadedFunc is partial(sayIt, 'Hello', 'Ellie')<br>Expect loadedFunc('!!!') to equal 'Hello, Ellie!!!'</p>",
                test(func) {
                    let loadedFunc = func && func(sayIt, 'Hello', 'Ellie');
                    return loadedFunc('!!!') === "Hello, Ellie!!!";
                }
            }),
            TestItem.create({
                func: "function useArguments() {\n //your code here  \n}",
                testDescription: "you should be able to use arguments",
                extendedTestDescription: "<p>Expect useArguments(a) to equal (a)<br>Expect useArguments(a, b) to equal (a + b)<br>Expect useArguments(a, b, c) to equal (a + b + c)<br> Expect useArguments(a, b, c, d) to equal (a + b + c +d)</p>",
                test(func) {
                    let [a, b, c, d] = [Math.random(), Math.random(), Math.random(), Math.random()];

                    return func && func(a) === a &&
                        func(a, b) === (a + b) &&
                        func(a, b, c) === (a + b + c) &&
                        func(a, b, c, d) === (a + b + c + d);
                }

            }),
            TestItem.create({
                func: "function callIt(fn) {\n //your code here  \n}",
                testDescription: "you should be able to apply functions with arbitrary numbs of arguments",
                extendedTestDescription: "<p>Expect callIt(iTakeTwoArguments, a, b) to be ok<br>Expect callIt(iTakeThreeArguments, a, b, c) to be ok</p>",
                test(func) {
                    let [a, b, c] = [Math.random(), Math.random(), Math.random()];
                    let  wasITake3ArgumentsCalled = false;
                    let  wasITake2ArgumentsCalled = false;
                    var iTake2Arguments = function (firstArgument, secondArgument) {
                        if (arguments.length === 2 && firstArgument && secondArgument) {
                            wasITake2ArgumentsCalled = true;
                        }
                    };


                    var iTake3Arguments = function (firstArgument, secondArgument, thirdArgument) {
                        if (arguments.length === 3 && firstArgument && secondArgument && thirdArgument) {
                            wasITake3ArgumentsCalled = true;
                        }
                    };

                    func(iTake2Arguments, a, b);
                    func(iTake3Arguments, a, b, c);

                    return wasITake2ArgumentsCalled && wasITake3ArgumentsCalled;
                }

            }),
            TestItem.create({
                func: "function partialUsingArguments(fn) {\n //your code here  \n}",
                testDescription: 'you should be able to create a "partial" function for a variable number of applied arguments',
                extendedTestDescription: "<p>Where partialMe takes 3 arguments (a, b, c)<br> Expect partialUsingArguments(partialMe)(a, b, c) to equal partialMe(a, b, c)<br>Expect partialUsingArguments(partialMe, a)(b, c) to equal partialMe(a, b, c)<br>Expect partialUsingArguments(partialMe, a, b)(c) to equal partialMe(a, b, c)<br> Expect partialWithArguments(partialMe, a, b, c)() to equal partialme(a, b, c)</p>",
                test(func) {
                    let [a, b, c] = [Math.random(), Math.random(), Math.random()];
                    let partialMe = (x,y,z) => x / y * z;

                    return func && func(partialMe, a)(b, c) === partialMe(a, b, c) &&
                        func(partialMe, a, b)(c) === partialMe(a, b, c) &&
                        func(partialMe)(a, b, c) === partialMe(a, b, c) &&
                        func(partialMe, a, b, c)() === partialMe(a, b, c);
                }
            }),
            TestItem.create({
                func: "function curryIt(fn) {\n //your code here  \n}",
                testDescription: "you should be able to curry existing functions",
                extendedTestDescription: "<p>Where curryMe is (x, y, z) => x / y * z<br>Where a, b, and c are random numbers<br>Expect curryIt(curryMe), curryIt(curryMe)(a), and curryIt(curryMe)(a)(b) to all be functions that accept 1 argument<br>Expect curryIt(curryMe)(a)(b)(c) to equal curryMe(a, b, c) and be type number</p>",
                test(func) {
                    let [a, b, c] = [Math.random(), Math.random(), Math.random()];
                    let curryMe = (x,y,z) => x / y * z;
                    let result = func(curryMe);
                    let result2 = func(curryMe)(a);
                    let result3 = func(curryMe)(a)(b);
                    let result4 = func(curryMe)(a)(b)(c);

                    return typeof result === "function" && result.length === 1 &&
                        typeof result2 === "function" && result.length === 1 &&
                        typeof result3 === "function" && result.length === 1 &&
                        typeof result4 === "number" && result4 === curryMe(a, b, c);
                }

            })

        ];
    }
});
