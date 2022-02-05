import { FirebaseData } from '@/customTypes/customTypes'
import { getDocument } from '@/middleware/firebase/firebaseMiddleware'
import { Ref } from 'vue'

const useGetBio = (): Ref<FirebaseData> => {
    return getDocument('personalInfo', 'bio')
}

const useGetSkills = (): Ref<FirebaseData> => {
    return getDocument('skills', 'langsAndTools')
}

export {
    useGetBio,
    useGetSkills
}
