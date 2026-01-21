<script setup lang="ts"></script>

<template>
    <section class="w-full py-24 md:py-32 px-6 md:px-12 max-w-[1200px] mx-auto" id="about">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 h-full">
            <!-- Section Label -->
            <div class="md:col-span-3 flex flex-col justify-between">
                <h2 class="text-sm font-bold tracking-widest uppercase text-primary mb-4">01. About</h2>
                <h3 class="text-3xl md:text-4xl font-bold leading-tight hidden md:block">
                    Engineering
                    <br />
                    Logic &amp;
                    <br />
                    Creativity.
                </h3>
            </div>

            <!-- Vertical Line (Desktop only) -->
            <div class="hidden md:block md:col-span-1 justify-center h-full">
                <div class="architectural-line-vertical"></div>
            </div>
            
            <!-- Bio Content -->
            <div class="md:col-span-8 flex flex-col gap-6">
                <p class="text-lg md:text-xl leading-relaxed font-body text-gray-700 dark:text-gray-300">
                    Hey, I'm Ilham. I’m primarily a Software Engineer focused on building clean, automated
                    systems that solve real problems. While I spend most of my time in the terminal, I have a
                    deep background in Hardware and Robotics, which gives me a unique perspective on how code
                    interacts with the physical world.
                </p>
                <p class="text-base md:text-lg leading-relaxed font-body text-gray-600 dark:text-gray-400">
                    My journey started in 2015 with self-taught coding, which I later backed up with an
                    Electronics background from Vocational School and an Informatics degree from Collage. For
                    the last 3 years, I’ve been freelancing—building everything from data pipelines to smart
                    gadgets.
                </p>
                <div class="mt-8 hidden">
                    <a
                        class="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
                        href="#">
                        Read full bio
                        <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
