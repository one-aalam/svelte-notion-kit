<script context="module" lang="ts">
    export type BlockTag = {
        id: string
        name: string
        color: string
    }
</script>

<script lang="ts">
    export let block: Array<BlockTag>
</script>

<ul class="notion__block-type notion__tag-list">
    {#each block as blockItem}
        <li data-id={blockItem.id} class="notion__tag {blockItem.color}_background">{blockItem.name}</li>
    {/each}
</ul>

<style lang="postcss">
    .notion__tag-list {
        @apply list-none flex gap-1;
    }
    .notion__tag {
        @apply text-sm bg-gray-50 px-2 py-1 rounded-sm;
    }
</style>
