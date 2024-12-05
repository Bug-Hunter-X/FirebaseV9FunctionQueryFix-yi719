# Firebase v9: Function Query is not defined

This repository demonstrates a common error encountered when migrating from Firebase v8 to v9: the `Function Query is not defined` error.

The problem arises from using the old v8 query functions directly in a v9 project which uses the modular import style.  The solution involves importing the necessary functions from the correct modules.

## How to reproduce the bug:

1. Clone this repository.
2. Install the required packages: `npm install`.
3. Run the `bug.js` file.  This will reproduce the error.

## Solution:

The `bugSolution.js` file demonstrates the correct way to import and use the query function in Firebase v9.  This should be used instead of the erroneous code in `bug.js`

## Contributing:

Contributions are welcome! Feel free to open issues or submit pull requests.
