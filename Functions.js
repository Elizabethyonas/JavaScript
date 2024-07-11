// Define the function
// function sayHello() {
//     console.log("Hello, world!");
// }

// Call the function
// sayHello();


function first (name, age) {
    if (name === "" || age === "") {
        return;
    }
    console.log(name + " is " + age + " years old.");
}

first("Elizabet", 20);