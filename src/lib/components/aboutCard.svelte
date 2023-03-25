<style lang="postcss">
  .image-container {
    width: 5.75rem;
    height: 6.0rem;
    border-radius: 30px;
    border: solid 1px black;
    background-size: cover;
    background-image: URL('/images/foto.jpg');
  }  
  .content-about {
    padding: 36px 42px;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    box-shadow: transparent 0 0 0 2px inset;
    position: relative;
  }
</style>

<script>
  import PageLink from "$lib/components/pageLink.svelte";
</script>

<div class="content-about">
  <div class="image-container" />
    <p class="my-3 text-base">
      Eu sou <span class="text-xl font-bold">Leonardo Pereira Sanger</span>, desenvolvedor do
      Brasil. Tenho interesse em aplicativos, startups, esportes e negócios
    </p>
    <PageLink route = '/about' tab ='active-about' nameLegend = 'Sobre'/>
</div>
