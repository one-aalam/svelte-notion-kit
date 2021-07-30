<script context="module" lang="ts">
    export type BlockPeople = {
        name: string,
        avatar_url: string
    }
</script>

<script lang="ts">
    export let block: Array<BlockPeople>
</script>

<h3 class="notion__block-type notion__people">
    {#each block as blockItem}
        <img src={blockItem.avatar_url} alt={`${blockItem.name}'s avatar`} />
        <div class="author__meta">
            <!-- {blockItem.name} -->
        </div>
    {/each}
</h3>
<style lang="postcss">
    .notion__people {
        @apply flex text-sm;
    }
    img {
        @apply w-8 h-8 rounded-md ring-1 ring-gray-300;
    }
</style>
