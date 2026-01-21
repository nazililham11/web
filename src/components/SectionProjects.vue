<script setup lang="ts">
import Tags from "./Tags.vue"

const projects = [
    {
        title: "Job Market Scraper & Analysis",
        subtitle: "2024://_ Python / Automation / Data Analysis",
        description:
            "An automated system that scrapes and analyzes the job market to get job market insights.",
        thumbnail: "/img/jobmarket_analysis.jpg",
        tech: "Python, Pandas, Firebase, Vega Altair, Telegram Bot"
    },
    {
        title: "AI-Powered Cashier",
        subtitle: "2021://_ Python / ML / Web Itegrations",
        description:
            'A concept of "smart" cashier system that uses Machine Learning to recognize products instantly without scannig barcodes.',
        thumbnail: "/img/deteksi_produk.jpg",
        tech: "Python, Tensorflow, MobileNet, JavaScript, Vue, Bootstrap"
    },
    {
        title: "The Walking Robot (Quadpod)",
        subtitle: "2020://_ Hardware / Robotics",
        description:
            "A 4-legged robot I built from scratch—designing the body, the electronics, and the math to make it walk.",
        thumbnail: "/img/quadpod.jpg",
        tech: "C++, Arduino, PID, Inverse Kinematic, Maze Mapping"
    },
    {
        title: "Time Tracking App",
        subtitle: "2024://_ Python / Web Itegrations",
        description:
            "A personal productivity tool that tracks work hours and screen time to keep me honest about where my day goes.",
        thumbnail: "/img/timetracker.jpg",
        tech: "Python, Vue, Tailwind, Vite"
    },
    {
        title: "Robot Arm Wrapper",
        subtitle: "2016://_ Hardware / Native App Integration",
        description:
            "A desktop app that lets you record a series of movements and play them back on a robotic arm.",
        thumbnail: "/img/arm_robot_app.jpg",
        tech: "Arduino, GRBL, Visual Basic"
    }
]
</script>

<template>
    <section class="w-full py-24 md:py-32 px-6 md:px-12 max-w-[1200px] mx-auto" id="projects">
        <div class="flex flex-col gap-12">
            <div class="flex items-end justify-between">
                <h2 class="text-sm font-bold tracking-widest uppercase text-primary">
                    03. Selected Projects
                </h2>
                <a
                    class="hidden text-sm font-medium border-b border-gray-300 hover:border-primary hover:text-primary transition-colors pb-1"
                    href="#">
                    View Archive
                </a>
            </div>
            <!-- Projects List -->
            <div class="flex flex-col">
                <!-- Project 1 -->
                <div
                    v-for="(project, index) in projects"
                    class="group border-b border-divider dark:border-divider-dark py-8 transition-colors relative">
                    <!-- Hover Indicator Line -->
                    <div
                        class="absolute left-0 right-0 bottom-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"></div>

                    <div class="grid grid-cols-1 md:grid-cols-12 min-h-[150px]">
                        <!-- Project Info -->
                        <div
                            class="col-span-1 md:col-span-6 p-8 flex flex-col justify-between"
                            :class="{ 'order-last': index % 2 == 0 }">
                            <div>
                                <div class="flex items-center gap-3 mb-4">
                                    <span class="h-px w-8 bg-primary"></span>
                                    <span class="text-xs font-mono text-primary uppercase">
                                        {{ project.subtitle }}
                                    </span>
                                </div>
                                <h3
                                    class="text-3xl md:text-5xl font-bold mb-6 group-hover:text-primary transition-colors">
                                    {{ project.title }}
                                </h3>
                                <p class="text-slate-400 text-lg leading-relaxed mb-6">
                                    {{ project.description }}
                                </p>
                            </div>
                            <Tags :tags="project.tech" />
                        </div>

                        <!-- Project Visual/Abstract -->
                        <div class="col-span-1 md:col-span-6 relative h-64 md:h-auto overflow-hidden">
                            <div
                                class="absolute inset-0 bg-background-dark/50 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                            <img
                                class="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700"
                                :src="project.thumbnail"
                                alt="" />

                            <!-- Tech Overlay -->
                            <div class="absolute bottom-0 right-0 p-6 z-20 hidden">
                                <a
                                    class="h-12 w-12 bg-primary text-white flex items-center justify-center hover:bg-white hover:text-background-dark transition-colors"
                                    href="#">
                                    <span class="material-symbols-outlined -rotate-45">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="hidden mt-4 text-sm font-medium text-primary" href="#">
                View All Projects -&gt;
            </a>
        </div>
    </section>
</template>

<style scoped></style>
