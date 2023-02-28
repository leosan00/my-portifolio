<style>
.img-postion{
  width: 100%;
  height: 100%;
}
</style>

<script>
  import PageLink from "$lib/components/pageLink.svelte";
</script>
<div class="h-full w-full relative">
  <img class="img-postion" src="/images/xp.jpg" alt="teste1"/>
  <PageLink route = 'experience' tab ='active-experience' nameLegend = 'Experiência'/>
</div>
