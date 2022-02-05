import { FirebaseUser } from '@/customTypes/customTypes'
import { getSignIn } from '@/middleware/firebase/firebaseMiddleware'
import { Ref } from 'vue'

const useSignIn = (email: string, password: string): Ref<FirebaseUser> => {
    const { user, signInFunc } = getSignIn()
    signInFunc(email, password)
    return user
}

export { useSignIn }
