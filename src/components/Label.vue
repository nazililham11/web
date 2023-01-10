<template>
    <span v-for="_label of labels_get_separate(labels_id)"
        :key="_label"
        :class="_label.is_highlighted ? highlighted_class : ''">
        {{_label.label}}
    </span>
</template>

<script>
import labels from './../utils/labels.js'
export default {
    props: {
        'labels_id': String,
        'highlighted_class': {
            type: String,
            default: 'bg-sky-600 text-gray-900 px-1'
        }
    },
    methods: {
        labels_get_separate: labels.labels_get_separate
    }
}
</script>

<style>

</style>