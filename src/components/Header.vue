<template>
    <div class="flex flex-row justify-end py-4 px-8 gap-8">
        <a v-for="_tab in tabs"
           :key="_tab.link"
           :href="_tab.link"
           class="text-gray-100 text-lg"
           :class="{ 'border-b-4 border-sky-600': _tab.active }">
            {{ _tab.title }}
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                { title: "Home", link: "/home", active: false },
                { title: "Profil", link: "/profil", active: true },
                { title: "Resume", link: "/resume", active: false },
                { title: "Portofolio", link: "/portofolio", active: false },
            ]
        }
    }
}
</script>

<style>

</style>