/* function InheritAndChangeConstructor(Parent,Child){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
////
function Shape(color){
    this.color = color;
}

Shape.prototype.dublicate = function(){
    console.log('duplicate');
}
//////
function Circle(radius,color){
    this.radius = radius;
    Shape.call(this,color)
};
InheritAndChangeConstructor(Shape,Circle);

Circle.prototype.draw = function(){
    console.log(`draw circle with radius ${radius}`);
};
Circle.prototype.dublicate = function(){
    Shape.prototype.dublicate();
    console.log('doublicate circle');
}
///////////


function mixin(target, ...sources){
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
};
const canWalk = {
    walk: function(){
        console.log('eating');
    }
}

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.PrintName = function(){
    console.log(this.name);
}
mixin(Person,canEat,canWalk);

/////////////////////////

function HTMLElement(){
    this.click = function(){
        console.log('clicked');
    }
}
HTMLElement.prototype.focus = function(){
        console.log('focused');
    };

function HTMLSelectElement(arr=[]){
    HTMLElement.call(this);
    this.items = arr
    this.addItem = function(value){
        this.items.push(value);
    }
    this.removeItem = function(value){
        this.items.splice(arr.indexOf(value));
    }
}

var d1, d2
function Base() {this.foo = 'foo'}
Base.prototype.bar = 'bar'

function D1() { }
D1.prototype = new Base()

function D2() {Base.call(this)}
D2.prototype = Object.create(Base.prototype)

Base.prototype.baz = 'baz'

d1 = new D1()
d2 = new D2()

console.log(d1.foo, d1.bar, d1.baz)
//-> foo bar baz
console.log(d2.foo, d2.bar, d2.baz)
//-> foo bar baz

//////////////////////////////////////////////////////////////////////////////////////
//ES6

 */
const _count = new WeakMap();
const _array = new WeakMap();
class Stack{
    constructor(){
       _array.set(this,[]);
       _count.set(this,0);
    }
    get count(){
        return _count.get(this);
    }
    push(value){
        const newArr = _array.get(this);
        newArr[_count.get(this)] = value;
        _array.set(this,newArr)    
        _count.set(this,_count.get(this)+1);
    }
    pop(){
        let arr = _array.get(this);
        const res = arr[arr.length-1];
        if(_count.get(this) == 0)
            throw new Error('Stack is Empty');
        _count.set(this,_count.get(this)-1);
        arr = arr.splice(arr.length-1)
        _array.set(this,arr)
        return res;
    }
    peek(){
        const array = _array.get(this);
        if(_count.get() == 0)
            throw new Error('Stack is Empty');
        return array[array.length-1];
    }
}
const stack = new Stack();