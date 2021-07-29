<script context="module" lang="ts">
    import type{ Block } from '$lib/notion'
</script>

<script lang="ts">
    import NotionBlock from './notion/NotionBlock.svelte'
    export let props: Array<Block>
</script>

<div class="post">
    <!-- {JSON.stringify(props)} -->
    {#each props as prop}
        <NotionBlock block={prop} />
    {/each}
</div>

<style lang="postcss">
    .post {

    }
</style>
