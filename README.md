# Programming Foundations

## Module 1

1. Declare and initialise three variables with appropriate names and values. One variable with a number value, one with a boolean value and one with a string value.

2. Declare two variables. Assign your first name to one of the variables and your last name to the other. Concatenate (join) the variables, assign them to a third variable and console log the value of the third variable.

3. Check the type of the value "frog" with the typeof operator and assign the result to a variable. Console log the variable value with a label, e.g. "The type of frog is \_\_\_".

4. Declare and initialise a variable called orderHasShipped with a boolean value. Create an if statement that checks if orderHasShipped is true. If it is true, console log the string value "The order shipped". If not, console log the string value "The order did not ship".

5. Create a for loop that counts from 7 to 13. Console log the value of the counter variable inside the loop

## Module 2

1. Loop through the array below and console log each type property if the age is at least 4.

```js
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
```

2.  - Create a function with one argument.
    - Inside the function check the type of the value being passed in.
    - If it is a boolean value, log the value.
    - If it is not a boolean value, log the message "Please pass a boolean value in".
    - Call the function and pass a value in.

3.  Write code that does the following: When the button in the HTML is clicked, change the colour of the h2 element to "blue" and change it to read "Updated subheading".

## Course Assignment

### Level 1 - Mandatory

1. Declare and initialise a variable with a string value.

2. Create an object variable called person and give it two properties (a key and a value) of your choice.

3. - Create a variable called outOfStock and assign it a boolean value.
   - Create an if else statement that checks the value of outOfStock.
   - If it is true, console log "Out of stock". Otherwise log "In stock".

4. Create an array of five numbers. Loop through the array and console log each value.

5. Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.

6. Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

7. - Create an array of two objects. Each object must have the same three properties (with different values):
     1. one property with a string value
     2. one property with a number value
     3. one property with a boolean value
   - Loop through the array and console log the number value and the boolean value.

8. - Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
   - Inside the function, log the string "I don't like " together with the argument.
   - Call the function and pass in a value of your choice.
   - EXAMPLE: If you pass in the value "giraffes", the function should log: "I don't like giraffes".

9. - Create a function that accepts two arguments.
   - Inside the function, subtract the second argument from the first and console log the result.

10. - Create an empty array.
    - Create a function that accepts one argument.
    - Inside the function, add the argument to the array.
    - Call the function and pass in a value of any type.

### Level 2 - Optional

1.  - Using the loop from question 5 above, only log the counter variable if it is an even number.
    - HINT: You can use the modulus % operator for this.

2.  - Create a function that logs the sentence "I am a function".
    - Assign this function to a variable called innerFunction.
    - Create another function called outerFunction that accepts one argument.
    - Inside outerFunction, call the argument like you would a function - with parenthesis ().
    - Call outerFunction and pass in the innerFunction variable.

## Submission

1. Create a repository in your GitHub account called **prog-found-ca** and make sure it's public
2. Create a file called level-1.js
3. If you answer the level 2 questions, create a file called level-2.js
4. Add, commit and push these files to your repo
5. Submit the repo link
