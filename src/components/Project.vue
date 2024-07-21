<script setup lang="ts">
    defineProps<{ name: string; src: string; description: string }>();
</script>

<template>
    <div class="project">
        <h2>
            <a :href="src" target="_blank">{{ name }}</a>
        </h2>

        <div class="container">
            <iframe
                :src="src"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>

            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
    .project {
        margin: auto;
        width: 90%;
        margin-bottom: 35px;
        max-width: 1280px;
    }

    h2 {
        margin-left: 1%;
        margin-bottom: 12px;
    }

    a {
        color: #6aeb8a;
        text-decoration: none;
    }

    .container {
        border: 7px solid #11401d;
        background: #6aeb8a26;
        overflow: hidden;
        box-shadow: inset 0 0 12px black;
        width: 100%;
    }

    iframe {
        aspect-ratio: 1280 / 720;
        width: 100%;
        height: 100%;
    }

    p {
        color: #39db5e;
        padding: 20px;
        padding-top: 10px;
    }
</style>
