<script>
	import '../global.css';
	import Header from '$lib/Header.svelte'
</script>

<Header/>
<main class="w-full h-screen mx-auto relative px-2 sm:px-6 lg:px-8">
	<slot />
</main>
