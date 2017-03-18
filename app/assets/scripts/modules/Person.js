/*jslint node: true */

function Person(fullName, favColor) {
    'use strict';
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function () {
        console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor);
    };
}

module.exports = Person;
