<script context="module" lang="ts">
    import type { Block } from './notion.types'
</script>

<script lang="ts">
    import NotionBlockTitle from './NotionBlockTitle.svelte'
    import NotionBlockHeading from './NotionBlockHeading.svelte'
    import NotionBlockRichText from './NotionBlockRichText.svelte'
    import NotionBlockTagList from './NotionBlockTagList.svelte'
    import NotionBlockPeople from './NotionBlockPeople.svelte'
    import NotionBlockParagraph from './NotionBlockParagraph.svelte';

    export let block: Block
</script>
    {#if block.type == 'title'}
        <NotionBlockTitle block={block[block.type]} />
    {:else if block.type == 'heading_1' || block.type == 'heading_2' || block.type == 'heading_3' }
        <NotionBlockHeading block={block[block.type]} type={block.type} />
    {:else if block.type == 'multi_select'}
        <NotionBlockTagList block={block[block.type]} />
    {:else if block.type == 'rich_text' }
        <NotionBlockRichText block={block[block.type]} />
    {:else if block.type == 'paragraph' }
        <NotionBlockParagraph block={block[block.type]} />
    {:else if block.type == 'people'}
        <NotionBlockPeople block={block[block.type]} />
    {:else}
    lorem
        <!-- handle more types (@todo: toggle, to_do, bulleted_list_item, numbered_list_item) -->
    {/if}

<style lang="postcss">
    h3 {
        @apply text-2xl font-medium mb-1;
    }
    p {
        @apply text-xl mb-2;
    }
</style>
