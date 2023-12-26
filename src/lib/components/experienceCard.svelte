<style>
.img-postion{
  width: 100%;
  height: 100%;
  border-radius: 40px;
}
</style>

<script>
  import PageLink from "$lib/components/pageLink.svelte";
  import { t } from '$lib/language/translations';
</script>
<div class="h-full w-full relative">
  <img class="img-postion" src="/images/xp.jpg" alt="teste1"/>
  <PageLink route = '/experience' tab ='active-experience' nameLegend = {$t("home.pagesLink.experience")}/>
</div>
