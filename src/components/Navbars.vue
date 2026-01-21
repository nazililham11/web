<script setup lang="ts">
const navbar_links = {
    "#about": "About",
    "#what-i-do": "What I Do",
    "#projects": "Projects",
    "#contact": "Contact"
}
</script>
<template>
    <nav
        class="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-background-dark/80">
        <div class="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
            <a class="text-xl group" href="#">
                <span class="inline-block group-hover:animate-pulse h-4 w-4 rounded-full bg-primary mr-2"></span>
            </a>
            <div class="hidden md:flex items-center gap-10">
                <a
                    v-for="(label, link) in navbar_links"
                    class="text-sm font-medium hover:text-primary transition-colors hover-underline-animation"
                    :href="link">
                    {{ label }}
                </a>
            </div>
            <!-- Mobile Menu Icon -->
            <button class="md:hidden p-2 text-current">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>
    </nav>
</template>
