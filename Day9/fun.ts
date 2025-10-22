
function printValue(value: string | number | string[] | number[] | Record<string, unknown>): void {
    if (Array.isArray(value)) {
        console.log("Array elements:");
        value.forEach((item) => console.log(item));
    } 
    else if (typeof value === "object" && value !== null) {
        console.log("Object properties:");
        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                console.log(`${key}: ${String((value as Record<string, unknown>)[key])}`);
            }
        }
    } 
    else {
        console.log(value);
    }
}



printValue("Hello World");            
printValue(101);                      
printValue([1, 2, 3, 4]);             
printValue(["Alice", "Bob"]);         
printValue({ name: "Swapnil", age: 23 }); 
