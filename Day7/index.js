const add = function(a,b){
    return a + b;
}

//arrow function
const addArrow=(a,b) => a + b;
console.log(add(1,2));

//arrow with this

const obj={

    value:10,
    getValue:function(){
        setTimeout(() => {
            console.log(this.value);
        },1000);
        
    }
};

obj.getValue();