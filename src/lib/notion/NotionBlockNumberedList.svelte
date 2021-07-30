<script context="module" lang="ts">
    import type{ BlockRichText} from './notion.types'
    export type BlockNumberedListItem = {
        numbered_list_item: {
            text: Array<BlockRichText>
        },
        siblings: Array<{
            numbered_list_item: {
                text: Array<BlockRichText>
            }
        }>
    }
</script>

<script lang="ts">
    import NotionBlockRichText from './NotionBlockRichText.svelte'
    export let block: BlockNumberedListItem
</script>

<ol class="notion__block-type notion__numbered-list">
    <li class="notion__numbered-list-item"><NotionBlockRichText block={block.numbered_list_item.text} /></li>
    {#if block.siblings}
        {#each block.siblings as sibling}
            <li class="notion__numbered-list-item"><NotionBlockRichText block={sibling.numbered_list_item.text} /></li>
        {/each}
    {/if}
</ol>

<style lang="postcss">
    .notion__numbered-list {
        @apply list-decimal;
    }
</style>
