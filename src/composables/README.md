## COMPOSABLES
The *src/composables/* folder contains all the composable components of the application:
- The ***src/composables/store/*** which defines **global states and mutations**. Mutations are functions that modify global states (such as the current language). **Mutations follow the Mutation interface** defined in the *src/customTypes/customTypes.ts* file, basically a function that can get a state and a payload as parameters and modify said state without any return value (void).
- The ***src/composables/useSetDoc*** holds the *useSedDoc.ts* file, which defines and exports the *useSetDoc* function. It executes under the hood the firebase/firestore necessary implementations to add documents to the database.
- The ***src/composables/useSignIn*** holds the *useSignIn.ts* file, which defines and exports the *useSignIn* function. It executes under the hood the firebase/auth necessary implementations to sign in the Admin and enable him to make changes to the database. Any attempt of sign in by an user who is not the Admin will return and error.

As more composables are added during the development, they will be added here.
