import { Ref, ref, readonly } from 'vue'
import { CollectionKey, FirebaseUser, Language, Mutation, SaveDocumentStatus, TimelineItem, TimelineObject } from '@/customTypes/customTypes'

const language: Ref<Language> = ref('english')
const firebaseUser: Ref<FirebaseUser> = ref({loading: true}) as Ref<FirebaseUser>
const saveOK: Ref<SaveDocumentStatus> = ref({loading: false}) as Ref<SaveDocumentStatus>
const clearProjectForm: Ref<boolean> = ref(false)
const clearCommentForm: Ref<boolean> = ref(false)

const timelineItems = {
    english: [
        {
            type: "error",
            title: "Started like this...",
            content: "HTML / CSS courses at FreeCodeCamp\nNot much after that...",
            time: "2019-01"
        },
        {
            type: "info",
            title: "Got into Python",
            content: "My first programming language",
            time: "2020-01"
        },
        {
            type: "info",
            title: "Really got into Python",
            content: "APIs, basic webapps, bots and whatnot",
            time: "2020-02"
        },
        {
            type: "info",
            title: "Python for Data Science",
            content: "Jupyter Notebook, Pandas, Numpy, Matplotlib, etc.",
            time: "2020-06"
        },
        {
            type: "warning",
            title: "Time for me to learn Git...",
            content: "",
            time: "2020-07"
        },
        {
            type: "info",
            title: "Diving deeper into Data Science",
            content: "Made some projects and even a couple of tutorials.",
            time: "2020-09"
        },
        {
            type: "warning",
            title: "I need to try something else...\nHello, Golang!",
            content: "Golang became my second programming language.",
            time: "2020-10"
        },
        {
            type: "error",
            title: "Something is missing...",
            content: "Started to learn about algorithms and data structures.",
            time: "2021-01"
        },
        {
            type: "warning",
            title: "Can't avoid Javascript forever...",
            content: "Got Javascript as a third programming language",
            time: "2021-02"
        },
        {
            type: "success",
            title: "Why did I hate this?",
            content: "The more I went into Javascript, the more I liked it.\nWhy was I so stubborn agasint it?",
            time: "2021-03"
        },
        {
            type: "info",
            title: "Vanilla Javascript is great, but...",
            content: "I picked Vue.js\nWeb development was never the same...",
            time: "2021-07"
        },
        {
            type: "success",
            title: "I love Vue.js",
            content: "I'm devoted to Vue.js and its whole eccosystem\nSome projects were made including a full scale\nmicroblogging PWA: Yawp!",
            time: "2021-11"
        },
        {
            type: "warning",
            title: "I miss static languages...",
            content: "I started to learn Typescript\nI also got into Vue 3 composition API",
            time: "2021-12"
        },
        {
            type: "success",
            title: "What's next?",
            content: "I'm quite comfortable now as for searching\nfor a full time developer job.",
            time: "2022-01"
        }
    ] as TimelineItem[],
    spanish: [
        {
            type: "error",
            title: "Comenzó así...",
            content: "Cursos de HTML / CSS en FreeCodeCamp\nNo much más después de eso...",
            time: "2019-01"
        },
        {
            type: "info",
            title: "Arranqué con Python",
            content: "Mi primer lenguaje de programación",
            time: "2020-01"
        },
        {
            type: "info",
            title: "Me metí de lleno con Python",
            content: "APIs, webapps básicas, bots, etc.",
            time: "2020-02"
        },
        {
            type: "info",
            title: "Python para Ciencia de Datos",
            content: "Jupyter Notebook, Pandas, Numpy, Matplotlib, etc.",
            time: "2020-06"
        },
        {
            type: "warning",
            title: "Hora de aprender Git...",
            content: "",
            time: "2020-07"
        },
        {
            type: "info",
            title: "Metiéndome más de lleno en la Ciencia de Datos",
            content: "Hice algunos proyectos e incluso un par de tutoriales.",
            time: "2020-09"
        },
        {
            type: "warning",
            title: "Necesito probar otra cosa...\nHola, Golang!",
            content: "Golang se convierte en mi segundo lenguaje de programación.",
            time: "2020-10"
        },
        {
            type: "error",
            title: "Falta algo...",
            content: "Comencé a aprender sobre algoritmos y estructuras de datos.",
            time: "2021-01"
        },
        {
            type: "warning",
            title: "No puedo evitar a Javascript para siempre...",
            content: "Tomé Javascript como mi tercer lenguaje de programación",
            time: "2021-02"
        },
        {
            type: "success",
            title: "¿Por qué odiaba esto?",
            content: "Mientras más me adentraba en Javascript, más me gustaba.\n¿Por qué fui no quise aprenderlo antes?",
            time: "2021-03"
        },
        {
            type: "info",
            title: "Vanilla Javascript es genial, pero...",
            content: "Aprendí Vue.js\nEl desarrollo web no volvió a ser el mismo...",
            time: "2021-07"
        },
        {
            type: "success",
            title: "Amo Vue.js",
            content: "Estoy dedicado a Vue.js y todo su ecosistema\nDesarrollé algunos projectos incluyendo una\nuno de gran escala: una PWA de microblogging: Yawp!",
            time: "2021-11"
        },
        {
            type: "warning",
            title: "Extraño los lenguajes tipados...",
            content: "Comencé a aprender Typescript\nTambién me metí de lleno con el composition API de Vue3",
            time: "2021-12"
        },
        {
            type: "success",
            title: "¿Qué sigue?",
            content: "Confiado en mis habilidades, ahora estoy buscando\nun trabajo formal a tiempo completo como desarrollador web.",
            time: "2022-01"
        }
    ] as TimelineItem[]
} as TimelineObject

const state = {
    lang: language,
    user: firebaseUser,
    timeline: timelineItems,
    saveOK: saveOK,
    clearProjectForm: clearProjectForm,
    clearCommentForm: clearCommentForm
}

const switchLanguage: Mutation = (): void => {
    language.value === 'english' ? language.value = 'spanish' : language.value = 'english'
}

const setUser: Mutation = (user: Ref<FirebaseUser>): void => {
    firebaseUser.value = user.value
}

const setSaveOK: Mutation = (payload: Ref<SaveDocumentStatus>): void => {
    saveOK.value = payload.value
}

const switchClearForm: Mutation = (payload: CollectionKey): void => {
    payload === 'projects' ? clearProjectForm.value = true : clearCommentForm.value = true
    
    // reset to default value (false) after 1 second:
    setTimeout(() => {
        payload === 'projects' ? clearProjectForm.value = false : clearCommentForm.value = false
    }, 1000)
}

const getters = readonly({
    lang: (): Ref<Language> => state.lang,
    user: (): Ref<FirebaseUser> => state.user,
    timeline: (): TimelineObject => state.timeline,
    saveOK: (): Ref<SaveDocumentStatus> => state.saveOK,
    clearProjectForm: (): Ref<boolean> => state.clearProjectForm,
    clearCommentForm: (): Ref<boolean> => state.clearCommentForm
})

export { switchLanguage, setUser, setSaveOK, switchClearForm, getters }
