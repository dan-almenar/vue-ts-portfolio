# Vue Typescript Portfolio
This project is up and running [here](https://danielalmenar.com). It serves as a replacement for my former portfolio which you can visit following [this link](https://dan-developer.web.app). That said, this portfolio is still subject to changes, specially UI wise.

Both apps are build using VueJS and Firebase, yet there are major differences between them:
- The first one was my entry point to VueJS, Vuex and Firebase; and even tho fully functional, there are major flaws codewise.
- This project is developed with TypeScript (and Vue), and it's my first TypeScript project, yet my understanding of the Vue ecosystem is much higher.
- As opposed to the first project, this one is built with VueJS composition API. Composable functions entirely replace Vuex for state management.
- UI design wise, first apps is styled with pure CSS, yet this one uses a couple of components from [Naive UI](https://naiveui.com) (Timeline and Switch) and [vue material design icons](https://www.npmjs.com/package/vue-material-design-icons). Everything else is made with pure CSS.

### Note:
The reason I didn't simply replace my first portfolio with this one is to showcase my progress with the Vue ecosystem and also to built a TypeScript project from scratch.

### .gitignore
Aside node modules, env files, logs and other folders and files that are not meant to be committed to the repository, I added the following to the .gitignore file:
- ***src/middleware/firebase/firebaseConfig.ts*** which holds sensitive data (i.e. firebase credentials).
Every other folder and file that was added to the .gitignore list has been white flagged and commited. (Again, with the exception of the default list automatically set by Vue CLI at creation of the project).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).