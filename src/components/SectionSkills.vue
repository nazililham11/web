<script setup lang="ts">
import Tags from "./Tags.vue"

const skill_subsections = [
    {
        title: "01. Python Engineering",
        subtitle: "I use Python to automate the boring stuff, crawl the web for data, analysis data, and build the \"brain\" of an application.",
        tech: "Notebook, FastAPI, Web Scraping, ETL Pipelines, Pandas, SQLite",
        image: "/img/wordcloud.svg",
        image_class: "contrast-200",
        bullets: [
            "Automation & Scraping: I build scripts that handle the boring stuff, like crawling the web for data or automating repetitive workflows.",
            "Data Pipelines: I design systems that move, clean, and analyze data so it actually makes sense.",
            'AI & Machine Learning: I train custom models to help machines "see" and identify objects in the real world'
        ]
    },
    {
        title: "02. FullStack Development",
        subtitle:
        "Building the house from the foundation to the paint. I create everything from the database where info is stored to the buttons you click on your screen.",
        tech: "Vue.js, TypeScript, Tailwind CSS, MySQL, SQLite, Laravel PHP",
        image: "/img/web.png",
        image_class: "bg-primary contrast-200 group-hover:contrast-100",
        bullets: [
            "Frontend: I build clean, responsive, and fast user interfaces using modern tools like Vue and Tailwind.",
            "Backend & APIs: I write the logic and server-side code that keeps applications running smoothly.",
            "Cloud & Databases: I manage how data is stored and how apps are deployed to the world."
        ]
    },
    {
        title: "03. Hardware & Embedded Systems",
        subtitle:
            "Making machines think and move. I write the code that lives inside physical gadgets, sensors, and robots to make them interact with the real world.",
        tech: "C/C++, Arduino, PlatformIO, IoT Protocols, Electronic Design",
        image: "/img/pcb.png",
        image_class: "contrast-200 dark:invert",
        bullets: [
            "Firmware: I write the low-level code (C/C++) that tells microcontrollers exactly what to do.",
            "IoT Integration: I connect physical sensors to the internet, allowing you to monitor and control hardware from anywhere.",
            "Robotics: I design and build complex moving systems, from Sumo-wrestling robots to four-legged walkers."
        ]
    }
]
</script>

<template>
    <section class="w-full py-24 md:py-32 px-6 md:px-12 max-w-[1200px] mx-auto" id="what-i-do">
        <div class="flex flex-col gap-16">
            <span class="text-sm font-bold tracking-widest uppercase text-primary">02. What I Do</span>
            <h2 class="text-4xl md:text-5xl font-bold tracking-tight">What I Do</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                <!-- Card -->
                <div v-for="subsection in skill_subsections"
                    class="group flex flex-col gap-6 p-0 md:p-4 rounded-lg transition-colors hover:bg-surface/50 dark:hover:bg-surface-dark/50 -ml-4">
                    <img class="opacity-75 saturate-0 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:saturate-100 w-full bg-cover bg-center object-cover aspect-square transition-colors" :src="subsection.image" alt="" :class="subsection.image_class ?? ''">

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
