<template>
    <div class="container mx-auto flex flex-col p-12 gap-8 items-center my-4">

        <h1 class="text-4xl uppercase tracking-widest">
            <Label labels_id="resume__education"></Label>
        </h1>

        <div class="flex flex-col bg-gray-800 rounded-lg border border-sky-600 p-8 w-full"
             v-for="_edu in resume.education"
             :key="_edu">

            <h1 class="text-xl mb-2">{{ _edu.institution }}</h1>
            <span class="text-gray-400">{{ _edu.major }}</span>
            <span class="text-gray-400">
                {{ _edu.start_year }} - {{ _edu.end_year }}
            </span>

            <ul class="list-disc text-gray-100 mt-4 px-4"
                v-if="Array.isArray(_edu.other_info)">
                <li v-for="_info of _edu.other_info"
                    :key="_info">
                    {{ _info }}
                </li>
            </ul>
            <span class="text-gray-100 mt-4 px-4"
               v-else>
                {{ _edu.other_info }}
            </span>

        </div>
    </div>

    <div class="container mx-auto flex flex-col p-12 gap-8 items-center my-4">

        <h1 class="text-4xl uppercase tracking-widest">
            <Label labels_id="resume__work_experience"></Label>
        </h1>

        <div class="flex flex-col bg-gray-800 rounded-lg border border-sky-600 p-8 w-full"
             v-for="_work of resume.work_exp"
             :key="_work">

            <h1 class="text-xl mb-2">{{ _work.title }}</h1>
            <span class="text-gray-400">{{ _work.company }}</span>
            <span class="text-gray-400"
                  v-if="_work.end_year == undefined || _work.start_year == _work.end_year">
                {{ _work.start_year }}
            </span>
            <span class="text-gray-400"
                  v-else>
                {{ _work.start_year }} - {{ _work.end_year }}
            </span>

            <ul class="list-disc text-gray-100 mt-4 px-4"
                v-if="Array.isArray(_work.other_info)">
                <li v-for="_info of _work.other_info"
                    :key="_info">
                    {{ _info }}
                </li>
            </ul>
            <span class="text-gray-100 mt-4 px-4"
               v-else>
                {{ _work.other_info }}
            </span>
            
        </div>

    </div>
</template>

<script>
import resume from './../../assets/resume_id.json'
import Label from './../components/Label.vue'

export default {
    components: { Label },
    data() {
        return {
            resume: resume
        }
    }
}
</script>

<style>

</style>