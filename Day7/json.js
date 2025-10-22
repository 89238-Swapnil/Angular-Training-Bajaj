function processUserData(jsonString) {
try {
// Attempt to parse the JSON string
let user = JSON.parse(jsonString);
// Check if the parsed object has the expected properties
if (!user.name || !user.age) {
throw new Error("Invalid user data: 'name' or 'age' property missing.");
 }
// If successful, log the user data
 console.log(`User Name: ${user.name}, Age: ${user.age}`);
 } catch (error) {
// Catch any errors that occur in the try block
if (error instanceof SyntaxError) {
 console.error("Error: Invalid JSON format provided.", error.message);
 } else {
 console.error("An unexpected error occurred:", error.message);
 }
 } finally {
// This block always executes, regardless of whether an error occurred
 console.log("User data processing attempt completed.");
 }
}
