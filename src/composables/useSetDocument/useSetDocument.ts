import { CollectionKey, ContactFormInput, Project, SaveDocumentStatus } from '@/customTypes/customTypes'
import { setDocument } from '@/middleware/firebase/firebaseMiddleware'
import { Ref } from 'vue'

const useSetComment = (doc: Ref<ContactFormInput>): Ref<SaveDocumentStatus> => {
    const col: CollectionKey = 'comments'
    const { saveOK, saveDocFunc } = setDocument()
    saveDocFunc(col, doc)
    return saveOK
}

export { useSetComment }
