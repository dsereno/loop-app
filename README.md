TODO: Create endpoint for json? or read directly from file OK
TODO: Create Hook Responsible to get information and parse information OK MIGHT COME BACK
TODO: Create Main Component that turns the json into multiple form elements from it OK
TODO: Create individual components OK
TODO: Test data binding and form parsing
TODO: Implement feedback for Form
TODO: Implement CSS for Better UI and responsiveness
TODO: Cleanup code as necessary
TODO: Implement tests for 100% Coverage

- input:text and input:number;
- input:iban, input:phonenumber (this can be a variant of the
previous inputs but it must have a mask to correctly format
the input value and it needs to validate its data (like
validate if the phone number has 9 digits for portuguese
phone numbers));
- input:date (ignore the “granularity” and “format” keys,
implement just a simple version with a datetime picker);
- input:select (there are 2 different versions here depending
on the flag “dropdown”: one will show a regular dropdown
(if “dropdown” is true), and the other will show all the
possible answers as a set of buttons (when the flag
“dropdown” is false or undefined));
- input:bool (this can be represented as a checkbox);

Where suitable, we need to be able to check easily if the protocol
has valid answers (maybe a next button, a message, ...), and for this
to happen, all the required questions should be answered and
none of the deal-breaker values can be selected.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
