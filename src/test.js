let add = () => {
    console.log('add.', this);
}

function mul() {
    console.log('mul', this);
}

function printName() {
    console.log('Printing name..', this.name);
}

// add();
//Object created using properties. Properties are created as key, value pairs
//Properties can be data or functions
let p = {
    name: 'balamurugan',
    sub: function () {
        console.log('sub', this)
    },
    add: add,
    m: mul,
    objArrFun: () => console.log('Obj arr funtion122', this),
    encArrFun: function () {
        this.objArrFun = () => console.log('Obj arr funtion111', this)
    }

}
name = 'test';

// console.log(p);
p.sub();
p.add();
p.m();
//Properties(both functions and data) can be added later after object creation
p.anotherfun = mul;
p.anotherProp = 'newProp';
p.newFun = function () { console.log('newFun.', this); }
p.newArrowFun = () => { console.log('ArrowFun.', this); }
console.log('...', p);
p.newFun();
p.newArrowFun();
p.add();
p.sub();
// p.encArrFun();
console.log('===')
p.objArrFun();
p.m();
p.pn = printName;
p.pn();

let q = { name: 'Viji', add: add, m: mul, pn: printName }
q.m();
q.pn();
printName();


var bname = "Pulsar";
var maker = "Bajaj";

function bike() {

    console.log(bname + "<> " + this.bname + " " + maker + " " + this.maker);
    console.log('1', this);
    var bname = "Ninja";

    this.maker = "Kawasaki";
    console.log('2', this);
    console.log(bname + " " + this.bname + " " + maker + " " + this.maker);  // undefined Bajaj
}
// undefined<> undefined Bajaj undefined
//Ninja undefined Bajaj Kawasaki



obj = new bike();
console.log('4', obj);
console.log(obj.maker);                  // "Kawasaki"


class Person {
    constructor(name) {
        this.name = name;
    }

    one() {
        console.log('one..', this.name, this);
    }



    printNameFunction() {
        setTimeout(function () {
            console.log('printNameFunction..', this.name);
        }, 1)
    }

    printNameArrowFunction() {
        setTimeout(
            () => { console.log('printNameArrowFunction..', this.name) }, 1);

    }
    two = () => console.log('twoArrow..', this.name, this);

    three = () => console.log('threeArrow..', this.name, this);

    funcP = function () {
        console.log('Inside func..', this.name, this);

    }
    printAntFun() {
        console.log('printAntFun..', this);
    }


}

pe = new Person('Ragu');
pe.one();
pe.two();
pe.printNameFunction();
pe.printNameArrowFunction();
pe.funcP();
pe.printAntFun();
console.log(pe);
console.log('end..');
mul();
m1 = new mul();

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    console.log(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;
user.f(); // John  (this == user)
admin.f();
