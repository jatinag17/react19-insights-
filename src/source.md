React does not render `false`,`null`,`undefined or `NaN` in the DOM.These values,when used in JSX,will result in nothing being displayed.

However,`0` and empty strings (`""`)are exceptions"

- **`0`** is rendered in the DOM beacause it is considered a valid react node. this means that if `0` is the result of expression,it will appear in your UI.
- **Empty String** (`""`) are also considered valid and are rendered as well.