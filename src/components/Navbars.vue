<script setup lang="ts">
import { computed, ref, onMounted } from "vue"
import { useWindowScroll, useIntersectionObserver } from "@vueuse/core"

type Link = { id: string; label: string; hidden?: boolean }

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > window.innerHeight * 0.8)

const links: Link[] = [
    { id: "greeting", label: "Greetings", hidden: true },
    { id: "about", label: "About" },
    { id: "what-i-do", label: "What I Do" },
    { id: "projects", label: "Projects" },
    { id: "archived", label: "Archived Projects", hidden: true },
    { id: "contact", label: "Contact" }
]

const activeSectionIndex = ref<number>(0)
const activeSection = computed<Link | undefined>(() => links[activeSectionIndex.value])


function nextSection(step: number = 1) {
    const targetIndex = (activeSectionIndex.value + step) % links.length
    const link = links[targetIndex]
    if (link) {
        const el = document.getElementById(link.id)
        if (el) {
            window.scrollTo({ top: el.offsetTop, behavior: "smooth" })
            activeSectionIndex.value = targetIndex
        }
    }
}

onMounted(() => {
    links.forEach((link) => {
        const el = document.getElementById(link.id)
        if (!el) return
        
        useIntersectionObserver(
            el,
            ([entry]) => {
                if (!entry || !entry.isIntersecting) return

                const linkIndex = links.findIndex((l) => l.id == link.id)
                if (linkIndex >= 0) {
                    activeSectionIndex.value = linkIndex
                }
            },
            { threshold: 0.1 }
        )
    })
})
</script>
<template>
    <nav
        class="fixed top-0 z-50 w-full transition-all"
        :class="{
            'bg-background-light/25 dark:bg-background-dark/25 backdrop-blur text-[#111815] dark:text-gray-100':
                isScrolled,
            'backdrop-blur-none bg-transparent text-gray-100': !isScrolled
        }">
        <div class="max-w-[1200px] mx-auto p-4 flex items-center justify-between">
            <a class="text-xl" href="#greeting">
                <img
                    src="/favicon.svg"
                    alt=""
                    class="w-8 inline transition-all"
                    :class="{ 'invert-0 dark:invert': isScrolled, invert: !isScrolled }" />
            </a>
            <div class="hidden md:flex items-center gap-x-12 gap-y-6 justify-end">
                <a
                    v-for="link in links"
                    v-show="!link.hidden"
                    class="text-sm font-medium hover:text-primary transition-colors hover-underline-animation whitespace-nowrap"
                    :href="'#' + link.id">
                    {{ link.label }}
                </a>
            </div>
            <div class="flex md:hidden items-center gap-x-12 gap-y-6 justify-end">
                <a
                    v-if="activeSection"
                    class="text-sm font-medium hover:text-primary transition-colors hover-underline-animation whitespace-nowrap"
                    :href="'#' + activeSection.id"
                    @click.prevent="nextSection()">
                    {{ activeSection.label }}
                </a>
            </div>
        </div>
    </nav>
</template>
