<script>
  import DarkMode from "$lib/components/darkMode.svelte";
  import ExternalLinkCard from "$lib/components/externalLinkCard.svelte";
  import CardAbout from "$lib/components/aboutCard.svelte";
  import ProjectCard from "$lib/components/projectCard.svelte";
  import { fade } from "svelte/transition";
  import ExperienceCard from "$lib/components/experienceCard.svelte";
  import {onMount} from "svelte"

  let mounted = false;

    onMount(() => {
	    mounted = true;
    });

</script>
<style lang="postcss">
  .grid-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: 280px 280px;
    gap: 1rem;
  }
  .card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    overflow: hidden;
    transition: all .2s ease-in-out;
    will-change: auto;
  }
  .card:hover { 
    transform: scale(1.05); 
  }
  .main-grid {
    width: 100%;
    padding: 40px 15px 80px 15px;
  }

  .darkMode-content{
    width: 100px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 850px) {
    .grid-content {
      grid-template-columns: auto;
      grid-template-rows: repeat(4, 280px);
      gap: 1.5rem;
    }
  }

</style>

<div class="main-grid">
  {#if mounted}
    <div class="grid-content" in:fade>
      <div class="col-span-2 bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] card  drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)]" >
        <CardAbout/>
      </div>
    <div class=" bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] card drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
      <div class="darkMode-content">
        <DarkMode/>
      </div>
    </div>
    <div class="row-span-2  bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] card drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
      <ProjectCard/>
    </div>
    <div class="card bg-sky-600 dark:border-2 dark:border-sky-500/80 dark:shadow-[0_0_0_6px_inset_rgb(12 74 110)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
      <ExternalLinkCard imageSrc = 'Linkedin' hoveredSubtitle = 'Linkedin' link= 'https://www.linkedin.com/in/leonardo-sanger-297ab713a/'/>
    </div>
    <div class="card bg-zinc-900/90 dark:border-2 dark:border-zinc-600 dark:shadow-[0_0_0_6px_inset_rgb(68 64 60)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
      <ExternalLinkCard imageSrc = 'GitHub' hoveredSubtitle = 'GitHub' link='https://github.com/leosan00/my-portifolio' />
    </div>
    <div class="card  bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
      <ExperienceCard/>
    </div>
  </div>
  {/if}
</div>