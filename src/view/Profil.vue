<template>

    <div class="container mx-auto flex flex-col p-12 gap-2 items-center my-4">
        <h1 class="text-4xl uppercase tracking-widest">
            <Label labels_id="profile__profile"></Label>
        </h1>

        <div class="flex flex-col my-8 gap-2 items-center">
            <span class="uppercase tracking-widest text-4xl flex gap-2">
                <span class="text-sky-600 font-black">Nazil</span>
                <span class="text-gray-100">Ilham Burhanudin</span>
            </span>
            <span class="text-gray-100">Sidoarjo, 8 November 1998 ({{ year_old }} Tahun)</span>
            <span class="text-gray-100">Sleman, Yogyakarta, Indonesia </span>


        </div>
    </div>

    <div class="container mx-auto flex flex-col p-12 gap-2 items-center my-4">
        <h1 class="text-4xl uppercase tracking-widest">
            <Label labels_id="profile__github_profile"></Label>
        </h1>

        <a class="flex my-8 gap-8 items-center"
            href="https://github.com/nazililham11"
            target="_blank"
             v-if="github_loaded">

            <img :src="github_profile.avatar_url"
                 alt="User Avatar"
                 class="rounded-full aspect-square h-32">

            <div class="flex flex-col">
                <h1 class="text-xl">{{ github_profile.name }}</h1>
                <span class="pl-4 text-gray-400">{{ github_profile.login }}</span>

                <div class="flex gap-8 mt-4">
                    <span class="text-gray-400 mr-2 fill-gray-400 flex items-center gap-2">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        Repos
                        <span class="text-gray-100">{{ github_profile.public_repos }}</span>
                    </span> 
                    
                    <span class="text-gray-400 mr-2 fill-gray-400 flex items-center gap-2">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code-square UnderlineNav-octicon">
                            <path fill-rule="evenodd" d="M1.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm9.22 3.72a.75.75 0 000 1.06L10.69 8 9.22 9.47a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM6.78 6.53a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06L5.31 8l1.47-1.47z"></path>
                        </svg>
                        Gist
                        <span class="text-gray-100">{{ github_profile.public_gists }}</span>
                    </span>
                </div>

                <!-- <span class="text-gray-100 mt-4">{{ github_profile.bio }}</span> -->
            </div>
        </a>

        <div class="flex lg:items-start gap-8 lg:flex-row flex-col items-center">
            <img :src="github_stat">
            <img :src="github_top_lang">
        </div>

    </div>
</template>

<script>

import utils from './../utils/utils'
import fetchers from './../utils/fetchers'
import Label from './../components/Label.vue'

export default {
    components: { Label },
    data() {
        return {
            github_profile: {},
            github_stat: '',
            github_top_lang: '',
            visitor: 0,
            year_old: 0,
        }
    },
    computed: {
        github_loaded() {
            return this.github_profile.login != undefined
        },
    },
    async beforeMount() {
        this.year_old = utils.year_diff_from_now('11/8/1998')
        this.github_stat = fetchers.github_stat_img()
        this.github_top_lang = fetchers.github_top_lang_img()
        this.github_profile = await fetchers.github_profile()
    }
}
</script>

<style>

</style>