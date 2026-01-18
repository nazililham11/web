<script setup lang="ts">
</script>

<template>
    <!-- FOOTER / CONNECT -->
    <footer class="w-full py-24 px-6 md:px-12 max-w-[1200px] mx-auto" id="contact">
        <div class="flex flex-col md:flex-row md:items-start justify-between gap-12">
            <div class="flex flex-col gap-6 max-w-lg">
                <h2 class="text-5xl md:text-6xl font-bold tracking-tight text-[#111815] dark:text-white">
                    Ready to build something?
                </h2>
                <p class="text-lg font-body text-gray-600 dark:text-gray-400">
                    I'm currently available for freelance projects and open to full-time opportunities.
                </p>
                <a
                    class="inline-block mt-4 text-xl font-bold text-primary hover:text-[#111815] dark:hover:text-white transition-colors underline decoration-2 underline-offset-4"
                    href="mailto:hello@nazil.dev">
                    hello@nazil.dev
                </a>
            </div>
            <div class="flex flex-col gap-8 md:text-right">
                <div class="flex flex-col gap-4">
                    <span class="text-sm font-bold uppercase tracking-widest text-gray-400">Socials</span>
                    <div class="flex flex-col md:items-end gap-2">
                        <a
                            class="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2 md:flex-row-reverse"
                            href="#">
                            GitHub
                            <span class="material-symbols-outlined text-sm">north_east</span>
                        </a>
                        <a
                            class="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2 md:flex-row-reverse"
                            href="#">
                            LinkedIn
                            <span class="material-symbols-outlined text-sm">north_east</span>
                        </a>
                        <a
                            class="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2 md:flex-row-reverse"
                            href="#">
                            Twitter
                            <span class="material-symbols-outlined text-sm">north_east</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="mt-24 pt-8 border-t border-divider dark:border-divider-dark flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 font-mono">
            <p>© 2024 Nazil. All rights reserved.</p>
            <p>
                Designed &amp; Built with
                <span class="text-primary">Logic</span>
            </p>
        </div>
    </footer>
</template>

<style scoped></style>
