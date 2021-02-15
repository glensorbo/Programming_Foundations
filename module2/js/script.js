/*
 * 1.
 * Loop through the array below and console log each type property if the age is at least 4.
 */

var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];

for (let i = 0; pets.length > i; i++) {
    if(pets[i].age >= 4) console.log("Q1:", pets[i].type, "- Age:", pets[i].age)
}

/*
 * 2.
 * Create a function with one argument.
 * Inside the function check the type of the value being passed in.
 * If it is a boolean value, log the value.
 * If it is not a boolean value, log the message "Please pass a boolean value in".
 * Call the function and pass a value in.
 */

function checkIfBoolean(value) {
    if ( typeof value !== "boolean" ) return console.log("Q2: " + "Please pass a boolean value in! You passed a", typeof value)
    console.log("Q2:",value)
}

checkIfBoolean("string")
checkIfBoolean(55)
checkIfBoolean(false)
checkIfBoolean(true)

/*
 * 3.
 * Write code that does the following:
 * When the button in the HTML is clicked, change the colour of the h2 element to "blue" and change it to read "Updated subheading".
 */

const button = document.querySelector("button")
const h2 = document.querySelector("h2")
button.addEventListener("click", () => {
    h2.style.color = "blue"
    h2.innerHTML = "Updated subheading"
    console.log("Q3: Updated subheading (HTML)")
})