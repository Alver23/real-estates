<h1 align="center">Welcome to Real Estates 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Alver23/real-estates/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT License" src="https://img.shields.io/badge/License-MIT License-yellow.svg" />
  </a>
  <a href="https://coveralls.io/github/Alver23/real-estates?branch=main" target="_blank">
    <img alt="Coveralls" src="https://coveralls.io/repos/github/Alver23/real-estates/badge.svg?branch=main" />
  </a>
  <a href="https://github.com/Alver23/real-estates#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Alver23/real-estates/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://twitter.com/23Alver" target="_blank">
    <img alt="Twitter: 23Alver" src="https://img.shields.io/twitter/follow/23Alver.svg?style=social" />
  </a>
</p>

> An application where you can see real estate with the option to buy it

### 🏠 [Homepage](https://github.com/Alver23/real-estates#readme)

### ✨ [Demo](https://alver23.github.io/real-estates/)

Before you begin, ensure you have met the following requirements:
* Install [git](https://git-scm.com/downloads)
* Install [nodejs](https://nodejs.org/es/download/)
* Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

## Install
To install real estates app, follow these steps:
* Clone the source locally:
  ```bash
  $ git clone https://github.com/Alver23/real-estates.git <project-name>
  $ cd <project-name>
  ``` 
* Installing dependencies:
  ```bash
  $ npm i
  ```

## Usage

* Enter the project folder:
  ```bash
  $ cd <project-name>
  ```
  
* Mode: **development**
  ```bash
  $ npm run start
  ```
  
* Mode: **production**
  ```bash
  $ npm run build
  $ npm install -g serve
  $ serve -s build -l 4000
  ```

## Running the tests ⚙️

### Running unit tests 🔩

The unit test in the app is configuring only to test the logic, not e2e, to generate a test file, only is necessary to add this in `<project-name>/src/**/__tests__/` for other withe the format `<name>.spec.{ts, tsx}`.

```bash
$ npm test
```
**Note:** If you want exclude or modify test configuration, apply this change in `jest.config.js`

### Running linter 🖋

The project work with **ESlint** configuration using **Prettier** as rules template.

```bash
$ npm run lint && npm run stylelint
```

### Running Sonarqube

This tool allow run analysis of the project code and check if developer apply best practices and haven't any vulnerabilities in this using **Typescript**.

Before running this process it is necessary to configure the following environment variables in <rootDir>/.env file:

```
SONARQUBE_HOST_URL=<Sonarqube URL>
SONARQUBE_TOKEN=<Sonarqube Token>
```

Run analysis

```bash
$ npm run sonarqube
```

## Built with 🛠️

[//]: # (Mention the development libraries and frameworks you used to create your project)

* [Create react app](https://create-react-app.dev/)
* [Testing React: Enzyme](https://enzymejs.github.io/enzyme/)
* [Testing: Jest](https://jestjs.io/)
* [Formatter: Prettier](https://prettier.io/docs/en/index.html)
* [Linter: ESLint](https://eslint.org/)
* [Linter: Stylelint](https://stylelint.io/)
* [Tailwindcss](https://tailwindcss.com/)
* [Css with superpwers: Sass](https://sass-lang.com/)
* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
* [Standard version](https://github.com/conventional-changelog/standard-version)
* [Git hooks: husky](https://github.com/typicode/husky)

## Author

👤 **Alver Grisales Ortega**

* Website: https://github.com/Alver23
* Twitter: [@23Alver](https://twitter.com/23Alver)
* Github: [@Alver23](https://github.com/Alver23)
* LinkedIn: [@alvergrisales](https://linkedin.com/in/alvergrisales)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Alver Grisales Ortega](https://github.com/Alver23).<br />
This project is [MIT License](https://github.com/Alver23/real-estates/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
