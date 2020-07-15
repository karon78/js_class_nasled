"use strict";

class User {
    constructor(name, surname, age, email) {
        this._name = name;
        this._surname = surname;
        this._age = age;
        this._email = email;
    }


    getFullName() {
        return `${this._name} ${this._surname}`
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    set year(v) {
        if (typeof v !== 'number') {
            throw new TypeError('param year mast be a number');
        }
        if (v < 2015) {
            throw new RangeError('param year mast be bigger 2015');
        }
        this._year = v;
    }

    get year() {
        return this._year;
    }

    getCourse() {
        const date = new Date;
        return date.getFullYear() - this.year + 1;

    }
}

const student1 = new Student('Sasha', 'Ivanov', 2016)
console.log(student1.getFullName(), student1.getCourse());