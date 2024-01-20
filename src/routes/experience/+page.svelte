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
    },
    {
    imageSrc:'/images/logoAtento.jpg',
    location: $t("experience.companies.2.companyName"),
    role: $t("experience.companies.2.job.role"),
    date:$t("experience.companies.2.job.date"),
    jobDescription: $t("experience.companies.2.job.description")
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
  .experience-header {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
    justify-content: flex-end;
  }
  .experience-header:last-child .experience-description{
      padding-bottom: 0;
  }

  .content-experiences{
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
  .main-text-experience{
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
  .experience-description {
    font-size: 1.15rem;
    padding-left: 1.2rem;
    padding-bottom: 2rem;
    padding-top: 1.8rem;
  }

  @media (min-width: 640px) {

    .main-text-experience{
      padding-left: 2.5rem;
    }
    .content-experiences{
      width: 75%;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      padding-top: 2.75rem;
      padding-bottom: 2.75rem;
    }
    .experience-description{
      padding-left: 1rem;
    }
  }
</style>

<div class="container main-page">
  <div class="content-experiences bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)]" in:fade|local>
    <h1 class="title">{$t("experience.title")}</h1>
    {#each listOfXp as xpItem }
      <div class="experience-header">
        <div class="flex w-full justify-between items-center">
          <div class="img-div">
            <img src= {xpItem.imageSrc} class="rounded-xl" alt="Project 1">
          </div>
          <div class="main-text-experience w-full md:w-5/6">
            <h2 class="sub-title">{xpItem.location}</h2>
            <div class="content-location">
              <h3 class="location-title">{xpItem.role}</h3>
              <h3 class="date-title">{xpItem.date}</h3>
            </div>
          </div>
        </div>
        <div class="experience-description w-full md:w-5/6">
          <ul class="list-disc pl-11">
            {@html xpItem.jobDescription}
          </ul>
        </div>      
      </div>
    {/each}
  </div>
</div>