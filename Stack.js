//ES6

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
