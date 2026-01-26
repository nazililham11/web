<script setup lang="ts"></script>

<template>
    <section
        class="w-full min-h-screen md:min-h-[85vh] relative flex flex-col justify-center items-center px-6 md:px-12 pt-20 mx-auto overflow-hidden">
        <div class="max-w-4xl flex flex-col gap-6 z-10">
            <span class="font-bold text-primary tracking-widest">://_ </span>

            <!-- Intro -->
            <h1
            class="hidden text-6xl md:text-7xl lg:text-7xl font-bold leading-[0.75] tracking-tight text-white">
            <span>Naz</span>
                <span class="stroke">i</span>
                <span class="mr-6">l</span>

                <span>Ilh</span>
                <span class="stroke">am</span>
                <br />
                <span>Burhan</span>
                <span class="stroke">udin</span>
            </h1>
            <h1
            class="text-6xl md:text-7xl lg:text-7xl font-bold leading-[0.75] tracking-tight text-white">
            Hi, Im Ilham.
        </h1>

            <p class="text-lg text-white max-w-[50ch] font-body leading-relaxed mt-4">
                Software Engineer 
                <span class="text-gray-400">based in </span>
                Sidoarjo, 
                <span class="text-red-500">Indo</span>
                <span class="text-white">nesia</span>
                .
            </p>
            <!-- Subheadline -->
            <p class="text-lg text-gray-400 max-w-[50ch] font-body leading-relaxed">
                I write python code, buld an web based stuff, and occasionally tinkering with robots or
                electronics.
                <span class="inline-block animate-bounce ml-2 text-primary text-2xl">~</span>
            </p>

            <!-- Architectural Tech List -->
            <div
                class="flex flex-wrap items-center gap-x-4 gap-y-4 text-sm md:text-base font-mono mt-12">
                <span class="hover:text-primary transition-colors cursor-default">
                    <span class="text-yellow-500">Pyt</span>
                    <span class="text-sky-500">hon</span>
                </span>
                <span class="text-primary/40">/</span>
                <span class="hover:text-primary transition-colors cursor-default">
                    <span class="text-yellow-500">JavaScript</span>
                </span>
                <span class="text-primary/40">/</span>
                <span class="hover:text-primary transition-colors cursor-default">
                    <span class="text-green-400">Vue Js</span>
                </span>
                <span class="text-primary/40">/</span>
                <span class="hover:text-primary transition-colors cursor-default">
                    <span class="text-blue-500">Embedded Systems</span>
                </span>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="hidden absolute bottom-10 left-6 md:left-12 animate-pulse">
            <span class="material-symbols-outlined text-gray-400 !text-3xl">arrow_downward</span>
        </div>

        <img
            class="absolute top-0 w-full h-full object-center object-cover grayscale brightness-30"
            src="/img/hero-background.jpg"
            alt="banner" />
    </section>
</template>

<style scoped></style>
