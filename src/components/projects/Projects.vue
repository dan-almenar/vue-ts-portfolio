<template>
<h1>{{ lang === 'english' ? 'Projects' : 'Proyectos' }}</h1>
<h3>{{ lang === 'english' ? 'A review of the proyects I\'ve worked on' : 'Una muestra de los proyectos en los que he trabajado'}}</h3>
<!-- test code -->
<div v-if="projects.loading">
    <Loading />
</div>
<div v-if="projects.err">
    <ErrorPage :err="badGateway" />
</div>
<div v-if="projects.data">
    <p v-for="project in projects.data" :key="project.links.url">
        {{ project }}
    </p>
</div>
<!-- end of test code -->

</template>

<script lang="ts">
import { FirebaseCollection, Language } from '@/customTypes/customTypes'
import { errors } from '@/customTypes/Errors'
import { inject, Ref } from 'vue'
import Loading from '@/components/common/Loading.vue'
import ErrorPage from '@/components/common/ErrorPage.vue'
import { useGetProjects } from '@/composables/useGetDocuments/useGetDocuments'
export default {
    name: 'Projects',
    setup() {
        const lang = inject('lang') as Language
        const { badGateway } = errors
        const projects: Ref<FirebaseCollection> = useGetProjects()
        return {
            lang,
            badGateway,
            projects,
        }
    },
    components: {
        Loading,
        ErrorPage,
    }
}
</script>

<style scoped>
h1, h3 {
    color: blue;
}
</style>