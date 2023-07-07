<script>
    import { fade } from "svelte/transition";
    import {currentTab} from "$lib/stores/currentTab.js";
  
    $currentTab = 'active-about';

    let listTools = [
      {
      name: 'Visual Studio',
      imageSrc: '/images/vsLogo.svg',
      type: 'Ferramentas'
      },
      {
      name: 'Visual Studio Code',
      imageSrc: '/images/vsCodeLogo.png',
      type: 'Ferramentas'
      },
      {
      name: 'Sql server management',
      imageSrc: '/images/sql-server.png',
      type: 'Ferramentas'
      },
      {
      name: 'Firebase',
      imageSrc: '/images/firebaseLogo.png',
      type: 'Ferramentas'
      },
      {
      name: 'Oracle sql Developer',
      imageSrc: '/images/OracleSqlLogo.png',
      type: 'Ferramentas'
      },
      {
      name: 'Postman',
      imageSrc: '/images/postmanLogo.svg',
      type: 'Ferramentas'
      },
      {
      name: 'Android Studio',
      imageSrc: '/images/androidStudioLogo.png',
      type: 'Ferramentas'
      },
      {
      name: 'Flutter',
      imageSrc: '/images/flutterLogo.png',
    
      type:'Framework'
      },
      {
      name: 'Dart',
      imageSrc: '/images/dartLogo.png',
      type: 'Linguagens de programação'
      },
      {
      name: 'C#',
      imageSrc: '/images/c-sharp.png',
      type: 'Linguagens de programação'
      },
      {
      name: 'JavaScript',
      imageSrc: '/images/jsLogo.png',
      type: 'Linguagens de programação'
      },
      {
      name: 'Jquery',
      imageSrc: '/images/jqueryLogo.png',
    
      type:'Framework'
      },
      {
      name: 'HTML',
      imageSrc: '/images/HTML5Logo.png',
      type: 'Linguagens de programação'
      },
      {
      name: 'CSS',
      imageSrc: '/images/css-3.png',
      type: 'Linguagens de programação'
      },
      {
      name: 'Svelte',
      imageSrc: '/images/svelteLogo.png',
      type: 'Framework'
      },
      {
      name: 'Notion',
      imageSrc: '/images/notionLogo.png',
      type: 'Ferramentas'
      },
      {
      name: 'Quabro Kanban',
      imageSrc: '/images/table.png',
      type: 'Ferramentas'
      },
      ];

       var listOfTypes = listTools.map(x => x.type).
      filter(function(elem, index, self) {
    return self.indexOf(elem) == index;});


    var sortedList = listTools.sort(function(a, b) {
  const nameA = a.type.toUpperCase(); // ignore upper and lowercase
  const nameB = b.type.toUpperCase(); // ignore upper and lowercase
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});


</script>
<style lang="postcss">

.main-page{
    padding: 40px 0px 80px 0px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .about {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    padding: 8px 8px 8px 8px;
  }
  .content-about{
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
  .grid-content{
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    padding: 4px 4px 4px 4px;
  }
  .title{
    margin-bottom: 16px;
    font-size: 2.2rem;
    line-height: 32px;
    font-weight: 700;
    letter-spacing: 0.6px;
  }
  .img-grid-tools{
    width: 60px;
    height: 100%;
    min-width: 60px;
    min-height: 60px;
  }
  .img-div{
    width: 75px;
    height: 100%;
    min-width: 75px;
    min-height: 100%;
  }
  .content-about-tools{
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
  .content-tools {
    display: flex;
    width: 100%;
    height: 120px;
    padding: 20px 20px 20px 20px;
    border-radius: 18px;
    align-items: center;
  }

  .custom-etec-logo{
    min-width: 7rem;
    width: 7rem;
    padding: 0.5rem;
    border-radius: 0.75rem;
  }
  .main-content-tools-grid{
    margin-top: 3rem;
    margin-bottom: 6rem;
    margin-left: auto;
    margin-right: auto;
  }

  .content-language{
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
  }

  @media (max-width: 1020px) {
    .grid-content {
      grid-template-columns: repeat(3, minmax(0, 1fr));;
      grid-template-rows: auto;
      gap: 1.5rem;
    }
  }

  @media (max-width: 850px){
    .grid-content {
      grid-template-columns: auto;
      grid-template-rows: auto;
      gap: 1.5rem;
    }
  }

  @media (max-width: 650px) {
    .about {
      flex-direction: column;
    }
    .content-about-tools{
      padding-left: 0.5rem;
    }
    .main-content-tools-grid{
      padding-left: 0.4rem;
      padding-right: 0.4rem;
    }
    .content-about{
      width: 95%;
      padding-left: 1.0rem;
      padding-right: 1.0rem;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }
    .img-div{
      margin-bottom: 0.5rem;
    }
    .custom-etec-logo{
      margin-bottom: 0.5rem;
    }
  }
</style>

<div class="container main-page">
  <div class="content-about bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] " in:fade|local>
    <h1 class="title">Formação</h1>
    <div class="about">
      <div class="img-div">
        <img src="/images/logoFiap.png" class="rounded-xl" alt="Project 1">
      </div>
      <div class="content-about-tools">
        <h2 class="sub-title">Sistemas de Informação</h2>
        <div class="content-location">
          <h3 class="location-title">FIAP</h3>
          <h3 class="date-title">Jan/17 a Dez/20</h3>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="custom-etec-logo dark:bg-white bg-gray-300">
          <img src="/images/etecSP.png" alt="Project 1">
      </div>
      <div class="content-about-tools">
        <h2 class="sub-title">Técnico em Eletrônica integrado com o Ensino Médio</h2>
        <div class="content-location">
          <h3 class="location-title">ETEC São Paulo (ETESP)</h3>
          <h3 class="date-title">Jan/14 a Dez/16</h3>
        </div>
      </div>
    </div>
    <h1 class="title">Idiomas</h1>
    <div class="content-language space-x-12">
      <img src="/images/united-states.png" class="w-36 rounded-xl" alt="Project 1">
      <div class="sub-title">
        Avançado
      </div>
    </div>
  </div>
  <!-- <h1 class="title">Ferramentas e linguagens de programação</h1> -->
    <!-- <h1 class="title">Conhecimentos</h1>
	<p class="pl-4 pb-10">
		Domínio do Pacote Office – Word, Power Point e Excel <br>
		Conhecimento das linguagens de desenvolvimento C#, HTML, CSS, JavaScript <br>
		Requisições AJAX (Json) <br>
		Conhecimento em frameworks Bootstrap, Jquery, Jquery UI<br>
		Conhecimento em Oracle SQL, SQL Server e banco não relacional (Firebase)
	</p> -->
  <div>
    {#each listOfTypes as type}
    <div class="main-content-tools-grid container">
      <h1 class="title">{type}</h1>
      <div class="grid-content">
        {#each sortedList as item}
          {#if item.type == type}
            <div class="content-tools bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)]">
              <div>
              <img src={item.imageSrc} class="img-grid-tools" alt={item.name}>
            </div>
            <div class="content-about-tools">
              <h2 class="sub-title">{item.name}</h2>
            </div>
            </div>
          {/if}
        {/each}
      </div> 
    </div>
    {/each}
  </div>
</div>