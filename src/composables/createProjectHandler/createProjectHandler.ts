import {
    CollectionKey,
    Language,
    Project,
    ProjectTitleDescription,
} from '@/customTypes/customTypes'
import { setDocument } from '@/middleware/firebase/firebaseMiddleware'
import { ref, Ref } from 'vue'
import { switchClearForm } from '@/composables/store/store'

const titleEnglish: Ref<string> = ref('')
const descriptionEnglish: Ref<string> = ref('')
const langsAndTools: Ref<string[]> = ref([])
const links: Ref<{platform: string, url: string}> = ref({platform: '', url: ''})

const titleSpanish: Ref<string> = ref('')
const descriptionSpanish: Ref<string> = ref('')

const updateTitle: (lang: Language, ttl: Ref<string>) => void = (lang: Language, ttl: Ref<string>) => {
    lang === 'english' ? titleEnglish.value = ttl.value : titleSpanish.value = ttl.value
}

const updateDescription: (lang: Language, desc: Ref<string>) => void = (lang: Language, desc: Ref<string>) => {
    lang === 'english' ? descriptionEnglish.value = desc.value : descriptionSpanish.value = desc.value
}

const updateLangsAndTools: (langs: Ref<string>) => void = (langs: Ref<string>) => {
    const hasComma = langs.value.includes(',')
    if (hasComma) {
        langsAndTools.value = langs.value.trim().split(', ')
    } else {
        langsAndTools.value = Array(langs.value)
    }
}

const updateLinks: (l: Ref<{platform: string, url: string}>) => void = (l: Ref<{platform: string, url: string}>) => {
    links.value.platform = l.value.platform
    links.value.url = l.value.url
}

const useSetProject = (): void => {
    const col: CollectionKey = 'projects'
    const { saveDocFunc } = setDocument()
    saveDocFunc(col, newProject())
    switchClearForm(col)
}

const newProject: () => Ref<Project> = () =>{
    return ref({
        project: {
            english: {
                title: titleEnglish.value,
                description: descriptionEnglish.value,
            },
            spanish: {
                title: titleSpanish.value,
                description: descriptionSpanish.value,
            }
        } as ProjectTitleDescription,
        langsAndTools: langsAndTools.value,
        links: links.value
    })
}

export {
    updateTitle,
    updateDescription,
    updateLangsAndTools,
    updateLinks,
    useSetProject
}
