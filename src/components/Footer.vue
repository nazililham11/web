<template>
    <div class="bg-gray-800 flex p-8 gap-8 justify-between mt-8
                md:flex-row flex-col border-t border-sky-600">

        <div class="flex flex-col gap-2">
            <h1 class="text-lg">Github</h1>
            <a href="https://github.com/nazililham11"
               class="text-lg font-semibold flex text-gray-100">
                <img alt="Github logo"
                     class="h-8 mr-2 bg-gray-100 rounded-full p-1"
                     :src="'./img/github-logo.png'">
                nazililham11
            </a>
        </div>


        <div class="flex flex-col">
            <h1 class="font-semibold text-gray-100 text-lg">
                Halaman Dibuat Dengan
            </h1>
            <div class="flex p-4 gap-2">
                <img alt="Vue logo"
                     class="h-10"
                     :src="'./img/vue-logo.png'">
                <img alt="Tailwind logo"
                     class="h-10"
                     :src="'./img/tailwind-logo.png'">
            </div>
        </div>
    </div>
</template>
