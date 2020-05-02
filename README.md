## Table of Contents
- [System Structure](##system-structure)
- [Directory Structure](##folder-structure)
- [Scripts available](#scripts-available)
  - [yarn start](###yarn-start)
  - [yarn build](###yarn-build)

## System Structure
![system_structure](https://user-images.githubusercontent.com/30502252/80554120-10d4b100-8a07-11ea-87cb-9f7d3a1538d9.png)

## Folder Structure

```
/
├── .circleci/
├── .storybook/
├── .vscode/
├── env/
├── node_modules/
├── public/
├── README.md
├── package.json
├── tsconfig.json
├── yarn.lock
├── src/
│   ├── App.tsx
│   ├── actions/
│   ├── components/
│   ├── containers/
│   ├── images/
│   ├── index.tsx
│   ├── pages.tsx
│   ├── reducers/
│   ├── sagas/
│   └── services/
├── tsconfig.json
└── yarn.lock
```

## Scripts available
you can run:

### `yarn start`

Runs this app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `yarn build`

Builds the app for production into the `public/`.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. This app is ready to be deployed!
