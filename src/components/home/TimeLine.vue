<template>
<div class="timeline">
    <n-timeline size="large">
        <n-timeline-item class="timeline-item"
        v-for="(item, index) in items[lang].reverse()"
        :key="index"
            :time="item.time"
            :title="item.title"
            :type="item.type"
            :content="item.content"
        />
    </n-timeline>
</div>
</template>

<script lang="ts">
import { getters } from '@/composables/store/store'
import { inject } from 'vue';
import { NTimeline, NTimelineItem } from 'naive-ui'
import { Language, TimelineObject } from '@/customTypes/customTypes';
export default {
    name: 'TimeLine',
    setup(){
        const lang = inject('lang') as Language
        const items: TimelineObject = getters.timeline()

        return {
            lang,
            items,
        }
    },
    components: {
        NTimeline,
        NTimelineItem,
    }
}
</script>

<style scoped>
.timeline {
    width: 400px;
    height: 350px;
    margin: 100px auto;
    overflow: auto;
    white-space: pre;
    text-align: left;
}
</style>