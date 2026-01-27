<script setup lang="ts"></script>

<template>
    <section class="w-full py-24 md:py-32 px-6 md:px-12 max-w-[1200px] mx-auto" id="about">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 h-full">
            <!-- Section Label -->
            <div class="md:col-span-3 flex flex-col justify-start">
                <h2 class="text-sm font-bold tracking-widest uppercase text-primary mb-4">01. About</h2>
                <h3 class="text-3xl md:text-4xl font-bold leading-tight hidden md:block mt-8">
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
                <p class="text-base md:text-lg leading-relaxed font-body text-gray-700 dark:text-gray-300">
                    I’ve been writing code since 2015. What started as a self-taught obsession eventually led
                    me through formal degrees in both electronics and informatics, giving me a unique
                    perspective on how digital systems work from the ground up.
                </p>
                <p class="text-base md:text-lg leading-relaxed font-body text-gray-600 dark:text-gray-400">
                    Software is my primary way of expression. But you may also refer to me as Hardware Engineer if
                    you want. In my spare time, I enjoy tinkering with robotics and IoT projects,
                    where I fully learned algorithms, data structures, and deep code optimization. Working on
                    platforms with strictly limited resources taught me how to write software that is not just
                    functional, but also lean and highly performant.
                </p>
                <div class="mt-8 md:col-span-6">
                    <div class="mt-8 md:col-span-6">
                        <h2 class="text-lg md:text-xl font-bold mb-4">
                            Experience & Organizations
                        </h2>
                        <ul class="space-y-2 text-base md:text-lg leading-relaxed font-body text-gray-600 dark:text-gray-400">
                            <li>Freelance Software & Hardware Engineer (2019–Present)</li>
                            <li>Robotic R&D Team — HEXA Community (2019–2023)</li>
                            <li>Hardware Engineer Intern — JNN Malang (2016)</li>
                        </ul>
                    </div>
                    <div class="mt-8 md:col-span-6">
                        <h2 class="text-lg md:text-xl font-bold mb-4">Education</h2>
                        <ul class="space-y-2 text-base md:text-lg leading-relaxed font-body text-gray-600 dark:text-gray-400">
                            <li>Bachelor of Informatics — Universitas AMIKOM Yogyakarta (2023)</li>
                            <li>Electronics Engineering — SMK Negeri 1 Sidoarjo</li>
                        </ul>
                    </div>
                    <a
                        class="hidden items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
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
