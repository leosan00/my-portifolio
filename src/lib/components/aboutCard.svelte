<style lang="postcss">
  .my-image-container {
    margin-top: 4px;
    margin-bottom: 4px;
    width: 5.75rem;
    height: 6.0rem;
    border-radius: 30px;
    border: solid 1px black;
    background-size: cover;
    background-image: URL('/images/foto.jpg');
  }
  .card-about {
    padding: 25px 42px;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    box-shadow: transparent 0 0 0 2px inset;
    position: relative;
  }
  .content-about{
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: space-between;
  }
</style>

<script>
  import PageLink from "$lib/components/pageLink.svelte";

	let now = new Date(),
			month = '' + (now.getMonth() + 1),
		 	year = now.getFullYear();

  const xpStartDate = new Date(2019, 3, 1);

  let xpYears = year - xpStartDate.getFullYear();

</script>

<div class="card-about">
  <div class="content-about">
    <div class="my-image-container" />
    <div class="flex">
      <img class="m-2" src="/images/basketball-ball.png" width="37" alt="teste1"/>
      <img class="m-2" src="/images/programming.png" width="37" alt="teste1"/>
    </div>
  </div>
    <p class="my-1 mx-1">
      Eu sou <span class="text-xl font-bold">Leonardo Pereira Sanger</span>, desenvolvedor do
      Brasil. Estou no mercado de tecnologia a {xpYears} anos com experiência em front-end e back-end.
    </p>
    <p class="my-1 mx-1">Gosto de fazer trabalhos criativos, escaláveis e com uma boa experiência de usuário.</p>
    <PageLink route = '/about' tab ='active-about' nameLegend = 'Sobre'/>
</div>
