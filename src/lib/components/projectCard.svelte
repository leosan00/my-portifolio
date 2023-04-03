<style lang="postcss">
  .position-left,.position-right{
    opacity: 0;
    width: 18rem;
    transition: all 1.2s ease-in-out;
  }
  .position-left{
    transform: translateX(-80%) translateY(35%);
  }
  .position-right{
    transform: translateX(85%) translateY(35%);
  }
  :global(.card:hover .position-left, .card:hover .position-right){
    opacity: 1;
    transform: translateX(0%) translateY(0%);
    width: 15rem;
  }
  .image-left, .image-right{
    display: flex;
    justify-content: center;
    padding: 8px 4px 15px 4px;
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

  @media (max-width: 850px) {
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
    .image-left, .image-right{
      justify-content: center;
      padding: 18px 4px 25px 4px;
      display: flex;
    }
    :global(.card:hover .position-left, .card:hover .position-right){
      opacity: 1;
      transform: translateX(0%) translateY(0%);
      width:  15rem;
    }
  }

  @media (max-width: 650px) {
    .position-left,.position-right{
      opacity: 1;
      width:  15rem;
    }
    .position-left, .position-right{
      transform: translateX(0%) translateY(0%);
    }
  }

</style>

<script>
  import PageLink from "$lib/components/pageLink.svelte";
</script>

<div class="content-projects will-change-auto">
  <div class="image-left">
    <img class="rounded-3xl position-left" src="/images/fiap.png" alt="ad"/>
  </div>
  <div class="image-right">
    <img class="rounded-3xl position-right" src="/images/startupInSchool.png" alt="ad"/>
  </div>
  <div class="image-left">
    <img class="rounded-3xl position-left" src="/images/logoHC.png" alt="ad"/>
  </div>
  <PageLink route = '/projects' tab ='active-projects' nameLegend = 'Projetos'/>
</div>

