<script>
  import { fade } from "svelte/transition";

  var listOfXp = [
    {
    imageSrc:'/images/logoValor.png',
    location: 'Editora Globo (Valor Econômico)',
    role:'Desenvolvedor Júnior',
    date:'Mar/21 a atual',
    jobDescription: 'Desenvolvimento de sistema para controle de produtos e serviços da plataforma Valor Pro (controle de acesso, vigências, faturamento). <br>Atuação no serviço responsável pela liberação de acesso de usuários nos serviços e produtos do Valor Pro. <br>TFS e Jira (Repositório, quadro Kanban)'
    },
    {
    imageSrc:'/images/logoAtento.jpg',
    location: 'Atento',
    role:'Estágio em Sistemas de Informação',
    date:'Fev/19 a Fev/21',
    jobDescription: 'Desenvolvimento de sistema interno para controle de URAs <br> Desenvolvimento de sistema para leitura de arquivos .csv <br>Treinamentos Git, Kanban, SQL, C#, ASP.NET MVC 4 <br>Metodologia Ágil'
    }
  ];
</script>

<style lang="postcss">

.main-page{
    padding: 40px 0px 80px 0px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .experience {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    padding: 8px 8px 8px 8px;
  }
  .content-experiences{
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
    letter-spacing: 0.1rem;
  }
  .img-div{
    width: 75px;
    height: 75px;
    min-width: 75px;
    min-height: 75px;
  }
  .main-text-experience{
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

  }
  .location-title, .date-title{
    font-size: 1.05rem;
    font-weight: 600;
  }
  .description-project {
    font-size: 1.15rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 650px) {
    .experience {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    padding: 8px 8px 8px 8px;
    }
    .main-text-experience{
    width: 100%;
    padding-left: 0.5rem;
    padding-top: 1rem;
    }

    .content-experiences{
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

<div class="container main-page" in:fade>
  <div class="content-experiences bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
    <h1 class="title">Experiências</h1>
    {#each listOfXp as xpItem }
      <div class="experience">
        <div class="img-div">
          <img src= {xpItem.imageSrc} class="rounded-xl" alt="Project 1">
        </div>
        <div class="main-text-experience">
          <h2 class="sub-title">{xpItem.location}</h2>
          <div class="content-location">
            <h3 class="location-title">{xpItem.role}</h3>
            <h3 class="date-title">{xpItem.date}</h3>
          </div>
          <p class="description-project">
            {@html xpItem.jobDescription}
          </p>
        </div>
      </div>      
    {/each}
  </div>
</div>