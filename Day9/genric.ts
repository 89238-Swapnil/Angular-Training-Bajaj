
function printValue<T>(value: T): void {
    
    if (Array.isArray(value)) {
        console.log("Array elements:");
        value.forEach((item) => console.log(item));
    }
    
    else if (typeof value === "object" && value !== null) {
        console.log("Object properties:");
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                console.log(`${key}: ${value[key]}`);
            }
        }
    }
  
    else {
        console.log(value);
    }
}


printValue<string>("Hello World");


printValue<number>(101);


printValue<number[]>([1, 2, 3, 4]);


printValue<string[]>(["Alice", "Bob", "Charlie"]);

printValue<{ name: string; age: number }>({ name: "Swapnil", age: 23 });
