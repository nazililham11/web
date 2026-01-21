<script setup lang="ts"></script>

<template>
    <section
        class="relative w-full min-h-[85vh] flex flex-col justify-center px-6 md:px-12 pt-20 max-w-[1200px] mx-auto">
        <div class="max-w-4xl flex flex-col gap-6">
            <!-- Intro -->
            <h1
                class="text-6xl md:text-8xl lg:text-[110px] font-bold leading-[0.9] tracking-tight text-[#111815] dark:text-white">
                Hi, I’m Ilham
                <span class="text-primary">.</span>
            </h1>

            <!-- Subheadline -->
            <p
                class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-4 max-w-2xl font-body leading-relaxed">
                I write Python scripts, develop websites, and occasionally experiment with robots or electronics.
                <span class="inline-block animate-bounce ml-2 text-primary text-2xl">~</span>
            </p>
            
            <!-- Architectural Tech List -->
            <div class="mt-12 pt-8 border-t border-divider dark:border-divider-dark">
                <div
                    class="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm md:text-base font-mono text-gray-500 dark:text-gray-400">
                    <span class="hover:text-primary transition-colors cursor-default">Python</span>
                    <span class="text-primary/40">/</span>
                    <span class="hover:text-primary transition-colors cursor-default">C++</span>
                    <span class="text-primary/40">/</span>
                    <span class="hover:text-primary transition-colors cursor-default">JavaScript</span>
                    <span class="text-primary/40">/</span>
                    <span class="hover:text-primary transition-colors cursor-default">Embedded Systems</span>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="hidden absolute bottom-10 left-6 md:left-12 animate-pulse">
            <span class="material-symbols-outlined text-gray-400 !text-3xl">arrow_downward</span>
        </div>
    </section>
</template>

<style scoped></style>
