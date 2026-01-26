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
        class="absolute top-0 z-50 w-full">
        <div class="max-w-[1200px] mx-auto p-4 flex items-center justify-between">
            <a class="text-xl" href="#">
                <img src="/favicon.svg" alt="" class="w-8 dark:invert inline">
            </a>
            <div class="flex items-center gap-10">
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
