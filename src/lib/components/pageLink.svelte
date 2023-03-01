<script>
  import {currentTab} from "$lib/stores/currentTab.js";
  
  export let route = '';
  export let tab= '';
  export let nameLegend = '';
</script>

<style lang="postcss">
    .projects{
        height: 40px;
        border-radius: 22px;
        position: absolute;
        right: 16px;
        display: flex;
        align-items: center;
        transition: all 0.4s ease-in 0.2s;
        background: rgb(255, 255, 255);
        border: none;
        bottom: 16px;
        max-width: 40px;
        box-shadow: 0 0px 0px 4px transparent;
        will-change: auto;
    }
    :global(.card:hover .projects){
        max-width: 220px;
        cursor: pointer;
        box-shadow: 0 0px 0px 4px rgb(255 255 255 / 50%);
    }

    :global(.card:hover .projects .legend){
        opacity: 1;
        transform: none;
    }
    .legend{
        opacity: 0;
        transform: translateX(-12px) translateZ(0px);
        font-size: 15px;
        font-weight: 500;
        white-space: nowrap;
        color: rgb(13, 17, 23);
        margin: 0px 36px 0px 16px;
        padding-right: 5px;
        transition: all .4s ease-in-out .2s;
        letter-spacing: 0.3px;
    }
    .position-icon{
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0px;
    }
    
    @media (max-width: 650px) {
        .projects{
        max-width: 100%;
        box-shadow: 0 0px 0px 4px rgb(255 255 255 / 50%);
        }
    .legend{
        opacity: 1;
        transform: translateX(0px) translateZ(0px);
    }
    
  }
</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => $currentTab = tab}>
    <a href="/{route}">
        <div class="projects">
            <p class="legend">
                {nameLegend}
            </p>
            <div class="position-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width= 25 height=25 ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>
            </div>  
        </div>
    </a> 
</div>