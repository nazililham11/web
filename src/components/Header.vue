<template>
    <div class="flex flex-row justify-end py-4 px-8 gap-8">
    <router-link v-for="_tab in tabs"
           :key="_tab.name"
           :to="{ name: _tab.name }"
           class="text-gray-100 text-lg"
           :class="{ 'border-b-4 border-sky-600': _tab.name == active }">
           <Label :labels_id="_tab.labels_id"></Label>
    </router-link>
    </div>
</template>

<script>
import Label from './../components/Label.vue'

export default {
    components: { Label },
    data() {
        return {
            tabs: [
                { labels_id: "header__profile", name: "profil" },
                { labels_id: "header__resume", name: "resume" },
                { labels_id: "header__portofolio", name: "portofolio" },
            ]
        }
    },
    computed: {
        active(){
            return this.$route.name
        }
    }
}
</script>

<style>

</style>