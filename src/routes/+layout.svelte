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
    import { t,locale } from '$lib/language/translations';

    let mounted = false;

    onMount(() => {
	    mounted = true;
    });

    let navItems = [
		{
            name: 'Início',
			class: 'nav-item',
            tab: 'active-home',
            link:''
		},
		{
            name: 'Sobre mim',
			class: 'nav-item',
            tab: 'active-about',
            link:'about'
		},
		{
            name: 'Projetos',
			class: 'nav-item',
            tab: 'active-projects',
            link:'projects'
		},
		{
            name: 'Experiências',
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
                        <div class="{navItem.class}" on:click={() => $currentTab = navItem.tab}>
                            <a href="/{navItem.link}" class="font-style-nav">
                                {$locale == 'pt' ? navItem.name : $t(`home.nav.${navItem.link == '' ? 'home' : navItem.link}`)}
                                <hr class:selected="{$currentTab === navItem.tab}"/>
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