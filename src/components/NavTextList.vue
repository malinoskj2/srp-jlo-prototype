<template>
    <div id="NavTextList">
        <div v-for="(link, index) in links" :key="index" class="link">
            {{link.text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavTextList",
        props: {
            links: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    #NavTextList {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: nowrap;
    }

    .link {
        padding-right: 1rem;
    }
</style>
