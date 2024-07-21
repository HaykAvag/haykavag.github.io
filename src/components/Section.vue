<script setup lang="ts">
    defineProps<{ title: string }>();
</script>

<template>
    <div class="section">
        <div class="title">
            <div class="border"></div>
            <h1>{{ title }}</h1>
            <div class="border"></div>
        </div>
    </div>

    <slot />
</template>

<style scoped>
    .title {
        margin: 35px;
        margin: 20px 0;
        background: linear-gradient(
            90deg,
            #00000000 0%,
            #6aeb8abb 20%,
            #6aeb8abb 50%,
            #6aeb8abb 80%,
            #00000000 100%
        );
    }

    .title h1 {
        text-align: center;
        padding: 10px;
        color: black;
        text-shadow: 2px 2px 5px #8ff5a9;
    }

    .border {
        background: linear-gradient(
            90deg,
            #00000000 0%,
            #6aeb8a 20%,
            #6aeb8a 50%,
            #6aeb8a 80%,
            #00000000 100%
        );
        height: 2px;
        width: 100%;
    }
</style>
