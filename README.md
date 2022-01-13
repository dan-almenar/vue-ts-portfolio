# Vue Typescript Portfolio
This project serves as a replacement for my current portfolio which you can visit following [this link](https://dan-developer.web.app).

Both apps are build using VueJS and Firebase, yet there are major differences between them:
- The first one was my entry point to VueJS, Vuex and Firebase; and even tho fully functional, there are major flaws codewise.
- This project is developed with TypeScript (and Vue), and it's my first TypeScript project, yet my understanding of the Vue ecosystem is much higher.
- As opposed to the first project, this one is built with VueJS composition API. Composable functions entirely replace Vuex for state management.
- UI design wise, both apps are styled with pure CSS, yet this one uses [vue material design icons](https://www.npmjs.com/package/vue-material-design-icons). Initially I added Naive UI, yet I discard it afterwards.

### Note:
The reason I didn't simply replace my first portfolio with this one is to showcase my progress with the Vue ecosystem and also to built a TypeScript project from scratch.

### .gitignore
Some folders/files had been added to the .gitignore files and will be white flagged at deployment. Others will remain black listed in the .gitignore.
In every case, the root folder of each file / folder added to the .gitignore will have a README.md file explaining what has been black listed and why.

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