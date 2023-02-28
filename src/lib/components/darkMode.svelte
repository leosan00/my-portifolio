<style lang="postcss">

:root {
    --width-switch-back: 100%;
    --width-btn: 42%;
    --switch-left: 10%;
}

    .switch-background-dark,.switch-background-light{
        position: relative;
        width: var(--width-switch-back);
        height: 100%;
        border-radius: 50px;
        cursor: pointer;
        transition-duration: 1.2s;
        filter: drop-shadow(0 8px 6px rgb(0 0 0 / 0.1)) drop-shadow(0 3px 2px rgb(0 0 0 / 0.1));
    }
    .switch-background-dark{
        background-color: rgb(63, 63, 63);
        border: solid 2px #666666;
		box-shadow: rgb(48 54 61) 0px 0px 0px 2px inset;
    }

    .switch-background-light{
        background-color: rgb(201, 201, 201);
        border: solid 2px transparent;
        box-shadow: transparent 0px 0px 0px 2px inset;
    }

    .toggle-dark{
        position: absolute;
        left: var(--switch-left);
        top: 9%;
        width: 42%;
        height: 82%;
        border-radius: 50px;
        transition-duration: 1s;
        background-color: rgb(10, 10, 10);
        padding: 7px 7px 7px 7px;
        filter: drop-shadow(0 3px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    }

    .dark-theme-transition{
        transform: translateX(calc(var(--width-switch-back) - var(--switch-left)));
    }

    .position-sun-dark, .position-moon-dark{
        padding: 2px 2px 2px 2px;
    }

    .position-moon-dark{
        position:relative; 
        bottom:4px; 
        right:2px;
    }


</style>
<script>
    import {darkMode, toggleDarkMode , spin} from '$lib/stores/darkMode.js';

</script>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={toggleDarkMode} class="{$darkMode ? 'switch-background-dark' : 'switch-background-light'}">   
        <div class="will-change-transform toggle-dark {$darkMode ? 'dark-theme-transition' : ''}">
            {#if $darkMode}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class ="position-sun-dark" fill='rgb(255, 227, 164)' in:spin><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"/></svg>
            {:else}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class ="position-moon-dark" fill='rgb(255, 227, 164)' in:spin><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
            {/if} 
        </div>
    </div>