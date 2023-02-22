<style>
    .image-container {
        width: 5.75rem;
        height: 6.0rem;
        border-radius: 30px;
        border: solid 1px black;
        background-size: cover;
        background-image: URL('/images/foto.jpg');
    }
    
    .content-about {
        padding: 36px 42px;
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: flex-start;
        -webkit-box-pack: justify;
        justify-content: space-evenly;
        box-shadow: transparent 0 0 0 2px inset;
        position: relative;
    }
    .projects{
    height: 40px;
    border-radius: 22px;
    position: absolute;
    right: 16px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    transition: all 0.4s ease-out .3s ;
    background: rgb(255, 255, 255);
    border: none;
    bottom: 16px;
    width: 40px;
    
  }
  :global(.card:hover .projects){
    width: 110px;
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
    font-family: "Silka Regular";
    line-height: normal;
    letter-spacing: 0.3px;
    font-weight: 400;
    white-space: nowrap;
    color: rgb(13, 17, 23);
    margin: 0px 36px 0px 16px;
    transition: all .4s ease-in-out .2s;
  }
  .position-icon{
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
  }
</style>

<script>
  import {currentTab} from "$lib/stores/currentTab.js";
</script>

<div class="content-about">
        <div class="image-container" />
        <p class="my-3 text-base">
            Eu sou <span class="text-xl font-bold">Leonardo Pereira Sanger</span>, desenvolvedor do
            Brasil. Tenho interssse em aplicativos, startups, esportes e negócios
        </p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => $currentTab = 'active-about'}>
          <a href="/about">
              <div class="projects">
                <p class="legend">
                  Sobre
                </p>
              <div class="position-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width= 25 height=25 ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>
              </div>  
            </div>
          </a> 
        </div>
</div>
