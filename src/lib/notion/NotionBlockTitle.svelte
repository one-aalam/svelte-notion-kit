<script context="module" lang="ts">
    export type BlockTitle = {
        text: {
            content: string,
        }
    }
</script>

<script lang="ts">
    export let block: Array<BlockTitle>
</script>

<h3 class="notion__block-type notion__title">
    {#each block as blockItem}
        {blockItem.text.content}
    {/each}
</h3>
<style lang="postcss">
    .notion__title {
        @apply font-bold text-2xl;
    }
</style>
