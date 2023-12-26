<style lang="postcss">
  
  .main-grid {
    width: 100%;
    padding: 40px 15px 80px 15px;
  }
  .grid-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: 280px 280px;
    gap: 1rem;
  }
  .mobile-view{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    transition: all .2s ease-in-out;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .card:hover { 
    /* transform: perspective(1px) scale(1.03);  */
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
  }

  .darkMode-content{
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1280px) {
    .grid-content {
      grid-template-columns: auto;
      grid-template-rows: repeat(4, 280px);
      gap: 1.5rem;
    }
  }
  @media (max-width: 1024px) {
    .grid-content {
      grid-template-columns: auto;
      grid-template-rows: auto;
      gap: 1.5rem;
    }
    .card {
      min-height: 280px;
      min-width: 280px;
    }
    .card:hover { 
      transform: none; 
      filter: none;
    }
    .mobile-view{
      padding-bottom: 12px;
      padding-left: 12px;
      padding-right: 12px;
    }
  }
</style>

<script>
  import DarkMode from "$lib/components/darkMode.svelte";
  import ExternalLinkCard from "$lib/components/externalLinkCard.svelte";
  import CardAbout from "$lib/components/aboutCard.svelte";
  import ProjectCard from "$lib/components/projectCard.svelte";
  import { fade,fly } from "svelte/transition";
  import ExperienceCard from "$lib/components/experienceCard.svelte";
  import {onMount} from "svelte"
  import {currentTab} from "$lib/stores/currentTab.js";
  import { t } from '$lib/language/translations';

  
  let mounted = false;

  let isHovered = false;
  let x = 0;
	let y = 0;
  
  onMount(() => {
    mounted = true;
  });

  
  function handleMessage(event){
    // console.log(event.detail);
    if(event.detail.isHovered == 'true'){
      isHovered =true;
      x=event.detail.positionX;
      y=event.detail.positionY;
    }else{
      isHovered =false;
    }
  }

  $currentTab = 'active-home';
  let innerWidth = 0;
</script>
<svelte:window bind:innerWidth={innerWidth} />
<div class="main-grid">
  {#if mounted}
    {#if isHovered && innerWidth > 1024}
	    <div style="top: {y}px; left: {x}px; position:absolute; z-index: 5;" in:fly={{ y: 50, duration: 800 }} out:fade = {{duration:500}}>
        {$t('home.animatedText.text')}
      </div>
    {/if}
    <div class="grid-content" in:fade|local>
      <div class="md:col-span-2 mobile-view">
        <div class="card card--blur bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] " >
          <CardAbout on:message = {handleMessage}/>
        </div>
      </div>
      <div class="mobile-view">
        <div class="card bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] ">
          <div class="darkMode-content">
            <DarkMode/>
          </div>
        </div>
      </div>
      <div class="mobile-view md:row-span-2">
    <div class="card bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] ">
        <ProjectCard/>
      </div>
    </div>
    <div class="mobile-view">
    <div class="card bg-sky-600 dark:border-2 dark:border-sky-500/80 dark:shadow-[0_0_0_6px_inset_rgb(12 74 110)]">
        <ExternalLinkCard imageSrc = 'Linkedin' hoveredSubtitle = 'Linkedin' link= 'https://www.linkedin.com/in/leonardo-sanger-297ab713a/'/>
      </div>
    </div>
    <div class="mobile-view">
    <div class="card bg-zinc-900/90 dark:border-2 dark:border-zinc-600 dark:shadow-[0_0_0_6px_inset_rgb(68 64 60)]">
        <ExternalLinkCard imageSrc = 'GitHub' hoveredSubtitle = 'GitHub' link='https://github.com/leosan00/my-portifolio' />
      </div>
    </div>
    <div class="mobile-view">
    <div class="card bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)]">
        <ExperienceCard/>
      </div>
    </div>
  </div>
  {/if}
</div>