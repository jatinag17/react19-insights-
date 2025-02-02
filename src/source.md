React does not render `false`,`null`,`undefined or `NaN` in the DOM.These values,when used in JSX,will result in nothing being displayed.

However,`0` and empty strings (`""`)are exceptions"

- **`0`** is rendered in the DOM beacause it is considered a valid react node. this means that if `0` is the result of expression,it will appear in your UI.
- **Empty String** (`""`) are also considered valid and are rendered as well.





//* 1.Variables
//? you can embed any JavaScript variable withiun jsx by enclosing it in the curly brackets. The Value of the variable will be inserted into the DOM at the respected location.

//* 2. Expressions
//? JSX allows you to write Javascript expressions inside curly braces.This includes operations , function calls, and other Javascript expressions that produce  a value.

//* 3. Function Calls
//? Functions, especially those that return JSX functions,can be invoked directly within your JSX...


## Import Export

Default Export:
 A file can have only one export.
When importing a default export, you can name the import whatever you like.


Named Export:
A file can have multiple named exports.
Each named export must be explicitly exported.

