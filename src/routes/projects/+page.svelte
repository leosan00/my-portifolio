<script>

import { fade } from "svelte/transition";

    var listProjects = [
    {
    imageSrc:'/images/logoFiap.png',
    projectName: 'Startup One FIAP',
    location:'FIAP',
    date:'Jan/20 a Dez/20',
    jobDescription: 'Desenvolvimento de um aplicativo para conectar tatuadores independentes a possíveis clientes'
    },
    {
    imageSrc:'/images/logoFiap.png',
    projectName: 'Challenge FIAP',
    location:'FIAP',
    date:'Jun/18 a Dez/18',
    jobDescription: 'Finalista no projeto que tinha o propósito de desenvolver um protótipo para melhor motivação dos funcionários na empresa parceira (Atento).'
    },
    {
    imageSrc:'/images/logoHC.png',
    projectName: 'Hackathon HCFMUSP (InovaHC – Hospital das clínicas)',
    location:'Hospital das clínicas',
    date:'Set/2018',
    jobDescription: 'Finalista no hackathon que tinha o propósito de desenvolver um protótipo para o acompanhamento pós-cirúrgico.'
    },
    {
    imageSrc:'/images/logoStartUpInSchool.png',
    projectName: 'Startup in School',
    location:'ETEC São Paulo',
    date:'Out/2016',
    jobDescription: 'Finalista no projeto que tinha o propósito de criar uma Startup do zero de acordo com o tema escolhido pelo grupo, desenvolver um protótipo e apresentar para uma banca.'
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
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    padding: 8px 8px 8px 8px;
    }
    .main-text-projects{
    width: 100%;
    padding-left: 0.5rem;
    padding-top: 1rem;
    }

    .content-projects{
    border-radius: 40px;
    width: 95%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.0rem;
    padding-right: 1.0rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .content-location{
    display: flex;
    flex-direction: column;
  }
  }
</style>

<div class="container main-page">
  <div class="content-projects bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
    <h1 class="title">Projetos</h1>
    {#each listProjects as item}
    <div class="project">
      <div class="img-div">
        <img src= {item.imageSrc} class="rounded-xl" alt="Project 1">
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