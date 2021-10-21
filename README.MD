# ist-app


This project was generated with [superplate](https://github.com/pankod/superplate).

## Backend

Backend of this project is based on Drupal. Backend will send, via API, json with all page content data. Front end should collect data from json and pass related data in suitable components. 

## Available Scripts

### Running the development server.

```bash
    yarn dev
```

### Building for production.

```bash
    yarn build
```

### Running the production server.

```bash
    yarn start
```
### Running the mock server and local development.

```bash
    yarn serve
```

### **SASS/SCSS**

Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax.

[Go To Documentation](https://sass-lang.com/documentation)


### **Fetch**

Next.js has a built-in polyfill for the fetch API. You don&#39;t need to worry about using it on either server or client side.

[Go To Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)


### **Storybook**

Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient.

[Go To Documentation](https://storybook.js.org/docs/react/get-started/introduction)


### **Environment Variables**

Use environment variables in your next.js project for server side, client or both.

[Go To Documentation](https://github.com/vercel/next.js/tree/canary/examples/environment-variables)


### **Bundle Analyzer**

Use webpack-bundle-analyzer in your Next.js project. Visualize size of webpack output files with an interactive zoomable treemap.

[Go To Documentation](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)


### **ESLint**

A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.

[Go To Documentation](https://eslint.org/docs/user-guide/getting-started)


### **Prettier**

An opinionated code formatter; Supports many languages; Integrates with most editors.

[Go To Documentation](https://prettier.io/docs/en/index.html)


### **Cypress**

Fast, easy and reliable testing for anything that runs in a browser.

[Go To Documentation](https://docs.cypress.io/guides/overview/why-cypress.html)


### **MobX**

As state manager was set up MobX. For each page was created its store for content storing. For Header and Footer was created their own store `common-page-content.store.ts`. All stores are in `stores` folder.

[Go To Documentation](https://mobx.js.org/README.html)


### **MaterialUI**

Material UI is the library for creating user interfaces. Use it to create application's ui elements. Configurations of Material ui theme is stored in `styles-config/theme.ts` file. If you need to change styles of default component you can use this file or `makeStyles` function based approach(to see how it looks just open one of the file from `uikit` directory). If you need to set the new style's value for all application, please, use `styles-config/custom-options.ts` for this.

[Go To Documentation](https://mui.com)


### getInitialProps and getServerSideProps nextjs methods

There are two different approaches for page content rendering - with two nextjs functions. 
`GetInitialProps` method is using for two pages: Home(`/`) and Register|SignIn(`/login`) pages. These pages use mobx store to save and render its content.
`GetServerSideProps` method is using for AboutUs(`/aboutus`) and JoinUs(`/joinUs`) pages. These pages do not use the mobx store and they both ask server for content every time user visit these page.
You can compare these two approaches and choose what is the best on your point of view. 
On my opinion, before to choose appropriate approach the backend should receive real data. 
But you can use `getServerSideProps` method it shuould not affect on page loading scores a lot.


### UI components examples

There are some examples of using the UI components on the home page. Before create the new ui component, please, check if this component already exist on the Home page. It saves your time.



