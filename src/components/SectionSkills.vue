<script setup lang="ts">
import Tags from "./Tags.vue"

const skill_subsections = [
    {
        title: "01. Python Engineering",
        subtitle: "I build smart automation, data collecting, integrate complex services, and turn statistical data into insights. My focus is always on making systems run faster, smarter, and more efficiently.",
        tech: "Notebook, FastAPI, Web Scraping, ETL Pipelines, Pandas, SQLite",
        image: "/img/word.jpg",
        image_class: "contrast-200",
    },
    {
        title: "02. FullStack Development",
        subtitle:
        "I create web apps, browser extensions, and custom dashboards. I especially enjoy building simple, clean interfaces to monitor or control smart gadgets.",
        tech: "Vue.js, TypeScript, Tailwind CSS, MySQL, SQLite, Laravel PHP",
        image: "/img/web.jpg",
        image_class: "bg-primary contrast-200 group-hover:contrast-100",
    },
    {
        title: "03. Hardware & Embedded Systems",
        subtitle:
            "I handle the full prototyping journey—designing PCBs, writing firmware, and crafting casings. I bridge the gap by ensuring your hardware integrates perfectly with web or mobile platforms.",
        tech: "C/C++, Arduino, PlatformIO, IoT Protocols, Electronic Design",
        image: "/img/pcb2.jpg",
        image_class: "contrast-200",
    }
]
</script>

<template>
    <section class="w-full py-24 md:py-32 px-6 md:px-12 max-w-[1200px] mx-auto" id="what-i-do">
        <div class="flex flex-col gap-12">
            <span class="text-sm font-bold tracking-widest uppercase text-primary">02. What I Do</span>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                <!-- Card -->
                <div v-for="subsection in skill_subsections"
                    class="group flex flex-col gap-6 p-4 rounded-lg transition-colors hover:bg-surface/50 dark:hover:bg-surface-dark/50 -ml-4">
                    <img class="opacity-75 saturate-0 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:saturate-100 w-full bg-cover bg-center object-cover aspect-square transition-all" :src="subsection.image" alt="" :class="subsection.image_class ?? ''">

                    <div class="flex flex-col gap-3">
                        <h3 class="text-xl font-bold">{{ subsection.title }}</h3>
                        <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                            {{ subsection.subtitle }}
                        </p>
                        <Tags :tags="subsection.tech" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
