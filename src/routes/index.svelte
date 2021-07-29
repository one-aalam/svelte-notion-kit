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
  title="Svelte Starter Kit"
  description="Svelte with brilliant bells and useful whistles"
/>

<div>
    {#each result.result as notionItem}
        <PostPreview id={notionItem.id} props={notionItem.properties} />
    {/each}
	<p>
		Visit <a class="text-blue-600 underline" href="https://svelte.dev">svelte.dev</a> to learn how to
		build Svelte apps.
	</p>
</div>

<style style lang="postcss">
    .post-preview {
        @apply mb-8;
    }
</style>
