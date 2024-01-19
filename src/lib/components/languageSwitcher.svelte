<script>
    import { t,locale, locales } from '$lib/language/translations';
    import { fade,fly } from "svelte/transition";
    import anime from "animejs";
    import { onMount } from 'svelte';
    import { darkMode } from '$lib/stores/darkMode';
    import { clickOutside } from '$lib/scripts/clickOutside.js'
    
    let isOpen = false;
    let animationUp;
    let animationDown;

    onMount(() =>{

        animationDown = anime({
            autoplay: false,
            targets: '.arrow-languague',
            rotateX: [180,0],
            duration: 1200
        });

        animationUp = anime({
            autoplay: false,
            targets: '.arrow-languague',
            rotateX: [0,180],
            duration: 1200,
        });

    });


    function toggleOptions(){
        isOpen = !isOpen;

        if(isOpen){
            animationUp.play();
        }else{
            animationDown.play();
        }
    }

/**
 * @param {string} languageCode - language type selected.
 */
    function selectLanguage(languageCode) {
        $locale = languageCode;
        document.cookie = `lang=${languageCode} ;`;
        
        toggleOptions();
    }

    function handleOutClick(){

        if(isOpen){
            animationDown.play();
        }

        isOpen = false;
    }


</script>
<style>

    .custom-select {
        display: inline-block;
        position: relative;
        cursor: pointer;
        z-index: 2;
        filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1));
    }

    .selected-option {
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 20px;
        transition: background-color 0.3s ease;
    }

    .selected-option img {
        margin-right: 0.5rem;
    }

    .options {
        position: absolute;
        top: 105%;
        left: 0;
        width: 100%;
        border-radius: 20px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .option {
        display: flex;
        align-items: center;
        padding: 0.7rem;
        box-sizing: border-box;
        transition: background-color 0.3s ease;
    }

    .option:hover {
        background-color: rgba(67,129,193, 0.7);
    }

    .option img {
        width: 32px;
        height: 30px;
        margin-right: 0.8rem;
    }
    .selected-language {
        background-color: rgb(67,129,193);
    }

</style>
<div use:clickOutside on:outclick={handleOutClick} class="custom-select">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="selected-option bg-white/30 border-2 border-slate-500 dark:border-slate-300" on:click={() => toggleOptions()}>
        <img src= {$locale == 'pt' ? "/images/brazil-flag.png" : "/images/usa-flag.png"} width="32" height="30" alt="ad"/>
        <span id="selected-language">{$t(`lang.${$locale}`)}</span>
        <svg class="pl-2 arrow-languague" xmlns="http://www.w3.org/2000/svg" height="25" width="23" fill=" {$darkMode ? 'white' : 'black' }" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
    </div>
    {#if isOpen}
        <div class="options bg-white/[0.8] dark:bg-zinc-800/90 border-2 border-slate-300 dark:border-x-2 dark:border-t-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)]" in:fly={{ y: -80, duration: 600 }} out:fly={{ y: -20, duration: 600 }}>
            {#each $locales as value }
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class=" bg-white/[0.8] dark:bg-zinc-800/90 border border-slate-300 dark:border-[#666666] option {$locale ==  value ? 'selected-language': ''}"  on:click= {() => selectLanguage(value)} in:fade={{ duration: 600 }} >
                    <img src={value == 'pt' ? "/images/brazil-flag.png" : "/images/usa-flag.png"} alt="Flag {$locale}">
                    <span>{$t(`lang.${value}`)}</span>
                </div>
            {/each}
        </div>
    {/if}
</div>