<style lang="postcss">
  .position-left,.position-right{
    opacity: 1;
    width:  15rem;
    transform: translateX(0%) translateY(0%);
    transition: all 1.2s ease-in-out;
  }
  :global(.card:hover .position-left, .card:hover .position-right){
    opacity: 1;
    transform: translateX(0%) translateY(0%);
    width: 15rem;
  }
  .image-left, .image-right{
    display: flex;
    justify-content: center;
    padding: 1.5rem 0.2rem;
    
  }
  .content-projects{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }

  @media (min-width: 1024px) {
    .position-left,.position-right{
      opacity: 0;
      width: 18rem;
    }
    .position-left{
      transform: translateX(-85%) translateY(35%);
    }
    .position-right{
      transform: translateX(85%) translateY(35%);
    }
  }

  @media (min-width: 1280px) {

    .image-left, .image-right{
      padding: 1.5rem 0.2rem;
    }
  }

</style>

<script>
  import PageLink from "$lib/components/pageLink.svelte";
  import { t } from '$lib/language/translations';
</script>

<div class="content-projects will-change-auto">
  <div class="image-left">
    <img class="rounded-3xl position-left" src="/images/fiap.png" alt="fiap"/>
  </div>
  <div class="image-right">
    <img class="rounded-3xl position-right" src="/images/startupInSchool.png" alt="startUpInSchool"/>
  </div>
  <div class="image-left">
    <img class="rounded-3xl position-left" src="/images/logoHC.png" alt="logoHC"/>
  </div>
  <PageLink route = '/projects' nameLegend = {$t("home.pagesLink.projects")}/>
</div>

