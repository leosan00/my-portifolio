<script>

    import { fade } from "svelte/transition";

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
    font-size: 2rem;
    line-height: 32px;
    font-weight: 400;
  }
  .img-div{
    width: 75px;
    height: 75px;
  }
  .sub-title {
    font-size: 1.25rem;
    font-weight: 700;
  }
  .content-location{
    display: flex;
    justify-content: space-between;

  }
  .location-title{
    font-size: 1.05rem;
    font-weight: 600;
  }
  .description-project {
    font-size: 1.15rem;
    margin-top: 0.5rem;
  }
  p{
    word-wrap: break-word;
    width: 650px;
  }    

</style>

<div class="container main-page" in:fade>
  <div class="content-projects bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
    <h1 class="title">Experiência</h1>
    <div class="project">
      <div class="img-div">
        <img src="/images/logoValor.png" class="rounded-xl" alt="Project 1">
      </div>
      <div class="pl-10">
        <h2 class="sub-title">Editora Globo (Valor Econômico)</h2>
        <div class="content-location">
          <h3 class="location-title">Desenvolvedor Júnior</h3>
          <h3 class="location-title">Mar/21 a atual</h3>
        </div>
        <p class="description-project">
            Desenvolvimento de sistema para controle de produtos e serviços da plataforma Valor Pro 
            (controle de acesso, vigências, faturamento). <br>
            Atuação no serviço responsável pela liberação de acesso de usuários nos serviços e produtos do 
            Valor Pro. <br>
            TFS e Jira (Repositório, quadro Kanban)</p>
      </div>
    </div>
    <div class="project">
      <div class="img-div">
        <img src="/images/logoAtento.jpg" class="rounded-xl" alt="Project 1">
      </div>
      <div class="pl-10">
        <h2 class="sub-title">Atento</h2>
        <div class="content-location">
          <h3 class="location-title">Estágio em Sistemas de Informação</h3>
          <h3 class="location-title">Fev/19 a Fev/21</h3>
        </div>
        <p class="description-project">
            Desenvolvimento de sistema interno para controle de URAs <br>
            Desenvolvimento de sistema para leitura de arquivos .csv <br>
            Treinamentos Git, Kanban, SQL, C#, ASP.NET MVC 4 <br>
            Metodologia Ágil
        </p>
      </div>
    </div>
  </div>
</div>