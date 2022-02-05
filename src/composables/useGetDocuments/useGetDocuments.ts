import { FirebaseCollection } from '@/customTypes/customTypes'
import { getDocuments } from '@/middleware/firebase/firebaseMiddleware'
import { Ref } from 'vue'

const useGetComments: () => Ref<FirebaseCollection> = (): Ref<FirebaseCollection> => {
    return getDocuments('comments', 'date', 'desc')
}
const useGetProjects: () => Ref<FirebaseCollection> = (): Ref<FirebaseCollection> => {
    return getDocuments('projects', 'langsAndTools')
}

export { useGetComments, useGetProjects }