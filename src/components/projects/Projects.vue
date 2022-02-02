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
    <div class="filters">
        <input type="text" v-model="searchByTool"
            :placeholder="lang === 'english' ? 'Search by Languages & Tools' : 'Buscar por Lenguajes y Herramientas'">
        <br><input type="text" v-model="filterByDescription"
            :placeholder="lang === 'english' ? 'Search for description keyword' : 'Buscar por palabra clave en la descripción'">
    </div>
    <div v-for="project in projects.data" :key="project.links.url">
        <ProjectComponent :project="project" />
    </div>
</div>
<!-- end of test code -->

</template>

<script lang="ts">
import { FirebaseCollection, Language, Project } from '@/customTypes/customTypes'
import { errors } from '@/customTypes/Errors'
import { provide, inject, ref, Ref, ComputedRef, computed } from 'vue'
import ProjectComponent from '@/components/projects/Project.vue'
import Loading from '@/components/common/Loading.vue'
import ErrorPage from '@/components/common/ErrorPage.vue'
import { useGetProjects } from '@/composables/useGetDocuments/useGetDocuments'
export default {
    name: 'Projects',
    setup() {
        const lang = inject('lang') as Ref<Language>
        const { badGateway } = errors
        const projects: Ref<FirebaseCollection> = useGetProjects()
        const searchByTool: Ref<string> = ref('')
        const filterByDescription: Ref<string> = ref('')

        // computed
        const filterByTool: ComputedRef<string[]> = computed(() => searchByTool.value.split(', '))

        provide('filterByTool', filterByTool)
        provide('filterByDescription', filterByDescription)


        return {
            lang,
            badGateway,
            projects,
            searchByTool,
            filterByDescription,
        }
    },
    components: {
        Loading,
        ErrorPage,
        ProjectComponent,
    }
}
</script>

<style scoped>
h1, h3 {
    color: blue;
}
</style>