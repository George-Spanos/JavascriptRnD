const isEqual = require('lodash.isequal');

class Person {
    name;
    surname;

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

Object.prototype.isEqual = function (target) {
    return isEqual(this, target);
};
module.exports = {
    run: function () {
        const george = new Person("George", "Spanos");
        const george2 = new Person("George", "Spanos");
        console.log(george.isEqual(george2));
    }
};
