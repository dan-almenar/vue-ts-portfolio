import { ComputedRef, Ref } from 'vue'
import { DocumentData, CollectionReference, DocumentReference } from 'firebase/firestore'
import { User } from 'firebase/auth'

type Language = 'english' | 'spanish'

type CollectionKey = 'personalInfo' | 'projects' | 'skills' | 'comments'
type DocumentKey = 'bio' | 'projects' | 'langsAndTools'

interface FirebaseData {
    data?: DocumentData
    err?: Error
    loading?: boolean
}

interface FirebaseCollection {
    data?: DocumentData[]
    err?: Error
    loading?: boolean
}

interface FirebaseUser {
    user?: User
    err?: Error
    loading?: boolean
}

interface Mutation {
    (state?: any, payload?: any): void 
}

type ContactFormInput = {
    name: string,
    email: string,
    message: string,
    date: Date | number
}

type ProjectTitleDescription = {
    [key in Language]: {
        title: string,
        description: string,
    }
}

interface Project {
    project: ProjectTitleDescription,
    langsAndTools: Array<string>,
    links: {
        platform: string,
        url: string,
    }    
}

type TimelineItem = {
    type: string,
    title: string,
    content: string,
    time: string,
}

type TimelineObject = {
    [key in Language]: TimelineItem[]
}

interface SaveDocumentStatus {
    saveDocumentOK?: boolean,
    error?: Error,
    loading?: boolean
    status?: number
}

export {
    Language,
    FirebaseData,
    FirebaseCollection,
    FirebaseUser,
    CollectionKey,
    DocumentKey,
    Mutation,
    ContactFormInput,
    SaveDocumentStatus,
    ProjectTitleDescription,
    Project,
    TimelineItem,
    TimelineObject,
}
