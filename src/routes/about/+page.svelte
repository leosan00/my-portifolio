<script>
    import CardAbout from "$lib/components/cardAbout.svelte";
</script>
	<style>
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
			background-color: rgba(255, 255, 255, 0.8);
		}
		.main-grid {
			width: 100%;
			padding: 40px 15px 80px 15px;
		}

	</style>

<div class="main-grid">
	<div class="grid-content">
		<div class="col-span-2 card" >
            <CardAbout/>
        </div>
		<div class="card">
			<div>Dark mode</div>
		</div>
		<div class="row-span-3 card">
			<div>Projetos</div>
		</div>
		<div class="card">
			<div>Linkedin</div>
		</div>
		<div class="card">
			<div>Git hub</div>
		</div>
		<div class="row-span-2 card">
			<div>Sobre</div>
		</div>
		<div class=" col-span-2 card">
			<div>Ferramentas</div>
		</div>
	</div>
</div>
