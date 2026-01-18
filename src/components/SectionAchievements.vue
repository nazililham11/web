<script setup lang="ts"></script>

<template>
     <section class="w-full py-24 md:py-32 px-6 md:px-12 max-w-[1200px] mx-auto" id="achievements">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 h-full">
            <!-- Section Label -->
            <div class="md:col-span-3 flex flex-col justify-between">
                <h2 class="text-sm font-bold tracking-widest uppercase text-primary mb-4">04. Recognition</h2>
                <h3 class="text-3xl md:text-4xl font-bold leading-tight hidden md:block">
                    Honors &amp;
                    <br />
                    Achievements.
                </h3>
            </div>
            <!-- Vertical Line (Desktop only) -->
            <div class="hidden md:block md:col-span-1 flex justify-center h-full">
                <div class="architectural-line-vertical"></div>
            </div>

            <div class="md:col-span-8 space-y-8">
                <!-- Item 1 -->
                <div class="flex gap-6 group">
                    <div class="pb-8">
                        <span class="text-xs font-mono text-primary mb-1 block">2023</span>
                        <h3 class="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                            HackMIT Winner - Hardware Track
                        </h3>
                        <p class="text-neutral-600 dark:text-neutral-400 text-sm">
                            Developed a novel assistive device for the visually impaired using LIDAR
                            technology and haptic feedback.
                        </p>
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="flex gap-6 group">
                    <div class="pb-8">
                        <span class="text-xs font-mono text-primary mb-1 block">2022</span>
                        <h3 class="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                            Intel Embedded System Certification
                        </h3>
                        <p class="text-neutral-600 dark:text-neutral-400 text-sm">
                            Advanced certification in RTOS architecture and driver development for FPGA
                            systems.
                        </p>
                    </div>
                </div>
                <!-- Item 3 -->
                <div class="flex gap-6 group">
                    <div>
                        <span class="text-xs font-mono text-primary mb-1 block">2021</span>
                        <h3 class="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                            Open Source Contributor
                        </h3>
                        <p class="text-neutral-600 dark:text-neutral-400 text-sm">
                            Core contributor to several IoT libraries used by over 5k developers
                            worldwide.
                        </p>
                    </div>
                </div>
            </div>
            <!-- Bio Content -->
   
        </div>
    </section>
    <section
        class="w-full py-16 md:py-24 px-6 md:px-12 max-w-[1200px] mx-auto bg-white dark:bg-background-dark" v-if="false">
        <h2 class="text-sm font-bold tracking-widest uppercase text-primary mb-12">
            04. Achievements &amp; Interests
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Achievement 1 -->
            <div
                class="bg-surface dark:bg-surface-dark p-6 rounded-md flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                <span class="material-symbols-outlined text-primary text-3xl">bug_report</span>
                <div>
                    <h4 class="font-bold text-lg mb-1">Bug Hunter</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 font-body">
                        Top 1% on HackerOne for finding critical vulnerabilities.
                    </p>
                </div>
            </div>
            <!-- Achievement 2 -->
            <div
                class="bg-surface dark:bg-surface-dark p-6 rounded-md flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                <span class="material-symbols-outlined text-primary text-3xl">precision_manufacturing</span>
                <div>
                    <h4 class="font-bold text-lg mb-1">Sumo Robot</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 font-body">
                        National Champion in Autonomous Sumo Robotics.
                    </p>
                </div>
            </div>
            <!-- Achievement 3 -->
            <div
                class="bg-surface dark:bg-surface-dark p-6 rounded-md flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                <span class="material-symbols-outlined text-primary text-3xl">code_blocks</span>
                <div>
                    <h4 class="font-bold text-lg mb-1">Open Source</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 font-body">
                        Active contributor to major IoT frameworks.
                    </p>
                </div>
            </div>
            <!-- Achievement 4 -->
            <div
                class="bg-surface dark:bg-surface-dark p-6 rounded-md flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                <span class="material-symbols-outlined text-primary text-3xl">keyboard</span>
                <div>
                    <h4 class="font-bold text-lg mb-1">Hackathons</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 font-body">
                        Winner of 3 regional hackathons in 2023.
                    </p>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div class="md:col-span-4">
                    <span class="text-primary font-mono text-sm mb-2 block">04. Recognition</span>
                    <h2 class="text-3xl font-bold">Achievements</h2>
                </div>
                <div class="md:col-span-8 space-y-8">
                    <!-- Item 1 -->
                    <div class="flex gap-6 group">
                        <div class="flex flex-col items-center">
                            <div
                                class="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-primary transition-colors mt-2"></div>
                            <div class="w-[1px] h-full bg-neutral-200 dark:bg-neutral-800 my-2"></div>
                        </div>
                        <div class="pb-8">
                            <span class="text-xs font-mono text-primary mb-1 block">2023</span>
                            <h3 class="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                                HackMIT Winner - Hardware Track
                            </h3>
                            <p class="text-neutral-600 dark:text-neutral-400 text-sm">
                                Developed a novel assistive device for the visually impaired using LIDAR
                                technology and haptic feedback.
                            </p>
                        </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="flex gap-6 group">
                        <div class="flex flex-col items-center">
                            <div
                                class="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-primary transition-colors mt-2"></div>
                            <div class="w-[1px] h-full bg-neutral-200 dark:bg-neutral-800 my-2"></div>
                        </div>
                        <div class="pb-8">
                            <span class="text-xs font-mono text-primary mb-1 block">2022</span>
                            <h3 class="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                                Intel Embedded System Certification
                            </h3>
                            <p class="text-neutral-600 dark:text-neutral-400 text-sm">
                                Advanced certification in RTOS architecture and driver development for FPGA
                                systems.
                            </p>
                        </div>
                    </div>
                    <!-- Item 3 -->
                    <div class="flex gap-6 group">
                        <div class="flex flex-col items-center">
                            <div
                                class="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-primary transition-colors mt-2"></div>
                        </div>
                        <div>
                            <span class="text-xs font-mono text-primary mb-1 block">2021</span>
                            <h3 class="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                                Open Source Contributor
                            </h3>
                            <p class="text-neutral-600 dark:text-neutral-400 text-sm">
                                Core contributor to several IoT libraries used by over 5k developers
                                worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
