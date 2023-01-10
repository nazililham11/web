<template>
    <div class="bg-gray-800 flex p-8 gap-8 justify-between mt-8
                md:flex-row flex-col border-t border-sky-600">

        <div class="flex flex-col gap-4">
            <h1 class="text-lg">Github</h1>
            <a href="https://github.com/nazililham11"
               class="text-lg font-semibold flex text-gray-100">
                <img alt="Github logo"
                     class="h-8 mr-2 bg-gray-100 rounded-full p-1"
                     :src="'./img/github-logo.png'">
                nazililham11
            </a>
        </div>


        <div class="flex flex-col gap-4">
            <h1 class="font-semibold text-gray-100 text-lg">
                <Label labels_id="footer__made_with"></Label>
            </h1>
            
            <div class="flex gap-2">
                <img alt="Vue logo"
                     class="h-10"
                     :src="'./img/vue-logo.png'">
                <img alt="Tailwind logo"
                     class="h-10"
                     :src="'./img/tailwind-logo.png'">
            </div>

            <span class="text-gray-100 font-semibold">
                <Label labels_id="footer__visitor"></Label>
                {{ visitor }}
            </span>

        </div>
    </div>
</template>

<script>
import Label from './../components/Label.vue'

export default {
    components: { Label },
    data() {
        return {
            visitor: 0,
        }
    },
    async mounted(){
        // const visitor_url = 'https://api.visitorbadge.io/api/visitors?path=nazililham11.profile'
        // const resp = await fetch(visitor_url).then(r => r.text())
        // let visitor = resp.split('<title>visitors:').pop()
        // visitor = visitor.split('</title>').shift()
        // this.visitor = parseInt(visitor)
        // console.log(visitor)
    }
}

</script>
