import { auth, db } from '@/middleware/firebase/firebaseConfig'
import { Ref, ref } from 'vue'
import { setSaveOK, setUser } from '@/composables/store/store'
import { doc, getDoc, addDoc, DocumentReference, collection, getDocs, query, orderBy, OrderByDirection, FieldPath } from 'firebase/firestore'
import { ContactFormInput, CollectionKey, DocumentKey, FirebaseData, FirebaseUser, SaveDocumentStatus, FirebaseCollection, Project } from '@/customTypes/customTypes'
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { errors } from '@/customTypes/Errors'

const docRef = (collectionName: CollectionKey, documentName: DocumentKey): DocumentReference => {
    return doc(db, collectionName, documentName)
}

const badGateway = errors.badGateway
const forbidden = errors.forbidden

const getDocument = (col: CollectionKey, docu: DocumentKey): Ref<FirebaseData> => {
    const data: Ref<FirebaseData> = ref({});
    data.value.loading = true;

    const notFound: Error = new Error();
    notFound.name = '404: Resource not found';
    notFound.message = 'The requested document was not found in the database';

    const fetch = async (): Promise<void> => {
        try {
            const doc = await getDoc(docRef(col, docu))
            if (doc.exists()) {
                data.value.data = doc.data()
            } else {
                data.value.err = notFound
                console.log("Error fetching data:", data.value.err.name, data.value.err.message)
            }
        } catch (error) {
            data.value.err = badGateway
            console.log(data.value.err.name, data.value.err.message)
            console.log(error)
        } finally {
            data.value.loading = false
        }
    };
    fetch();

    return data
}

const getDocuments = (col: CollectionKey, sortedBy: string | FieldPath ='', direction: OrderByDirection | undefined =undefined): Ref<FirebaseCollection> => {
    const data: Ref<FirebaseCollection> = ref({
        data: [],
        loading: true,
    });

    (async () =>{
        const docsRef = query(collection(db, col), orderBy(sortedBy, direction))
        const docs = await getDocs(docsRef)
        try {
            data.value.data = []
            docs.forEach((doc) => {
                data.value.data?.push(doc.data())
            })
        } catch (error) {
            data.value.err = badGateway
        } finally{
            data.value.loading = false
        }
    })();

    return data

}

const getSignIn = (): {user: Ref<FirebaseUser>, signInFunc: (email: string, password: string) => void} => {
    const user: Ref<FirebaseUser> = ref({});
    const adminID = 'iiGBbEC17uO8Y2VXNTbc2cD2FNg1'

    const signInFunc = async (email: string, password: string) => {
        try {
            const signIn: UserCredential = await signInWithEmailAndPassword(auth, email, password)
            if (signIn.user.uid != adminID) {
                user.value.err = forbidden
            } else {
                user.value.user = signIn.user
                console.log(`Successfully logged in as ${user.value.user.email} with Admin privileges`)
            }
        } catch (error) {
            user.value.err = badGateway
        } finally {
            user.value.loading = false
            setUser(user)
        }
    }

    return {user, signInFunc }
}

const setDocument = <T extends ContactFormInput | Project>(): {saveOK: Ref<SaveDocumentStatus>, saveDocFunc: (col: CollectionKey, doc: Ref<T>) => void} => {
    const saveOK: Ref<SaveDocumentStatus> = ref({
        loading: false
    })

    const saveDocFunc: (col: CollectionKey, doc: Ref<T>) => Promise<void> = async (col: CollectionKey, doc: Ref<T>): Promise<void> => {
        const collectionName = col
        const newDoc = doc.value
        saveOK.value.loading = true
        saveOK.value.status = undefined
        setSaveOK(saveOK)
        try {
            await addDoc(collection(db, collectionName), newDoc)
            saveOK.value.saveDocumentOK = true
            saveOK.value.status = 200
            console.log(`Succesfully saved document to ${collectionName}`)
        } catch (error) {
            saveOK.value.error = badGateway
            console.log(saveOK.value.error.name, saveOK.value.error.message)
            console.log(error)
        } finally {
            saveOK.value.loading = false
            if (saveOK.value.status != undefined){
                setSaveOK(saveOK)
            }
            // reset saveOK back for reuse
            setTimeout(() => {
                setSaveOK(ref({loading: false}) as Ref<SaveDocumentStatus>)
            }, 3500)
        }
    }

    return { saveOK, saveDocFunc }
}

export { getDocument, getDocuments, getSignIn, setDocument }
