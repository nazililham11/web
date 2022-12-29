<template>
    
    <div class="container mx-auto flex flex-col p-12 gap-2 items-center my-4">

        <h1 class="text-4xl uppercase tracking-widest">
            <span class="m-0">Portofol</span>
            <span class="m-0 bg-sky-600 text-gray-900 px-1">io</span>
        </h1>

        <div class="flex flex-wrap justify-center gap-2 mt-4">
            <button class="py-1 px-2 rounded text-xs border text-gray-100 tag"
                    v-for="(_tag, _index) in tags"
                    :key="_tag"
                    :class="{ 'active': _tag.active }"
                    @click="tags_OnClick(_index)">

                <span class="font-semibold mr-2 uppercase tracking-wide">
                    {{ _tag.title }}
                </span>
                <span class="text-gray-500">{{ _tag.count }}</span>

            </button>
        </div>

        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <button class="py-1 px-2 rounded text-xs border text-gray-100 tag"
                    v-for="(_year, _index) in years"
                    :key="_year"
                    :class="{ 'active': _year.active }"
                    @click="years_OnClick(_index)">

                <span class="font-semibold mr-2 tracking-wide">
                    {{ _year.title }}
                </span>
                <span class="text-gray-500">{{ _year.count }}</span>

            </button>
        </div>

    </div>

    <div class="container mx-auto flex flex-col p-12 gap-12 
                items-center my-4 mb-auto flex-grow">

        <div class="rounded-lg w-full p-8 gap-2 flex flex-col bg-gray-800 
                    border border-sky-600"
             v-for="_project in filtered_projects"
             :key="_project">

            <div class="flex md:flex-row flex-col justify-between gap-4">
                <div class="flex flex-col gap-2">
                    <h1 class="text-xl font-semibold">
                        {{ _project.title }}
                    </h1>
                    <span class="text-gray-400">
                        {{ _project.year }}
                    </span>
                </div>

                <div class="flex flex-col md:items-end"
                     v-if="_project.repository">
                    <span class="text-gray-400">Halaman Repository</span>
                    <a :href="_project.repository"
                       target="_blank"
                       class="flex items-center mt-2 text-gray-100 text-lg">
                        <img alt="Github logo"
                             class="h-8 mr-2 bg-gray-100 rounded-full p-1"
                             :src="'./img/github-logo.png'">
                        {{ repo_name(_project.repository) }}
                    </a>
                </div>
            </div>



            <div class="flex gap-2 my-2 flex-wrap">
                <span class="bg-gray-700 text-gray-100 py-1 px-2 rounded text-xs"
                      v-for="_tag in _project.tags"
                      :key="_tag">
                    {{ _tag }}
                </span>
            </div>


            <span class="mb-2 text-gray-100"
                  v-if="_project.achievement">
                🏆 {{ _project.achievement }}
            </span>

            <div class="flex gap-4 min-h-[10rem] mt-4 
                        items-start md:flex-row flex-col">

                <template v-if="_project.images.length">
                    <img class="max-h-full md:min-w-[20%] md:max-w-[30%] rounded-lg"
                         v-for="_img of _project.images.slice(0, 2)"
                         :key="_img"
                         :src="'./img/' + _img">
                </template>

                <div class="bg-gray-700 h-40 rounded-lg flex items-center 
                            aspect-video justify-center bg-opacity-50 p-8 
                            text-gray-100 text-2xl font-semibold"
                     v-else>
                    No Image
                </div>

                <span class="flex-auto h-fit text-gray-200">
                    {{ _project.content }}
                </span>
            </div>

        </div>
    </div>

</template>

<script>
import project from './../../assets/project.json'
export default {
    data() {
        return {
            projects: project,
            tags: [],
            years: [],
        }
    },
    methods: {
        repo_name(url) {
            url = url + ''
            return url.split('/').pop()
        },
        tags_OnClick(index) {
            let all_active = true
            this.tags.forEach(t => all_active = all_active && t.active)
            if (all_active)
                this.tags = this.tags.map(t => ({ ...t, active: false }))
            this.tags[index].active = !this.tags[index].active
        },
        years_OnClick(index) {
            let all_active = true
            this.years.forEach(y => all_active = all_active && y.active)
            if (all_active)
                this.years = this.years.map(y => ({ ...y, active: false }))
            this.years[index].active = !this.years[index].active
        }
    },
    computed: {
        active_tags() {
            return (this.tags.filter(t => t.active)).map(t => t.title)
        },
        active_years() {
            return (this.years.filter(y => y.active)).map(y => y.title)
        },
        filtered_projects() {
            let tags = this.active_tags
            let years = this.active_years

            let filter_by_tags = p => {
                if (!Array.isArray(p.tags)) return false
                for (let t of p.tags)
                    if (tags.indexOf(t) > -1) return true
                return false
            }
            let filter_by_years = p => {
                return (years.indexOf(p.year + '') > -1)
            }

            let projects = this.projects.filter(filter_by_tags)
            projects = projects.filter(filter_by_years)

            return projects
        }
    },
    mounted() {
        const tags = {}, years = {}
        this.projects.forEach(p => {
            p.tags.forEach(t => tags[t] = isNaN(tags[t]) ? 1 : tags[t] + 1)
            years[p.year] = isNaN(years[p.year]) ? 1 : years[p.year] + 1
        })
        for (let key in tags)
            this.tags.push({ title: key, count: tags[key], active: true })
        for (let key in years)
            this.years.push({ title: key, count: years[key], active: true })

    }
}
</script>

<style>

</style>