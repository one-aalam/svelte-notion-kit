<script context="module" lang="ts">
    import type{ BlockRichText } from './notion.types'
</script>

<script lang="ts">
    import NotionBlockRichText from './NotionBlockRichText.svelte'
    export let block: Array<BlockRichText>
</script>

<p class="notion__block-type notion__rich">
    <NotionBlockRichText block={block}/>
</p>

<style lang="postcss">
    .notion__rich {
        @apply text-lg;
    }
</style>
