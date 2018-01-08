var assert = require('assert');
var fizzbuzz = require('../fizzbuzz.js');

describe('fizzbuzz',function () {
    describe('multiple of 3 and not 5',function () {

            let inputs = [
                {int:3,str:'Fizz'},
                {int:6,str:'Fizz'},
                {int:9,str:'Fizz'},
                {int:12,str:'Fizz'},
                {int:18,str:'Fizz'},
                {int:21,str:'Fizz'},
                {int:24,str:'Fizz'},
                {int:27,str:'Fizz'},
                {int:33,str:'Fizz'},
                {int:36,str:'Fizz'},
                {int:39,str:'Fizz'},
                {int:42,str:'Fizz'},
                {int:48,str:'Fizz'},
                {int:51,str:'Fizz'},
                {int:54,str:'Fizz'},
                {int:57,str:'Fizz'},
                {int:63,str:'Fizz'},
                {int:66,str:'Fizz'},
                {int:69,str:'Fizz'},
                {int:72,str:'Fizz'},
                {int:78,str:'Fizz'},
                {int:81,str:'Fizz'},
                {int:84,str:'Fizz'},
                {int:87,str:'Fizz'},
                {int:93,str:'Fizz'},
                {int:96,str:'Fizz'},
                {int:99,str:'Fizz'},
            ]

            inputs.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let a = new fizzbuzz(i.int);
                    assert.equal(a.fizz_or_buzz(),i.str);
                });
            });

    });

    describe('multiple of 5 and not 3',function () {

            let inputs = [
                {int:5,str:'Buzz'},
                {int:10,str:'Buzz'},
                {int:20,str:'Buzz'},
                {int:25,str:'Buzz'},
                {int:35,str:'Buzz'},
                {int:40,str:'Buzz'},
                {int:50,str:'Buzz'},
                {int:55,str:'Buzz'},
                {int:65,str:'Buzz'},
                {int:70,str:'Buzz'},
                {int:80,str:'Buzz'},
                {int:85,str:'Buzz'},
                {int:95,str:'Buzz'},
            ];

            inputs.forEach(function (i) {
                it(`should be "${i.str}" when passed ${i.int}`, function () {
                    let a = new fizzbuzz(i.int);
                    assert.equal(a.fizz_or_buzz(),i.str);
                });
            });
        });
    
    describe('multiple of 3 and 5',function () {
        let inputs = [
            {int:0,str:'FizzBuzz'},
            {int:15,str:'FizzBuzz'},
            {int:30,str:'FizzBuzz'},
            {int:45,str:'FizzBuzz'},
            {int:60,str:'FizzBuzz'},
            {int:75,str:'FizzBuzz'},
            {int:90,str:'FizzBuzz'},
        ];

        inputs.forEach(function (i) {
            it(`should be "${i.str}" when passed ${i.int}`, function () {
                let a = new fizzbuzz(i.int);
                assert.equal(a.fizz_or_buzz(),i.str);
            });
        })
    });

    describe('not a multiple of 3 or 5',function () {
        let inputs = [
            {int:1,str:1},
            {int:2,str:2},
            {int:4,str:4},
            {int:7,str:7},
            {int:8,str:8},
            {int:11,str:11},
            {int:13,str:13},
            {int:14,str:14},
            {int:16,str:16},
            {int:17,str:17},
            {int:19,str:19},
            {int:22,str:22},
            {int:23,str:23},
            {int:26,str:26},
            {int:28,str:28},
            {int:29,str:29},
            {int:31,str:31},
            {int:32,str:32},
            {int:34,str:34},
            {int:37,str:37},
            {int:38,str:38},
            {int:41,str:41},
            {int:43,str:43},
            {int:44,str:44},
            {int:46,str:46},
            {int:47,str:47},
            {int:49,str:49},
            {int:52,str:52},
            {int:53,str:53},
            {int:56,str:56},
            {int:58,str:58},
            {int:59,str:59},
            {int:61,str:61},
            {int:62,str:62},
            {int:64,str:64},
            {int:67,str:67},
            {int:68,str:68},
            {int:71,str:71},
            {int:73,str:73},
            {int:74,str:74},
            {int:76,str:76},
            {int:77,str:77},
            {int:79,str:79},
            {int:82,str:82},
            {int:83,str:83},
            {int:86,str:86},
            {int:88,str:88},
            {int:89,str:89},
            {int:91,str:91},
            {int:92,str:92},
            {int:94,str:94},
            {int:97,str:97},
            {int:98,str:98},
        ]

        inputs.forEach(function (i) {
            it(`should be "${i.str}" when passed ${i.int}`, function () {
                let a = new fizzbuzz(i.int);
                assert.equal(a.fizz_or_buzz(),i.str);
            });
        })
    });


    
});