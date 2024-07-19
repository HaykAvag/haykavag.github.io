<script setup lang="ts">
    // TODO: Get iframe src and description from props.
    defineProps<{ name: string }>();
</script>

<template>
    <section>
        <h1>{{ name }}</h1>

        <div class="container">
            <iframe
                src="https://www.youtube.com/embed/8DnxyEKnW2s?si=N0AWH0g0TwJxEQdJ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>

        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
        </p>
    </section>
</template>

<style scoped>
    section {
        margin: auto;
        width: 50%;
        margin-top: 35px;
        max-width: 1280px;
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
        margin-top: 10px;
    }
</style>
