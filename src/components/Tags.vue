<script setup lang="ts">
    defineProps<{ tags: string }>()
</script>
<template>
    <p class="text-sm font-mono text-gray-500">
        <template v-for="tag in tags.split(',')">
            <span>{{ tag }}</span>
            <span class="dark:text-white text-black last:hidden"> / </span>
        </template>
    </p>
</template>