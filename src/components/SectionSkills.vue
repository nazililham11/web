<script setup lang="ts"></script>

<template>
    <section class="w-full py-24 md:py-32 px-6 md:px-12 max-w-[1200px] mx-auto" id="what-i-do">
        <div class="flex flex-col gap-16">
            <span class="text-sm font-bold tracking-widest uppercase text-primary">02. What I Do</span>
            <h2 class="text-4xl md:text-5xl font-bold tracking-tight">What I Do</h2>
                 
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                <!-- Card 1 -->
                <div
                    class="group flex flex-col gap-6 p-0 md:p-4 rounded-lg transition-colors hover:bg-surface/50 dark:hover:bg-surface-dark/50 -ml-4">
                    <div class="flex flex-col gap-3">
                        <h3 class="text-xl font-bold">Software Engineering</h3>
                        <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                            Building scalable, efficient web applications and backend systems with modern
                            frameworks and robust architecture.
                        </p>
                        <ul class="text-xs font-mono text-neutral-500 space-y-1">
                            <li>+ React / Next.js</li>
                            <li>+ Node.js / TypeScript</li>
                            <li>+ PostgreSQL</li>
                        </ul>
                    </div>
                </div>
                <!-- Card 2 -->
                <div
                    class="group flex flex-col gap-6 p-0 md:p-4 rounded-lg transition-colors hover:bg-surface/50 dark:hover:bg-surface-dark/50 -ml-4">

                    <div class="flex flex-col gap-3">
                        <h3 class="text-xl font-bold">Embedded Systems</h3>
                        <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                            Designing firmware and hardware integration for IoT devices. Bridging the physical
                            and digital worlds.
                        </p>
                        <ul class="text-xs font-mono text-neutral-500 space-y-1">
                            <li>+ Fusion 360</li>
                            <li>+ 3D Printing</li>
                            <li>+ Laser Cutting</li>
                        </ul>
                    </div>
                </div>
                <!-- Card 3 -->
                <div
                    class="group flex flex-col gap-6 p-0 md:p-4 rounded-lg transition-colors hover:bg-surface/50 dark:hover:bg-surface-dark/50 -ml-4">
                    <div class="flex flex-col gap-3">
                        <h3 class="text-xl font-bold">Mobile Development</h3>
                        <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                            Creating intuitive cross-platform mobile experiences that extend the functionality
                            of hardware products.
                        </p>
                        <ul class="text-xs font-mono text-neutral-500 space-y-1">
                            <li>+ C / C++</li>
                            <li>+ Altium Designer</li>
                            <li>+ ARM Cortex-M</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
