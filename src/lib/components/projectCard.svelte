<style lang="postcss">
  .test-position-left,.test-position-right{
    opacity: 0;
    width: 15rem;
    transition: all 1.2s ease-in-out;
  }
  .test-position-left{
    transform: translateX(-80%) translateY(35%);
  }
  .test-position-right{
    transform: translateX(85%) translateY(35%);
  }
  :global(.card:hover .test-position-left, .card:hover .test-position-right){
    opacity: 1;
    transform: translateX(0%) translateY(0%);
    width: 13rem;
  }
  .image-left, .image-right{
    display: flex;
    justify-content: center;
    padding: 8px 4px 15px 4px;
  }
  .content-projects{
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  @media (max-width: 850px) {
    .test-position-left,.test-position-right{
      opacity: 0;
      width: 19rem;
    }
    .test-position-left{
      transform: translateX(-85%) translateY(35%);
    }
    .test-position-right{
      transform: translateX(85%) translateY(35%);
    }
    .image-left, .image-right{
      justify-content: center;
      padding: 18px 4px 25px 4px;
      display: flex;
    }
    :global(.card:hover .test-position-left, .card:hover .test-position-right){
      opacity: 1;
      transform: translateX(0%) translateY(0%);
      width:  19rem;
    }
  }
</style>

<script>
  import PageLink from "$lib/components/pageLink.svelte";
</script>

<div class="content-projects">
  <div class="image-left">
    <img class="rounded-3xl test-position-left" src="/images/fiap.png" alt="ad"/>
  </div>
  <div class="image-right">
    <img class="rounded-3xl test-position-right" src="/images/startupInSchool.png" alt="ad"/>
  </div>
  <div class="image-left">
    <img class="rounded-3xl test-position-left" src="/images/atento.png" alt="ad"/>
  </div>
  <div class="image-right">
    <img class="rounded-3xl test-position-right" src="/images/valor.png" alt="ad"/>
  </div>
</div>

<PageLink route = 'projects' tab ='active-projects' nameLegend = 'Projetos'/>