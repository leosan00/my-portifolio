<script>
  import { fade } from "svelte/transition";
  import { t } from '$lib/language/translations';

  $: listOfXp = [
    {
    imageSrc:'/images/logoValor.png',
    location: `${$t("experience.companies.0.companyName")} (Valor Econômico)`,
    role:$t("experience.companies.0.job.role"),
    date:$t("experience.companies.0.job.date"),
    jobDescription: $t("experience.companies.0.job.description")
    },
    {
    imageSrc:'/images/logoAtento.jpg',
    location: $t("experience.companies.1.companyName"),
    role: $t("experience.companies.1.job.role"),
    date:$t("experience.companies.1.job.date"),
    jobDescription: $t("experience.companies.1.job.description")
    }
  ];
</script>

<style lang="postcss">

  ul :global(.spacing-topics){
    margin-bottom: 0.5rem;
  }

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
    letter-spacing: 0.6px;
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
    flex-direction: column;
    padding-left: 0.2rem;

  }
  .location-title, .date-title{
    font-size: 1.05rem;
    font-weight: 600;
  }
  .description-project {
    font-size: 1.15rem;
    margin-top: 0.8rem;
    margin-left: 1.8rem;
  }

  @media (max-width: 650px) {
    .experience {
      flex-direction: column;
    }
    .main-text-experience{
      padding-left: 0.5rem;
      padding-top: 1rem;
    }
    .content-experiences{
      width: 95%;
      padding-left: 1.0rem;
      padding-right: 1.0rem;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }
  }
</style>

<div class="container main-page">
  <div class="content-experiences bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)]" in:fade|local>
    <h1 class="title">{$t("experience.title")}</h1>
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
          <div class="description-project">
            <ul class="list-disc">
              {@html xpItem.jobDescription}
            </ul>
          </div>
        </div>
      </div>      
    {/each}
  </div>
</div>