<script>

import { fade } from "svelte/transition";
import {currentTab} from "$lib/stores/currentTab.js";
import { t } from '$lib/language/translations';
  
    $currentTab = 'active-projects';

    $: listProjects = [
    {
    imageSrc:'/images/logoFiap.png',
    projectName: 'Startup One FIAP',
    location:'FIAP',
    date:$t('projects.startupOneFiapDate'),
    jobDescription: $t('projects.startupOneFiapDescripiton')
    },
    {
    imageSrc:'/images/logoFiap.png',
    projectName: 'Challenge FIAP',
    location:'FIAP',
    date:$t('projects.challengeFiapDate'),
    jobDescription: $t('projects.challengeFiapDescrition')
    },
    {
    imageSrc:'/images/logoHC.png',
    projectName: 'Hackathon HCFMUSP (InovaHC – Hospital das clínicas)',
    location:'Hospital das clínicas',
    date:$t('projects.hackathonHcDate'),
    jobDescription: $t('projects.hackathonHc')
    },
    {
    imageSrc:'/images/logoStartUpInSchool.png',
    projectName: 'Startup in School',
    location:'ETEC São Paulo',
    date:$t('projects.startUpInSchoolDescriptionDate'),
    jobDescription: $t('projects.startUpInSchoolDescription')
    },
  ];

</script>
<style lang="postcss">

.main-page{
    padding: 40px 0px 80px 0px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .project {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    padding: 8px 8px 8px 8px;
  }
  .content-projects{
    border-radius: 40px;
    width: 75%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 2.75rem;
    padding-bottom: 2.75rem;
  }
  .title{
    margin-bottom: 16px;
    font-size: 2.2rem;
    line-height: 32px;
    font-weight: 700;
    letter-spacing: 0.6px;
  }
  .img-div{
    width: 75px;
    height: 75px;
    min-width: 75px;
    min-height: 75px;
  }
  .main-text-projects{
    padding-left: 2.5rem;
    width: 100%;
  }
  .sub-title {
    font-size: 1.25rem;
    font-weight: 700;
  }
  .content-location{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 0.2rem;

  }
  .location-title, .date-title{
    font-size: 1.05rem;
    font-weight: 600;
  }
  .description-project {
    font-size: 1.15rem;
    margin-top: 0.5rem;
    margin-left: 0.4rem;
  }

  @media (max-width: 650px) {
    .project {
      display: flex;
      flex-direction: column;
    }
    .main-text-projects{
      padding-left: 0.5rem;
      padding-top: 1rem;
    }
    .content-projects{
      width: 95%;
      padding-left: 1.0rem;
      padding-right: 1.0rem;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }
  }
</style>

<div class="container main-page">
  <div class="content-projects bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)]" in:fade|local>
    <h1 class="title">{$t('projects.title')}</h1>
    {#each listProjects as item}
    <div class="project">
      <div class="img-div">
        <img src= {item.imageSrc} class="rounded-xl" alt={item.location}>
      </div>
      <div class="main-text-projects">
        <h2 class="sub-title">{item.projectName}</h2>
        <div class="content-location">
          <h3 class="location-title">{item.location}</h3>
          <h3 class="date-title">{item.date}</h3>
        </div>
        <p class="description-project">
          {item.jobDescription}
        </p>
      </div>
    </div>
    {/each}
  </div>
</div>