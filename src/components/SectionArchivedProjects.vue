<script setup lang="ts">
type Project = { year: number; title: string; tech: string; kind?: string; links?: string[] }
const projects: Project[] = [
    {
        year: 2025,
        title: "Time Tracking App",
        tech: "Python, SQLite, FastAPI, Vue, Tailwind, Typescript",
        kind: "Python, Web Integration"
    },
    {
        year: 2025,
        title: "News Aggregator",
        tech: "Python, FastAPI, Vue, Tailwind, Typescript",
        kind: "Python, Web Scraping, Web Integration"
    },
    {
        year: 2025,
        title: "Job Scraper",
        tech: "Python, SQLite, FastAPI, Vue, Tailwind, Typescript",
        kind: "Python, Web Scraping, Data Analysis, Web Integration"
    },
    { year: 2024, title: "CoinScreener", tech: "Python", kind: "Python, Web Scraping, Automation" },
    { year: 2024, title: "Text Editor", tech: "Vanilla, Firebase, CodeMirror, JavaScript", kind: "Web" },
    {
        year: 2023,
        title: "Animagine Ext",
        tech: "Vanilla, Firebase, CodeMirror, JavaScript",
        kind: "Web Extention"
    },
    {
        year: 2022,
        title: "AI Cashier App",
        tech: "Python, Tensorflow, JavaScript, Vue",
        kind: "Python, ML Computer Vision, Web Integration"
    },
    { year: 2023, title: "Hoyo Gaming Utils", tech: "Python", kind: "Python, Automation" },
    { year: 2022, title: "Personal Web", tech: "Typescript, Vue, Tailwind", kind: "Web" },
    {
        year: 2022,
        title: "Atrial Fibrillation Detection",
        tech: "JavaScript, Vue, Arduino",
        kind: "Hardware, Web Integration"
    },
    { year: 2021, title: "Expense Record", tech: "Express JS, SQLite, JavaScript, Vue", kind: "Web" },
    { year: 2021, title: "Auto dimming street lights", tech: "Arduino", kind: "Hardware" },
    { year: 2020, title: "Hunger Monster", tech: "Construct2", kind: "Game, Web" },
    {
        year: 2020,
        title: "Quadpod Robot",
        tech: "JavaScript, Vue, Arduino",
        kind: "Hardware, Web Integration"
    },
    { year: 2019, title: "BRuang", tech: "Laravel, MySQL, JavaScript, PHP, Java", kind: "Web, Mobile Apps" },
    { year: 2019, title: "Wireless Joystick", tech: "C, PCB, Arduino", kind: "Hardware" },
    { year: 2019, title: "Bimbel Manggis V2", tech: "Laravel, JavaScript, MySQL, Vue, PHP", kind: "Web" },
    { year: 2019, title: "SumoBot", tech: "C, PCB, Arduino", kind: "Hardware" },
    {
        year: 2019,
        title: "Vehicle measurement devices",
        tech: "SQLite, Arduino, Kotlin",
        kind: "Hardware, Mobile Apps Integration"
    },
    { year: 2019, title: "Illegal Logging Detector", tech: "Arduino", kind: "Hardware" },
    {
        year: 2018,
        title: "IoT DAM",
        tech: "JavaScript, MySQL, Arduino, PHP",
        kind: "Hardware, Web Integration"
    },
    { year: 2018, title: "Bimbel Manggis", tech: "WPF, C#, .Net, MySQL", kind: "Desktop Apps" },
    { year: 2018, title: "Digital Clock", tech: "Arduino", kind: "Hardware" },
    { year: 2018, title: "Prayer Clock", tech: "CVAVR", kind: "Hardware" },
    { year: 2017, title: "Power Amplifier PCB", tech: "", kind: "Hardware" },
    {
        year: 2016,
        title: "Robot Arm Wrapper",
        tech: "Visual Basic, Arduino, WinForm",
        kind: "Hardware, Desktop Apps Integration"
    },
    { year: 2016, title: "Line Follower Robot", tech: "Arduino", kind: "Hardware" },
    { year: 2016, title: "Dot Matrix Display", tech: "Arduino", kind: "Hardware" },
    { year: 2016, title: "Bad USB (USB Rubber Ducky)", tech: "Arduino", kind: "Hardware" },
    { year: 2015, title: "Wi-Fi Jammer", tech: "Arduino", kind: "Hardware" },
    { year: 2015, title: "Door locking system", tech: "Arduino", kind: "Hardware" }
]
</script>

<template>
    <section class="w-full py-24 px-6 md:px-12 max-w-[1200px] mx-auto" id="archived">
        <div class="flex flex-col gap-10">
            <h2 class="text-sm font-bold tracking-widest uppercase text-primary">04. Archived Projects</h2>
            <div class="w-full overflow-x-auto">
                <table class="archive-table">
                    <thead>
                        <tr>
                            <th class="px-4 w-auto">Year</th>
                            <th class="px-4 w-auto">Project</th>
                            <th class="hidden md:table-cell w-auto">Kind</th>
                            <th class="w-12 text-right"></th>
                        </tr>
                    </thead>
                    <tbody class="text-sm">
                        <tr v-for="project in projects" class="group transition-colors">
                            <td class="px-4">{{ project.year }}</td>
                            <td class="font-bold text-[#111815] dark:text-gray-100 text-base">
                                {{ project.title }}
                            </td>
                            <td class="hidden md:table-cell font-mono text-gray-500">
                                {{ project.kind?.replace(/,/g, " /") }}
                            </td>
                            <td class="text-right"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>
