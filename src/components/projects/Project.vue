<template>
    <div class="wrapper" v-if="isVisible">
        <h3 class="title">{{ projectProp.project[lang].title }}</h3>
        <p class="description">{{ projectProp.project[lang].description }}</p>
        <!-- <p class="langs">{{ lang === 'english' ? 'Programming Languages & Tools' : 'Lenguajes y Herramientas de Programación'}}</p> -->
        <span class="langs" v-for="lang in projectProp.langsAndTools" :key="lang">{{ lang }}</span>
        <br><br><a class="link" :href="projectProp.links.url"><span class="link-span">Link:</span> {{ project.links.platform }}</a>
    </div>
</template>

<script lang=ts>
import { inject, ref, Ref, watch } from 'vue'
import { Language, Project } from '@/customTypes/customTypes'
export default {
    name: 'ProjectComponent',
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
    setup(props: any) {
        const lang = inject('lang') as Ref<Language>
        const projectProp = props.project as Project
        const filterByTool: Ref<string[]> = inject('filterByTool') as Ref<string[]>
        const filterByDescription: Ref<string> = inject('filterByDescription') as Ref<string>
        const isVisible: Ref<boolean> = ref(true)

        // watchers
        watch(filterByTool, () => {
            // declare lowercase array variables:
            let projectLangsToLower: string[] = []

            // update lowercase arrays:
            projectProp.langsAndTools.forEach((tool) => {
                projectLangsToLower.push(tool.trim().toLowerCase())
            })

            // verify if the every search keywords are in the project's langsAndTools:
            if (filterByTool.value.length === 0 || filterByTool.value[0] === '') {
                isVisible.value = true
            } else {
                filterByTool.value.forEach((tool) => {
                    if (projectLangsToLower.includes((tool.trim().toLowerCase()))) {
                        isVisible.value = true
                    } else {
                        isVisible.value = false
                    }
                })
            }

        })
        watch(filterByDescription, () => {
            if (filterByDescription.value.length > 0) {
                isVisible.value = projectProp.project[lang.value].description.toLowerCase().includes(filterByDescription.value.toLowerCase())
            } else {
                isVisible.value = true
            }
            if (filterByDescription.value.trim() === '') {
                isVisible.value = true
            }
        })

        return {
            lang,
            projectProp,
            filterByTool,
            filterByDescription,
            isVisible,
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 600px;
    margin: 15px auto;
    text-align: left;
    animation: 2s fadeIn forwards;
}
.title {
    font-size: 2rem;
    color: blue;
    margin-top: 40px;
}
.description {
    font-size: 1.4rem;
    padding-left: 20px;
    line-height: 2rem;
    white-space: pre-line;
}
.langs {
    font-size: 1.2rem;
    color: blue;
    margin-right: 5px;
}
.link {
    font-size: 1.4rem;
    color: firebrick;
    text-decoration: none;
    font-weight: bold;
}
.link-span {
    color: black;
    font-size: 1.3rem;
    font-weight: normal;
}

/* animations */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* media queries */
@media (max-width: 480px) {
    .wrapper {
        width: 75%;
    }
    .title {
        font-size: 1.6rem;
    }
    .description {
        font-size: 1.2rem;
        padding-left: 0px;
        margin-top: -15px;
    }
    .langs {
        font-size: 1rem;
    }
    .link {
        font-size: 1rem;
    }
    .link-span {
        font-size: .9rem;
    }
}
</style>