<script setup lang="ts">
import Navbars from "./components/Navbars.vue"
import SectionHero from "./components/SectionHero.vue"
import SectionAbout from "./components/SectionAbout.vue"
import SectionSkills from "./components/SectionSkills.vue"
import SectionProjects from "./components/SectionProjects.vue"
import SectionArchivedProjects from "./components/SectionArchivedProjects.vue"
import SectionFooter from "./components/SectionFooter.vue"

import { onKeyStroke } from "@vueuse/core"
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

onKeyStroke("q", (e) => e.ctrlKey && toggleDark(), { dedupe: true })
</script>

<template>
    <div
        class="bg-background-light dark:bg-background-dark text-[#111815] dark:text-gray-100 font-display transition-colors duration-300 antialiased overflow-x-hidden">
        <!-- Sticky Navigation -->
        <Navbars />
       
        <!-- Main Content Container -->
        <main class="flex flex-col w-full">
            <!-- HERO SECTION -->
            <SectionHero />

            <!-- ABOUT SECTION -->
            <SectionAbout />
            
            <!-- Divider -->
            <div class="w-full max-w-[1200px] mx-auto px-6 md:px-12">
                <div class="architectural-line"></div>
            </div>
            
            <!-- What I Do Section -->
            <SectionSkills/>
            
            <!-- Divider -->
            <div class="w-full max-w-[1200px] mx-auto px-6 md:px-12">
                <div class="architectural-line"></div>
            </div>
            
            
            <!-- Selected Projects Section -->
            <SectionProjects/>
            
            <!-- Divider -->
            <div class="w-full max-w-[1200px] mx-auto px-6 md:px-12">
                <div class="architectural-line"></div>
            </div>

            <!-- Selected Projects Section -->
            <SectionArchivedProjects/>
            
            <!-- Divider -->
            <div class="hidden w-full max-w-[1200px] mx-auto px-6 md:px-12">
                <div class="architectural-line"></div>
            </div>

            <SectionFooter/>
        </main>
    </div>
</template>

<style scoped></style>
