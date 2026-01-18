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
            <div class="hidden md:block md:col-span-1 flex justify-center h-full">
                <div class="architectural-line-vertical"></div>
            </div>
            <!-- Bio Content -->
            <div class="md:col-span-8 flex flex-col gap-6">
                <p class="text-lg md:text-xl leading-relaxed font-body text-gray-700 dark:text-gray-300">
                    I’m a software engineer with a heavy crush on electronics and robotics. I started teaching
                    myself to code back in 2015 and eventually turned that curiosity into a career.
                </p>
                <p class="text-base md:text-lg leading-relaxed font-body text-gray-600 dark:text-gray-400">
                    I don't just write code; I bridge the gap between Software (Web & Data) and Hardware (IoT
                    & Robots). Whether it's a data pipeline or a four-legged walking robot, I enjoy making
                    complex systems talk to each other.
                </p>
                <div class="mt-8">
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
