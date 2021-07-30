<script lang="ts">
    import { MenuIcon } from 'svelte-feather-icons'
    import Navigation from './Navigation.svelte'
    let isNavOpened = false

    function toggleNav() {
        isNavOpened = !isNavOpened
    }
</script>

<header class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 grid justify-center place-items-center h-28 mb-6 md:mb-12">
    <h3 class="font-extrabold text-4xl md:text-6xl lg:text-8xl border-b border-gray-400 pb-2 uppercase"> <span class="text-gray-600 inline-block">Svelte</span><span class="text-gray-700 inline-block">Notion</span> </h3>

    {#if isNavOpened}
        <Navigation {toggleNav} />
    {/if}
    <!-- <button on:click={toggleNav}><MenuIcon class="w-5 inline-block" /> Menu</button> -->
    <slot/>
</header>
