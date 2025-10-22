
const fs = require("fs");


const newRecord = {
  id: 1,
  name: "John Doe",
  age: 25,
  city: "Pune"
};


let data = [];
try {
  const jsonData = fs.readFileSync("data.json", "utf-8");
  data = JSON.parse(jsonData);
} catch (error) {
  console.log("Error reading JSON, using empty array.");
}


data.push(newRecord);

fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
console.log("✅ Data saved successfully!");


const savedData = require("./data.json");
console.log("📂 Data fetched from JSON file:");
console.log(savedData);
