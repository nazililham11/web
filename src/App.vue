<script setup lang="ts">
import SectionHero from "./components/SectionHero.vue"
import SectionAbout from "./components/SectionAbout.vue"
import SectionSkills from "./components/SectionSkills.vue"
import SectionProjects from "./components/SectionProjects.vue"
import SectionAchievements from "./components/SectionAchievements.vue"
import SectionFooter from "./components/SectionFooter.vue"
</script>

<template>
    <div
        class="bg-background-light dark:bg-background-dark text-[#111815] dark:text-gray-100 font-display transition-colors duration-300 antialiased overflow-x-hidden">
        <!-- Sticky Navigation -->
        <nav
            class="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-background-dark/80 border-b border-divider dark:border-divider-dark transition-all">
            <div class="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <a class="text-xl font-bold tracking-tight group" href="#">
                    Nazil
                    <span class="text-primary group-hover:animate-pulse">.</span>
                </a>
                <div class="hidden md:flex items-center gap-10">
                    <a
                        class="text-sm font-medium hover:text-primary transition-colors hover-underline-animation"
                        href="#about">
                        About
                    </a>
                    <a
                        class="text-sm font-medium hover:text-primary transition-colors hover-underline-animation"
                        href="#what-i-do">
                        What I Do
                    </a>
                    <a
                        class="text-sm font-medium hover:text-primary transition-colors hover-underline-animation"
                        href="#projects">
                        Projects
                    </a>
                    <a
                        class="text-sm font-medium hover:text-primary transition-colors hover-underline-animation"
                        href="#contact">
                        Contact
                    </a>
                </div>
                <!-- Mobile Menu Icon -->
                <button class="md:hidden p-2 text-current">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
        <!-- Main Content Container -->
        <main class="flex flex-col w-full">
            <!-- HERO SECTION -->
            <SectionHero />
            
            <!-- Divider -->
            <div class="w-full max-w-[1200px] mx-auto px-6 md:px-12">
                <div class="architectural-line"></div>
            </div>

            <!-- ABOUT SECTION -->
            <SectionAbout />
            
            <!-- Divider -->
            <div class="w-full max-w-[1200px] mx-auto px-6 md:px-12">
                <div class="architectural-line"></div>
            </div>
            
            <!-- WHAT I DO SECTION -->
            <SectionSkills/>
            
            <!-- Divider -->
            <div class="w-full max-w-[1200px] mx-auto px-6 md:px-12">
                <div class="architectural-line"></div>
            </div>
            <!-- SELECTED PROJECTS SECTION -->
            <SectionProjects/>

            <!-- OTHER COOL STUFF SECTION -->
            <SectionAchievements/>
            
            <!-- Divider -->
            <div class="w-full max-w-[1200px] mx-auto px-6 md:px-12">
                <div class="architectural-line"></div>
            </div>

            <SectionFooter/>
        </main>
    </div>
</template>

<style scoped></style>
