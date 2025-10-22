// try{

//     let res=10/10;
//     if(!isFinite(res)){
//         throw new Error("Result is not finite");
//     }
//     console.log(res);
// }   catch(err){     
//     // console.log("Error caught: "+ err.message);
// }
// finally{
//     console.log("Execution completed");
// }

// Correct custom error class
class ValidationForm extends Error {
    constructor(message) { 
        super(message);
        this.name = "ValidationError";
    }
}


function readUser(json) {
    const user = JSON.parse(json);

    if (!user.age) {
        throw new ValidationForm("Age is required");
    }

    if (!user.name) {
        throw new ValidationForm("Name is required");
    }

    return user;
}

// Example usage
try {
    const userJson = '{"name":"Alice"}'; // Missing 'age'
    const user = readUser(userJson);
    console.log("User:", user);
} catch (err) {
    if (err instanceof ValidationForm) {
        console.error("Validation error:", err.message);
    } else {
        console.error("Other error:", err.message);
    }
} finally {
    console.log("Execution completed");
}
