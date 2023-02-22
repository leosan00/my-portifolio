<style>
  .content-xp{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
  width: 114px;
  height: 114px;
  margin: 1em;
}

.bg {
  fill: none;
  stroke-width: 10px;
  stroke: #1A2C34;
}

[class^="meter-"] {
  fill: none;
  stroke-width: 10px;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  
}

.meter-1 {
  stroke-dasharray: 360;
  stroke-dashoffset: 50;
  stroke: #A1C181;
  animation: progress-1 2s ease-out;
}

@keyframes progress-1 {
    from {
        stroke-dashoffset: 360;
    }
    to {
        stroke-dashoffset: 50;
    }
}

.teste{
  position: absolute;
  top: 42%;
  left: 40%;
}
</style>

<script>
  import PageLink from "$lib/components/pageLink.svelte";
</script>

<div class="content-xp">
  <svg>
    <circle class="bg" cx="57" cy="57" r="52" />
    <circle class="meter-1" cx="57" cy="57" r="52" />
  </svg>
  <div class="text-5xl teste">
    XP
  </div>
  <PageLink route = 'experience' tab ='active-experience' nameLegend = 'Experiência'/>
</div>