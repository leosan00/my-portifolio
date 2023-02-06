<script>
    import CardAbout from "$lib/components/cardAbout.svelte";
	import DarkMode from "$lib/components/darkMode.svelte";
	import ExternalLinkCard from "$lib/components/externalLinkCard.svelte";

</script>
	<style lang="postcss">
		.grid-content {
			max-width: 1200px;
			margin: 0 auto;
			display: grid;
			grid-template-columns: repeat(4, minmax(0, 1fr));
			grid-template-rows: 280px 280px;
			gap: 1rem;
		}
		.card {
			width: 100%;
			height: 100%;
			border-radius: 40px;
            overflow: hidden;
			transition: all .2s ease-in-out;
		}
		.card:hover { 
			transform: scale(1.05); 
		}
		.main-grid {
			width: 100%;
			padding: 40px 15px 80px 15px;
		}

	</style>

<div class="main-grid">
	<div class="grid-content">
		<div class="col-span-2 bg-white/[0.8] dark:bg-zinc-800/90 card  drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)]" >
		<CardAbout/>
        </div>
		<div class=" bg-white/[0.8] dark:bg-zinc-800/90 card drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
			<DarkMode/>
		</div>
		<div class="row-span-3  bg-white/[0.8] dark:bg-zinc-800/90 card drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
			<div>Projetos</div>
		</div>
		<div class="card bg-white/[0.8] dark:bg-zinc-800/90 drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
			<ExternalLinkCard imageSrc = '/images/linkedin.png' hoveredSubtitle = 'Linkedin' link= 'https://www.linkedin.com/in/leonardo-sanger-297ab713a/'/>
		</div>
		<div class="card  bg-white/[0.8] dark:bg-zinc-800/90 drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
			<ExternalLinkCard imageSrc = '/images/github.png' hoveredSubtitle = 'GitHub' link='https://github.com/leosan00/my-portifolio' />
		</div>
		<div class="row-span-2 card  bg-white/[0.8] dark:bg-zinc-800/90 drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
			<div>Sobre</div>
		</div>
		<div class=" col-span-2 card  bg-white/[0.8] dark:bg-zinc-800/90 drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)] ">
			<div>Ferramentas</div>
		</div>
	</div>
</div>
