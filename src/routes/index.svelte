<script lang="ts" context="module">
    import type{ PostPreviewProps } from '$lib/PostPreview.svelte'

    type NotionItem = {
        id: string
        properties: PostPreviewProps,
        created_time: string
        last_edited_time: string
    }

    export async function load({ fetch }) {
        const res = await fetch('/index.json')
        if(res.ok) {
            return {
                props: {
                    result: await res.json()
                }
            }
        }
        return {
			status: res.status,
			error: new Error(`Could not load database`)
		};
    }
</script>

<script lang="ts">
	import SvelteSeo from 'svelte-seo'
    import PostPreview from '$lib/PostPreview.svelte'

    export let result: {
        result: Array<NotionItem>
    }
</script>

<SvelteSeo
  title="Svelte Notion Kit"
  description="Brings your Notion pages to SvelteKit"
/>
<section class="">
    {#each result.result as notionItem}
        <PostPreview id={notionItem.id} props={notionItem.properties} />
    {/each}
</section>

<style style lang="postcss">
</style>
