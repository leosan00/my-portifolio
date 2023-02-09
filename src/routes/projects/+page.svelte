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
    <h1 class="title">Projetos</h1>
    <div class="project">
      <div class="img-div">
        <img src="/images/logoFiap.png" class="rounded-xl" alt="Project 1">
      </div>
      <div class="pl-10">
        <h2 class="sub-title">Startup One FIAP</h2>
        <div class="flex">
          <h3 class="location-title">FIAP</h3>
          <h3 class="location-title">Jan/20 a Dez/20</h3>
        </div>
        <p class="description-project">Desenvolvimento de um aplicativo para conectar tatuadores independentes a possíveis clientes</p>
      </div>
    </div>
    <div class="project">
      <div class="img-div">
        <img src="/images/logoFiap.png" class="rounded-xl" alt="Project 1">
      </div>
      <div class="pl-10">
        <h2 class="sub-title">Challenge FIAP</h2>
        <div class="flex">
          <h3 class="location-title">FIAP</h3>
          <h3 class="location-title">Jun/18 a Dez/18</h3>
        </div>
        <p class="description-project">
          Finalista no projeto que tinha o propósito de desenvolver um protótipo para melhor motivação dos funcionários na empresa parceira (Atento).
        </p>
      </div>
    </div>
    <div class="project">
      <div class="img-div">
        <img src="/images/logoHC.png" class="rounded-xl" alt="Project 1">
      </div>
      <div class="pl-10">
        <h2 class="sub-title">Hackathon HCFMUSP (InovaHC – Hospital das clínicas)</h2>
        <div class="flex">
          <h3 class="location-title">Hospital das clínicas</h3>
          <h3 class="location-title">Set/2018</h3>
        </div>
        <p class="description-project">
          Finalista no hackathon que tinha o propósito de desenvolver um protótipo para o 
          acompanhamento pós-cirúrgico.
        </p>
      </div>
    </div>
    <div class="project">
      <div class="img-div">
        <img src="/images/logoStartUpInSchool.png" class="rounded-xl" alt="Project 1">
      </div>
      <div class="pl-10">
        <h2 class="sub-title">Startup in School</h2>
        <div class="flex">
          <h3 class="location-title">ETEC São Paulo</h3>
          <h3 class="location-title">Out/2016</h3>
        </div>
        <p class="description-project">
          Finalista no projeto que tinha o propósito de criar uma Startup do zero de acordo com o tema 
          escolhido pelo grupo, desenvolver um protótipo e apresentar para uma banca.
        </p>
      </div>
    </div>
  </div>
</div>