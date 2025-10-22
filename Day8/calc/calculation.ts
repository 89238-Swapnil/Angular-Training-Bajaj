// --- Math Functions ---
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

type MathOperation = (a: number, b: number) => number;

const sub: MathOperation = (a, b) => a - b;
console.log(sub(10, 5)); 


type Logger = (message: string) => void;
const log: Logger = (message) => console.log(message);

log("Logging message");


function getPerson(name: string, age?: number): string {
   
  return age
    ? `Name is ${name} and age is ${age}`
    : `Name is ${name}`;
}


console.log(getPerson("Alice"));
console.log(getPerson("Bob", 25));
