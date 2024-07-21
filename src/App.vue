<script setup lang="ts">
    import Project from "./components/Project.vue";
    import Section from "./components/Section.vue";
    import projects from "./data/projects.json";
    import text from "./data/text.json";
</script>

<template>
    <header>
        <h1>{{ text.header }}</h1>
    </header>

    <h3 class="intro">{{ text.intro }}</h3>

    <Section title="Projects">
        <Project
            v-for="project in projects"
            :name="project.name"
            :src="project.src"
            :description="project.description"
        />
    </Section>

    <!-- TODO: Add Skills and Languages sections -->
</template>

<style scoped>
    header {
        width: 65%;
        margin: auto;
        text-align: center;
        padding: 25px;
        margin-bottom: 20px;

        border-bottom: 3px solid #39db5e96;
        border-radius: 50px;
        box-shadow: 0px 5px 21px 0px #305d32;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    header h1 {
        color: #6aeb8a;
    }

    .intro {
        width: 90%;
        margin: 30px auto;
        max-width: 1280px;
        text-align: center;
    }
</style>
