# jsnote-rupesh

**jsnote-rupesh** is an npm package that provides an in-browser JavaScript notebook where users can create and interact with cells containing both Markdown and code. It utilizes React, lerana, express, and commander packages to offer a seamless and interactive coding experience.

The package uses the power of [esbuild](https://esbuild.github.io/) with WebAssembly to execute code in the browser efficiently.

## Features

- Interactive in-browser JavaScript notebook.
- Markdown editor/viewer cells for documentation and explanations.
- Code cells for writing and executing JavaScript code.
- Code execution using esbuild WebAssembly for fast and optimized results.

## Installation

To use **jsnote-rupesh**, you can install it globally using npm or yarn:

```bash
npm install jsnote-rupesh
```

## Usage

After installing the package, you can start the notebook server by running the following command:

```bash
npx jsnote-rupesh serve
```

Once the server is running, you can access the notebook interface by opening your web browser and navigating to [http://localhost:4005](http://localhost:4005).

## Commands

- `npx jsnote-rupesh serve`: Starts the notebook server.

## Cell Types

### Markdown Cells

Markdown cells are used for documentation, explanations, and general notes. They support standard Markdown formatting.

### Code Cells

Code cells are used for writing and executing JavaScript code. Code entered in these cells will be executed using esbuild WebAssembly directly in the browser.

## Dependencies

**jsnote-rupesh** relies on the following packages:

- [React](https://reactjs.org/)
- [lerana](https://www.npmjs.com/package/lerana)
- [express](https://expressjs.com/)
- [commander](https://www.npmjs.com/package/commander)
- [esbuild](https://esbuild.github.io/)



---

Feel free to contribute, report issues, or provide suggestions for improvements. Happy coding with **jsnote-rupesh**! 🚀