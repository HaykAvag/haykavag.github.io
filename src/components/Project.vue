<script setup lang="ts">
    defineProps<{ name: string; src: string; description: string }>();
</script>

<template>
    <section>
        <h1>
            <a :href="src" target="_blank">{{ name }}</a>
        </h1>

        <div class="container">
            <iframe
                :src="src"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>

        <p>{{ description }}</p>
    </section>
</template>

<style scoped>
    section {
        margin: auto;
        width: 50%;
        margin-bottom: 35px;
        max-width: 1280px;
    }

    a {
        text-decoration: none;
    }

    section h1 {
        margin-left: 1%;
        margin-bottom: 12px;
    }

    .container {
        border: 5px solid#2db54c;
        border-radius: 15px;
        overflow: hidden;
        width: 100%;
        aspect-ratio: 1280 / 720;
    }

    iframe {
        width: 100%;
        height: 100%;
    }

    p {
        margin-left: 1%;
        margin-top: 12px;
    }
</style>
