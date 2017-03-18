/*jslint node: true */
var Person = require('./modules/Person');

var john = new Person("John Doe", "blue");
var jane = new Person("Jane Smith", "green");

alert("Testing 1234567890");

john.greet();
jane.greet();
