<script lang="ts" context="module">
    import type{ Block } from '$lib/notion'

    export async function load({ page: { params } }) {
        const { id } = params
        const res = await fetch(`http://localhost:3001/blog/${id}.json`)
        if(res.ok) {
            return {
                props: {
                    result: await res.json()
                }
            }
        }
        return {
			status: res.status,
			error: new Error(`Could not pull the block`)
		};
    }
</script>

<script lang="ts">
	import SvelteSeo from 'svelte-seo'
    import Post from '$lib/Post.svelte'

    export let result: {
        result: Array<Block>
    }
</script>

<SvelteSeo
  title="Svelte Starter Kit"
  description="Svelte with brilliant bells and useful whistles"
/>

<div>
        <Post props={result.result} />
	<p>
		Visit <a class="text-blue-600 underline" href="https://svelte.dev">svelte.dev</a> to learn how to
		build Svelte apps.
	</p>
</div>

<style style lang="postcss">

</style>
