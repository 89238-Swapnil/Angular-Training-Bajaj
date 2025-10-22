// function f(x,...y){
//     return x*y.length;
// }
// console.log(f(...[1,2,3]))

// function f(x,y,z){
//     return x+y+z;
// }
// console.log(f(...[1,2,3]));

// function *GFG(){

//     yield 10;
//     yield 20;
//     yield 30;
// }
// const generator = GFG();
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

// function *fibGen(){
//     let cur=0;
//     let next =1;

//     while(true){
//         yield cur;
//         [cur,next]=[next,cur+next];
//     }
// }

// const fibb=fibGen();

// for(let i=0;i<10;i++){
//     console.log(fibb.next().value);
// }

//Iterators
const arr=["a","b","c"];
const it=arr[Symbol.iterator]();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//console.log(it.next().value);




const iterator = {
    current: 1,
    last: 5,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (this.current <= this.last) {
            return { value: this.current++, done: false };
        } else {
            return { value:this.current++,done: true };
        }
    }
};

let result = iterator.next();