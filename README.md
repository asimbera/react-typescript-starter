# React Typescript Starter

Create React apps with Typescript with no build configuration.

### Features

- Zero Config
- Typescript Support
- Babel Support
- RecoilJS for state management
- EmotionJS for styling

✨ Built with Parcel V2.

### Creating an App

You'll need to have a recent lts version of NodeJS installed on your dev machine.

To create a new app, you may choose one of the following methods:

#### degit

You can use `degit` to create your app (you need to have it installed globally) :

```bash
degit asimbera/react-typescript-starter#main my-app
```

It will create a dicrectory called `my-app` inside your current folder.

Once it is done, you can open your project folder:

```bash
cd my-app
```

<!-- #### GitHub Template -->

Now install and update the dependencies with `yarn` command:

```bash
yarn
yarn upgrade --latest
```

Inside that directory, it will generate the initial project structure and install the transitive dependencies :

```
my-app
├── node_modules
├── src
│   ├── App.tsx
│   ├── index.css
│   ├── index.html
│   └── index.tsx
├── README.md
├── tsconfig.json
├── package.json
└── yarn.lock
```

Now you can run some built-in commands:

##### `npm start` or `yarn start`

Runs the app in development mode.
Open http://localhost:1234 to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

##### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.
