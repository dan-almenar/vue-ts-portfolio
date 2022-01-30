<template>
<p>{{ useLang }}</p>
      <div v-if="!isSecondForm" class="regular-form">
          <h4>{{ formTitle }}</h4>
        <input type="text"
            v-model="title"
            required
            :placeholder="titlePlaceholder"><br>
        <textarea type="text"
            v-model="description"
            :placeholder="descriptionPlaceholder"
            required
            maxlength="600"
            :class="textAreaClass"/><br>
        <input type="text"
            v-model="tools"
            required
            :placeholder="toolsPlaceholder"><br>
        <input type="text"
            v-model="platform"
            required
            :placeholder="platformPlaceholder"><br>
        <input type="text"
            v-model="url"
            required
            placeholder="url"><br>
      </div>
      <div v-else class="extended-form">
          <h4>{{ formTitle }}</h4>
        <input v-if="isSecondForm"
            type="text"
            v-model="titleSecondForm"
            required
            :placeholder="titlePlaceholder"><br>
        <textarea
            v-model="descriptionSecondForm"
            required
            maxlength="600"
            :placeholder="descriptionPlaceholder"
            :class="textAreaClass"/><br>
      </div>
</template>

<script lang="ts">
import { getters } from '@/composables/store/store'
import { updateTitle, updateDescription, updateLangsAndTools, updateLinks } from '@/composables/createProjectHandler/createProjectHandler'
import { inject, Ref, computed, ComputedRef, ref, watch, unref } from 'vue'
import { Language } from '@/customTypes/customTypes'
export default {
    name: 'CreateProject',
    props: {
        isSecondForm: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    setup(props: any){
        const clearProjectForm: Ref<boolean> = getters.clearProjectForm()
        const isSecondForm = props.isSecondForm as boolean
        const lang = inject('lang') as Ref<Language>
        const title: Ref<string> = ref('')
        const titleSecondForm: Ref<string> = ref('')
        const description: Ref<string> = ref('')
        const descriptionSecondForm: Ref<string> = ref('')
        const tools: Ref<string> = ref('')
        const platform: Ref<string> = ref('')
        const url: Ref<string> = ref('')

        // computed
        const useLang: ComputedRef<Language> = computed(() => {
            if (isSecondForm === true) {
                return lang.value === 'english' ? 'spanish' : 'english'
            } else {
                return lang.value
            }
        })
        const titlePlaceholder: ComputedRef<string> = computed(()=> {
            return useLang.value === 'english' ? 'Title' : 'Título'
        })
        const descriptionPlaceholder: ComputedRef<string> = computed(()=> {
            return useLang.value === 'english' ? 'Description' : 'Descripción'
        })
        const toolsPlaceholder: ComputedRef<string> = computed(()=>{
            return useLang.value === 'english' ? 'Langs and tools (comma separated)' : 'Lenguajes y herramientas (separados por comas)'
        })
        const platformPlaceholder: ComputedRef<string> = computed(()=>{
            return useLang.value === 'english' ? 'Platform' : 'Plataforma'
        })
        const formTitle: ComputedRef<string> = computed(()=>{
            return useLang.value === 'english' ? 'English' : 'Español'
        })
        const textAreaClass: ComputedRef<string> = computed(() =>{
            if (useLang.value === lang.value){
                if (description.value.length >= 30 && description.value.length <= 125){
                    return 'expanded'
                } else if (description.value.length > 125 && description.value.length <=300) {
                    return 're-expanded'
                } else if (description.value.length > 300) {
                    return 'max-expanded'
                } else {
                    return ''
                }
            } else {
                if (descriptionSecondForm.value.length >= 30 && descriptionSecondForm.value.length <= 125){
                    return 'expanded'
                } else if (descriptionSecondForm.value.length > 125 && descriptionSecondForm.value.length <=300) {
                    return 're-expanded'
                } else if (descriptionSecondForm.value.length > 300) {
                    return 'max-expanded'
                } else {
                    return ''
                }
            }
        })


        // watchers:
        watch(title, () => {
            updateTitle(unref(useLang), title)
        })
        watch(titleSecondForm, () => {
            updateTitle(unref(useLang), titleSecondForm)
        })
        watch(description, () => {
            updateDescription(unref(useLang), ref(description.value.replaceAll('\n', '*n*')))
        })
        watch(descriptionSecondForm, () => {
            updateDescription(unref(useLang), ref(descriptionSecondForm.value.replaceAll('\n', '*n*')))
        })
        watch(tools, () => {
            updateLangsAndTools(tools)
        })
        watch(platform, () => {
            updateLinks(ref({platform: platform.value, url: url.value}))
        })
        watch(url, () => {
            updateLinks(ref({platform: platform.value, url: url.value}))
        })
        watch(clearProjectForm, () => {
            title.value = ''
            titleSecondForm.value = ''
            description.value = ''
            descriptionSecondForm.value = ''
            tools.value = ''
            platform.value = ''
            url.value = ''
        })

        return {
            useLang,
            title,
            titleSecondForm,
            description,
            descriptionSecondForm,
            tools,
            platform,
            url,
            titlePlaceholder,
            descriptionPlaceholder,
            toolsPlaceholder,
            platformPlaceholder,
            formTitle,
            textAreaClass,
        }
    }
}
</script>

<style scoped>
.expanded {
    width: 350px;
    height: 100px;
}
.re-expanded {
    width: 350px;
    height: 260px;
}
.max-expanded {
    width: 350px;
    height: 440px;
}
input, textarea {
    margin: 5px auto;
    width: 275px;
    height: 40px;
    font-size: 1.2rem;
    padding-left: 25px;
    border-radius: 8px;
    outline: none;
    border: 2px solid blue;
    font-family: Helvetica;
}
input:focus, textarea:focus {
    border: 3px solid blue;
    animation: 1s expand forwards;
}
h4 {
    font-size: 1.4rem;
    color: firebrick;
    line-height: .8rem;
}
/* animations */
@keyframes expand {
    0% {
        transform: scale(0.8);
        width: 300px;

    }
    100% {
        transform: scale(1);
        width: 350px;
    }
}
</style>