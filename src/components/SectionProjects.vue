<script setup lang="ts">
</script>

<template>
    <section class="w-full py-24 md:py-32 px-6 md:px-12 max-w-[1200px] mx-auto" id="projects">
        <div class="flex flex-col gap-12">
            <div class="flex items-end justify-between">
                <h2 class="text-sm font-bold tracking-widest uppercase text-primary">
                    03. Selected Projects
                </h2>
                <a
                    class="hidden md:inline-block text-sm font-medium border-b border-gray-300 hover:border-primary hover:text-primary transition-colors pb-1"
                    href="#">
                    View Archive
                </a>
            </div>
            <!-- Projects List -->
            <div class="flex flex-col">
                <!-- Project 1 -->
                <div
                    class="group border-b border-divider dark:border-divider-dark py-8 hover:border-primary dark:hover:border-primary transition-colors cursor-pointer">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="flex flex-col gap-2">
                            <h3
                                class="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                                Smart Home Hub
                            </h3>
                            <p class="font-body text-sm text-gray-500">
                                IoT Architecture / MQTT / React Native
                            </p>
                        </div>
                        <div
                            class="flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <span class="text-sm font-bold uppercase tracking-wider">View Case Study</span>
                            <span class="material-symbols-outlined text-primary">arrow_forward</span>
                        </div>
                    </div>
                </div>
                <!-- Project 2 -->
                <div
                    class="group border-b border-divider dark:border-divider-dark py-8 hover:border-primary dark:hover:border-primary transition-colors cursor-pointer">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="flex flex-col gap-2">
                            <h3
                                class="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                                Autonomous Drone Controller
                            </h3>
                            <p class="font-body text-sm text-gray-500">C++ / PX4 / Computer Vision</p>
                        </div>
                        <div
                            class="flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <span class="text-sm font-bold uppercase tracking-wider">View Case Study</span>
                            <span class="material-symbols-outlined text-primary">arrow_forward</span>
                        </div>
                    </div>
                </div>
                <!-- Project 3 -->
                <div
                    class="group border-b border-divider dark:border-divider-dark py-8 hover:border-primary dark:hover:border-primary transition-colors cursor-pointer">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="flex flex-col gap-2">
                            <h3
                                class="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                                SaaS Dashboard
                            </h3>
                            <p class="font-body text-sm text-gray-500">Next.js / TypeScript / Supabase</p>
                        </div>
                        <div
                            class="flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <span class="text-sm font-bold uppercase tracking-wider">View Case Study</span>
                            <span class="material-symbols-outlined text-primary">arrow_forward</span>
                        </div>
                    </div>
                </div>
            </div>
            <a class="md:hidden mt-4 inline-block text-sm font-medium text-primary" href="#">
                View All Projects -&gt;
            </a>
        </div>
    </section>
</template>

<style scoped></style>
