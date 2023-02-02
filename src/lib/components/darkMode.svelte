<style>
    .darkMode-content{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .switch-background-light{
        background-image: url('/images/sun_2.jpg');
    }

    .switch-background-dark{
        background-image: url('/images/cosmos.jpg');
    }

    .switch-background-dark,.switch-background-light{
        --widthSwitchBack: 130px;
        width: 130px;
        height: 60px;
        border-radius: 50px;
        cursor: pointer;
        background-size: cover;
        transition-duration: 1.2s;
        filter: drop-shadow(0 12px 9px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.1));
    }

    .toggle-dark{
        position: relative;
        display: inline-block;
        left: 5px;
        top: 8px;
        width: 45px;
        height: 45px;
        border-radius: 50px;
        transition-duration: 1s;
        background-color: white;
        filter: drop-shadow(0 10px 4px rgb(0 0 0 / 0.2)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    }

    .dark-theme-transition{
        transform: translateX(calc(var(--widthSwitchBack) - 55px));
    }

    .meia-lua{
        width: 80%;
        height: 80%;
        transform: translate(35%, 0%);
        box-shadow: -10px 5px 0 2px rgb(225 225 225/ 0.35);
        border-radius: 50%;
        transition-duration: 1s;
    }


</style>
<script>
    import {darkMode} from '$lib/stores/darkMode.js'
    // import { browser } from '$app/environment';
    
    // if (browser) {
    //     if (
    //         localStorage.theme === 'true' ||
    //         (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    //     ) {
    //         document.documentElement.classList.add('dark');
    //         $darkMode = true;
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //         $darkMode = false;
    //     }
    // }

    if (typeof window !== 'undefined') {
        $darkMode = (localStorage.getItem('theme')==='dark');
        setTheme();
    }

    function toggleDarkMode(){
        $darkMode = !$darkMode;

        localStorage.setItem('theme', $darkMode ? 'dark' : 'light');
        setTheme();
       
    }

    function setTheme(){
        $darkMode
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
    }
</script>
<div class="darkMode-content">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={toggleDarkMode} class="{$darkMode ? 'switch-background-dark' : 'switch-background-light'}">   
        <div class="will-change-transform toggle-dark {$darkMode ? 'dark-theme-transition' : ''}">
        <div class="{$darkMode? '': 'meia-lua'}"></div>
        </div>
    </div>
</div>