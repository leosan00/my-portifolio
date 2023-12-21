<script>

    import DarkMode from "$lib/components/darkMode.svelte";
    import {currentTab} from "$lib/stores/currentTab.js";
    import { fade } from "svelte/transition";
    import {darkMode} from '$lib/stores/darkMode.js';
    import { clickOutside } from '$lib/scripts/clickOutside.js'
    import LanguageSwitcher from "./languageSwitcher.svelte";
    import { t,locale } from '$lib/language/translations';
	
     let navItems = [
		{
            name: 'Início',
			class: 'nav-item-side',
            tab: 'active-home',
            link:''
		},
		{
            name: 'Sobre mim',
			class: 'nav-item-side',
            tab: 'active-about',
            link:'about'
		},
		{
            name: 'Projetos',
			class: 'nav-item-side',
            tab: 'active-projects',
            link:'projects'
		},
		{
            name: 'Experiências',
			class: 'nav-item-side',
            tab: 'active-experience',
            link:'experience'
		},
	];
    
    let open = false
    function toggleSideBar(){
        open = !open;
    }

</script>
<style>
    .side-bar{
        padding: 20px 20px 20px 20px;
        position: absolute;
        width: 98%;
        margin: 0 auto;
        top: 25px;
        left: 0px;
        right: 0px;
        z-index: 10;
        border-radius: 25px;
    }

    .btn-menu{
        z-index: 20;
        position: relative;
        padding-right: 0.2rem;
    }

</style>
<div use:clickOutside on:outclick={() => {open = false;}} class="will-change-auto flex">

    <div class="pr-5">
        <LanguageSwitcher/>
    </div>

    <button on:click={toggleSideBar} class="btn-menu">
        {#if open}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill=" {$darkMode ? 'white' : 'black' }" width= 20 in:fade><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
        {:else}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill=" {$darkMode ? 'white' : 'black'}" width= 30 in:fade><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        {/if}
    </button>
    
    {#if open}
    <div class="side-bar bg-[#F5F5F5] dark:bg-zinc-800 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)]" in:fade|local out:fade|local>
            <div class="postion-nav flex-col items-center">
                <ul class="flex flex-col items-center" >
                    {#each navItems as navItem}
                    <li>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="{navItem.class}" on:click={() => {$currentTab = navItem.tab; open = false}}>
                            <a href="/{navItem.link}" class="font-style-nav flex flex-col items-center">
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
            </div>
        </div>
    {/if}  
</div>