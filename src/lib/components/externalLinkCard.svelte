<script>
    import { fade, fly } from "svelte/transition";

    export let imageSrc = "";
    export let hoveredSubtitle = "";

    export let link = "";

    function load() {
        window.open(link, "_blank");
    }

    let hover = false;
    function handleMouseInElement() {
        hover = true;
    }

    function handleMouseOutElement() {
        hover = false;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:mouseenter={handleMouseInElement} on:mouseleave={handleMouseOutElement} on:click={load} class="content-external-link">
    <img class="object-cover h-full w-full" src={imageSrc} alt="Image {hoveredSubtitle}" />

    {#if hover}
        <div class="text-background absolute -bottom-2 right-0 rounded-l-xl" in:fly={{ y: 50, duration: 1500 }} out:fade>
            <p class="pl-2 pr-3 pb-4">
                {hoveredSubtitle}
            </p>
        </div>
    {/if}
</div>

<style>
    .content-external-link {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .text-background {
        width: fit-content;
        background-color: white;
        color: black;
    }
</style>
