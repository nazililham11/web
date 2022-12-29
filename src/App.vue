<template>
    <div
         class="container mx-auto flex flex-col p-4 gap-6 items-center min-h-screen">

        <span class="text-4xl font-semibold uppercase">Portofolio</span>

        <div class="flex">
            <img v-show="false"
                 class="h-40"
                 src="https://github-readme-stats.vercel.app/api?username=nazililham11&include_all_commits=true&show_icons=true&hide_border=true&title_color=000">
            <img v-show="false"
                 class="h-40"
                 src="https://github-readme-stats.vercel.app/api/top-langs/?username=nazililham11&langs_count=9&layout=compact&hide_border=true">
        </div>



        <div class="flex flex-wrap justify-center gap-2 mt-4">
            <button class="py-1 px-2 rounded text-xs border border-gray-600"
                    v-for="(_tag, _index) in tags"
                    :key="_tag"
                    :class="{
                        'bg-gray-600 text-gray-100': _tag.active,
                        'bg-gray-100 text-gray-600': !_tag.active
                    }"
                    @click="tags_OnClick(_index)">
                {{ _tag.title }} ({{ _tag.count }})
            </button>
        </div>

        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <button class="py-1 px-2 rounded text-xs border border-gray-600"
                    v-for="(_year, _index) in years"
                    :key="_year"
                    :class="{
                        'bg-gray-600 text-gray-100': _year.active,
                        'bg-gray-100 text-gray-600': !_year.active
                    }"
                    @click="years_OnClick(_index)">
                {{ _year.title }} ({{ _year.count }})
            </button>
        </div>

        <div class="rounded-lg shadow-lg w-full p-6 flex flex-col"
             v-for="(_project, _index) in filtered_projects"
             :key="_project">

            <span class="text-xl font-semibold">
                {{ _project.title }}
            </span>
            <span class="">
                {{ _project.year }}
            </span>

            <div class="flex gap-2 my-2">
                <span class="bg-gray-600 text-gray-100 py-1 px-2 rounded text-xs"
                      v-for="_tag in _project.tags"
                      :key="_tag">
                    {{ _tag }}
                </span>
            </div>

            <a v-if="_project.repository"
               :href="_project.repository"
               target="_blank"
               class="flex items-center mt-2">
                <img alt="Github logo"
                     class="h-4 mr-2"
                     src="./assets/github-logo.png">
                {{ repo_name(_project.repository) }}
            </a>
            <span class="mb-2"
                  v-if="_project.achievement">
                🏆 {{ _project.achievement }}
            </span>

            <div class="flex gap-4 min-h-[10rem] mt-4 
                        items-start md:flex-row flex-col flex-wrap"
                 :class="{ 'flex-row-reverse': _index % 2 == 0 }">

                <span class="border-l-4 p-2 border-gray-600 flex flex-auto w-full h-fit">
                    {{ _project.content }}
                </span>

                <template v-if="_project.images.length">
                    <img class="max-h-full md:min-w-[20%] max-w-[30%] rounded-lg"
                         v-for="_img of _project.images"
                         :key="_img"
                         :src="'./img/' + _img">
                </template>

                <div class="bg-gray-600 h-20 flex-auto rounded-lg overflow-hidden
                            flex items-center justify-center bg-opacity-50 aspect-video"
                     v-else>
                    <span class="text-gray-100 text-4xl font-semibold">
                        No Image
                    </span>
                </div>

            </div>

        </div>

    </div>

    <div class="bg-gray-200 flex p-8 gap-8 justify-between mt-8
                md:flex-row flex-col">

        <div class="flex flex-col gap-2">
            <span class="text-lg font-semibold">Github</span>
            <a href="https://github.com/nazililham11"
               class="text-lg font-semibold flex">
                <img alt="Github logo"
                     class="h-7 mr-2"
                     src="./assets/github-logo.png">
                nazililham11
            </a>
        </div>


        <div class="flex flex-col">
            <span class="font-semibold">Halaman Dibuat Dengan</span>
            <div class="flex p-2 gap-2">
                <img alt="Vue logo"
                     class="h-10"
                     src="./assets/vue-logo.png">
                <img alt="Tailwind logo"
                     class="h-10"
                     src="./assets/tailwind-logo.png">
            </div>
        </div>
    </div>

</template>

<script>
import project from './../assets/project.json'

export default {
    name: 'App',
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

