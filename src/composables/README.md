## COMPOSABLES
The *src/composables/* folder contains all the composable components of the application:
- The ***src/composables/store/*** which defines **global states and mutations**. Mutations are functions that modify global states (such as the current language). **Mutations follow the Mutation interface** defined in the *src/customTypes/customTypes.ts* file, basically a function that can get a state and a payload as parameters and modify said state without any return value (void).

As more composables are added during the development, they will be added here.
