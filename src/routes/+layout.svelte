<svelte:head>
    <script>
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

    </script>
</svelte:head>
<script>
    import "@fontsource/nunito";
    import '../app.css';
    import DarkMode from "$lib/components/darkMode.svelte";
    import LanguageSwitcher from "$lib/components/languageSwitcher.svelte";
    import {currentTab} from "$lib/stores/currentTab.js";
    import {onMount} from "svelte"
    import { fade } from "svelte/transition";
    import NavBar from "$lib/components/sideNavBar.svelte";
    import { t } from '$lib/language/translations';
    import { page } from '$app/stores';

    let mounted = false;

    onMount(() => {
	    mounted = true;
    });

    $: navItems = [
		{
            name: $t('menu.nav.home'),
			class: 'nav-item',
            tab: 'active-home',
            link:''
		},
		{
            name: $t('menu.nav.about'),
			class: 'nav-item',
            tab: 'active-about',
            link:'about'
		},
		{
            name: $t('menu.nav.projects'),
			class: 'nav-item',
            tab: 'active-projects',
            link:'projects'
		},
		{
            name: $t('menu.nav.experience'),
			class: 'nav-item',
            tab: 'active-experience',
            link:'experience'
		},
	];
    let innerWidth = 0;
</script>
  <svelte:window bind:innerWidth={innerWidth} />

{#if mounted}
    <div class="top-menu" in:fade|local>
        <a href="/" class="z-20">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="home-link" on:click={() => $currentTab = 'active-home'}>
                <span class="nickname-title-word">Leo</span>
            </div>
        </a>
        {#if innerWidth < 1024}
            <NavBar/>
        {:else}
            <div class="postion-nav items-center">
                <ul class="flex items-center list-none">
                    {#each navItems as navItem}
                    <li>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="{navItem.class}" aria-current={$page.url.pathname === `/${navItem.link}`}>
                            <a href="/{navItem.link}" class="font-style-nav">
                                {navItem.name}
                                <hr class:selected="{$page.url.pathname === `/${navItem.link}`}"/>
                            </a>
                        </div> 
                    </li>
                    {/each}
                </ul>
                <div class="dark-btn">
                    <DarkMode/>
                </div>
                <div class="flex items-center pl-4">
                    <LanguageSwitcher/>
                </div>
            </div>
        {/if}
    </div>
{/if}
  
<slot />