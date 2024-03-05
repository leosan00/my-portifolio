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
    import {onMount} from "svelte"
    import { fade } from "svelte/transition";
    import NavBar from "$lib/components/sideNavBar.svelte";
    import { t } from '$lib/language/translations';
    import { page } from '$app/stores';
    import { acceptedCookies } from '$lib/stores/cookieStore';
    import CookiesPopup from '$lib/components/cookiePopup.svelte';
    

    let mounted = false;

    onMount(() => {
	    mounted = true;
    });

    $: navItems = [
		{
            name: $t('menu.nav.home'),
			class: 'nav-item',
            link:''
		},
		{
            name: $t('menu.nav.about'),
			class: 'nav-item',
            link:'about'
		},
		{
            name: $t('menu.nav.projects'),
			class: 'nav-item',
            link:'projects'
		},
		{
            name: $t('menu.nav.experience'),
			class: 'nav-item',
            link:'experience'
		},
	];
    let innerWidth = 0;
</script>
  <svelte:window bind:innerWidth={innerWidth} />

{#if mounted}
    <div class="top-menu" in:fade|local>
        <a href="/" class="z-20">
            <div class="home-link">
                <span class="nickname-title-word">Leo</span>
            </div>
        </a>
        {#if innerWidth < 1024}
            <NavBar/>
        {:else}
        <nav>
            <div class="flex items-center">
                <ul class="flex items-center list-none">
                    {#each navItems as navItem}
                    <li>
                        <div class="{navItem.class}" aria-current={$page.url.pathname === `/${navItem.link}`}>
                            <a href="/{navItem.link}" class="font-semibold">
                                {navItem.name}
                                <hr class:selected="{$page.url.pathname === `/${navItem.link}`}"/>
                            </a>
                        </div> 
                    </li>
                    {/each}
                </ul>
                <div class="mx-5 dark-btn">
                    <DarkMode/>
                </div>
                <div class="flex items-center ml-2">
                    <LanguageSwitcher/>
                </div>
            </div>
        </nav>
        {/if}
    </div>
    {#if !$acceptedCookies}
  <CookiesPopup />
    {/if}
{/if}
  
<slot />