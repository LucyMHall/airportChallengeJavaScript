# Setting Up A Project in JavaScript

## Make project (your module) and initialise javascript with node modules, creates package.json file
- `mkdir projectName`
- `npm init`

## Installing esLint
- `npm install eslint --save-dev`
- `./node_modules/.bin/eslint --init`                                                          

## Installing jest
- `npm install --save-dev jest`    
- add `jest: true` to `env` in `.eslintrc.js`
- I've installed jest globally so added to standard path
- to run tests `jest`

## Installing git                                                         
- `git --init`
- `touch .gitignore`, include: https://www.gitignore.io/api/node

## Set up basic folder structure
- `mkdir __tests__`
- `mkdir src`
- `touch README.md`, include user stories

***

# Writing Tests

## Requiring in classes to test (from a module/doc)
- de-structured version: `const { className } = require('../src/className');` requiring in a hash/object of exports and then making a variable to const className, and assign to that variable the value of property in the hash with the same name
- `const moduleName = require('../src/moduleName');` which returns a hash/ object of whatever has been exported
- `const className = moduleName.className;`

## Basic test structure
```
describe('#nameOfMethod', () => {
  it('what the method is supposed to do', () => {
    expect(method()).toBe(expected);
  });
});
```
`describeOrIt('description', () => {what it does});`

## Creating an empty mock
`const mockName = {};`

## Creating a mock with a stubbed method
`const mockPerson = {
  mockMethod: () => {},
  mockNameProperty: 'mockName',
};`

## Do a before each
`beforeEach(() => { ... });`
- NOTE: Compiler doesn't know that beforeEach is is going to be called so you have to declare the variable above `let variableName;`
***


# Writing Classes

## Basic syntax
```
class className {
  constructor(something){
    this.something = something;
  }

  nameOfMethod2() {
    return ;
  }
}
exports.className = className;
```

## Initialising a new instance of a class
`const instanceName = new className();`

***


# Other key tips

## Assigning Variables: let V const
- let is if value of variable might change
- const is if value staying the same (default)

## Conditionals
```
if (condition1) {
  return ;
} else if (condition2) {
  return ;
} else {
  return ;
};
```

## Writing a function not linked to a class
```
const methodName = () => {
  return ;
}
```

## Indicating functions are private
- `_nameOfPrivateMethod`

## Using functions in other functions
- `this._whateverTheFunctionIsCalled`
***

# Running a node app
- `node`
- `const { className } = require('../path/to/doc.js')` - this is the same as the line in tests

# Common Errors
- semi-colons (stylistic but useful)
- explicit returns necessary
