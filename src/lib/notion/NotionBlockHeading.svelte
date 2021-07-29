<script context="module" lang="ts">
    import type{ BlockRichText } from './notion.types'
    export type BlockHeading = {
        text: Array<BlockRichText>
    }
    export type BlockHeadingType = 'heading_1' | 'heading_2' | 'heading_3'
</script>

<script lang="ts">
    import NotionBlockRichText from './NotionBlockRichText.svelte'
    export let block: BlockHeading
    export let type: BlockHeadingType = 'heading_3'
</script>

{#if type === 'heading_1'}
    <h1 class="notion__block-type notion__heading notion__heading--h1">
        <NotionBlockRichText block={block.text} />
    </h1>
{:else if type === 'heading_2'}
    <h2 class="notion__block-type notion__heading notion__heading--h2">
        <NotionBlockRichText block={block.text} />
    </h2>
{:else}
    <h3 class="notion__block-type notion__heading notion__heading--h3">
        <NotionBlockRichText block={block.text} />
    </h3>
{/if}


<style lang="postcss">
    .notion__heading {
        @apply font-bold;
    }
    .notion__heading--h1 {
        @apply text-3xl;
    }
    .notion__heading--h2 {
        @apply text-2xl;
    }
    .notion__heading--h3 {
        @apply text-xl;
    }
</style>
