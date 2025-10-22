let myTuple:[string, number];
myTuple=["hello",123];

console.log(myTuple[0]); 

let fruits: string[] = ["Apple", "Banana"];
console.log(fruits);
fruits.push("Orange");
console.log(fruits);

fruits.pop();
console.log(fruits);


var employee:[number, string, boolean];
employee=[1,"John",true];
console.log(employee);

employee.push(25);
console.log(employee);
employee.pop();
console.log(employee);

var empTuple: [string, number, string] = ["typescript", 101, "rajesh"];

function display(tuple_values: any[]) {
    for (let i = 0; i < tuple_values.length; i++) {
        console.log(tuple_values[i]);
    }
}

display(empTuple);
