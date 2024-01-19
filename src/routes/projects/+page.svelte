<script>

import { fade } from "svelte/transition";
import { t } from '$lib/language/translations';
import anime from "animejs";
import { onMount } from "svelte";

  let animation;

  onMount(() => {


  });
  

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

  /**
 * Sua descrição da função.
 * @param {string} html - A descrição do parâmetro 'html'.
 */
  function addClassToLi(html) {
    return html.replace(/<a(.*?)>/g, '<a class="animated-hover-link"$1>').replace(/<span>/g, '<span class="background-link">');
  }

</script>
<style lang="postcss">

@keyframes colorChange {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 0%;
      }
    }

:global(.background-link){
  padding: 0.2rem;
  border-radius: 8px;
  
}
:global(.background-link):hover{
  background: linear-gradient(to left , rgb(67,129,193), transparent);
  background-size: 400% 25%;
  animation: colorChange 0.5s linear forwards;
}

:global(.animated-hover-link){
  text-decoration: underline;
  display: inline-block;
  transition: all 0.2s;
}

:global(.animated-hover-link):hover{
  transform: scale(1.02);
  border-radius: 10px;
}

.main-page{
    padding: 40px 0px 80px 0px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .project-header {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
    justify-content: flex-end;
  }
  .project-header:last-child .project-description{
      padding-bottom: 0;
  }
  .content-projects{
    width: 95%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 2.5rem 1.5rem;
    border-radius: 40px;
  }
  .title{
    margin-bottom: 16px;
    font-size: 2.2rem;
    line-height: 32px;
    font-weight: 700;
  }
  .img-div{
    width: 75px;
    height: 75px;
    min-width: 75px;
    min-height: 75px;
  }
  .main-text-projects{
    padding-left: 1.5rem;
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
  .project-description {
    font-size: 1.15rem;
    padding-left: 1.2rem;
    padding-bottom: 2rem;
    padding-top: 1.8rem;
  }


  @media (min-width: 640px) {

    .main-text-projects{
      padding-left: 1rem;
    }
    .content-projects{
      width: 75%;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      padding-top: 2.75rem;
      padding-bottom: 2.75rem;
    }

    .project-description{
      padding-left: 1rem;
    }
  }
</style>

<div class="container main-page">
  <div class="content-projects bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)]" in:fade|local>
    <h1 class="title">{$t('projects.title')}</h1>
    <div class="mt-10">
      {#each listProjects as item}
      <div class="project-header">
        <div class="flex w-full justify-between items-center">
          <div class="img-div">
            <img src= {item.imageSrc} class="rounded-xl" alt={item.location}>
          </div>
          <div class="main-text-projects w-full md:w-5/6 ">
            <h2 class="sub-title">{item.projectName}</h2>
            <div class="content-location">
              <h3 class="location-title">{item.location}</h3>
              <h3 class="date-title">{item.date}</h3>
            </div>
          </div>
        </div>
        <div class="project-description w-full md:w-5/6">
          <p>{@html addClassToLi(item.jobDescription)}</p>
        </div>
      </div>
      {/each}
    </div>
  </div>
</div>