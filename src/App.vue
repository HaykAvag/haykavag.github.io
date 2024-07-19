<script setup lang="ts">
    import Project from "./components/Project.vue";
    import projects from "./data/projects.json";
</script>

<template>
    <header>
        <h1>Hayk Avagyan's Portfolio</h1>
    </header>

    <Project
        v-for="project in projects"
        :name="project.name"
        :src="project.src"
        :description="project.description"
    />
</template>

<style scoped>
    header {
        color: #6aeb8a;
        width: 65%;
        margin: auto;
        text-align: center;
        border-bottom: 3px solid;
        border-radius: 50px;
        padding: 2rem;
        margin-bottom: 20px;
    }
</style>
