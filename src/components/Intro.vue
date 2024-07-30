<script setup lang="ts">
    defineProps<{ intro: string }>();
</script>

<template>
    <div class="intro">
        <h3>
            <a href="https://github.com/HaykAvag" target="_blank"
                >GitHub Profile | </a
            >
            <a href="https://www.linkedin.com/in/hayk-avagyan/" target="_blank"
                >LinkedIn Profile | </a
            >
            <a href="mailto:hayk.avagyan.a@gmail.com"
                >hayk.avagyan.a@gmail.com</a
            >
        </h3>

        <h3>{{ intro }}</h3>
    </div>
</template>

<style scoped>
    .intro h3 {
        width: 90%;
        margin: 30px auto;
        max-width: 1280px;
        text-align: center;
    }

    a {
        color: #6aeb8a;
        color: #6aeba1;
        text-shadow: 1px 1px 5px #6db67f;
    }
</style>
