<style lang="postcss">
  .my-image-container {
    margin-top: 4px;
    margin-bottom: 4px;
    width: 5.3rem;
    height: 6.8rem;
    border-radius: 30px;
    border: solid 1px black;
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
  import {Rive} from '@rive-app/canvas';
  import {onMount} from 'svelte';
  import anime from "animejs";
  import { createEventDispatcher } from 'svelte';
  import {darkMode} from '$lib/stores/darkMode.js';

  let animationBall;
  let animationResetIn;
  let animationResetOut;
  let animationImgUndo;

  let animationPcResetCompletedIn = false;
  let animationPcResetCompletedOut = false;

  let isHovered = false;
  let x;
	let y;

  let clickedPc = 0;

  const dispatch = createEventDispatcher();

  // const config = {
  //   subtree: true,
  //   attributes: true,
  //   childList: true
  // }

  // const callback = (mutationList) => {
  //   for(const mutation of mutationList){
  //     if(mutation.type === 'childList'){
  //       console.log('child is added');
  //     }
  //   }
  // };

  // const observer = new MutationObserver(callback);

  // observer.observe(document.body, config);

	let now = new Date(),
			month = '' + (now.getMonth() + 1),
		 	year = now.getFullYear();

  const xpStartDate = new Date(2019, 3, 1);

  let xpYears = year - xpStartDate.getFullYear();

  onMount(() => {
    // const r = new Rive({
    //     src: "images/coffee-cup.riv",
    //     canvas: document.getElementById("canvas"),
    //     autoplay: true,
    //     stateMachines: "State Machine 1",
    //     onLoad: () => {
    //       r.resizeDrawingSurfaceToCanvas();
    //     },
    // });

    animationBall = anime.timeline({
      autoplay: false,
    }).add({
      targets: '.bounce-click',
      translateY: -35,
      rotate: '1turn',
      easing: 'easeInBounce',
      duration:1600
   }).add({
      targets: '.bounce-click',
      translateY: 0,
      rotate: '2turn',
      duration:800,
      easing: 'easeInOutQuad',
   },'-=100');

   animationResetOut = anime.timeline({
      autoplay: false,
    }).add({
      targets: '.img-undo-reset',
      scale: [1,0],
      rotate: '-1turn',
      duration:1500,
   })
    .add({
      targets: '.reset-pc-counter',
      opacity: [1,0],
      width: ['2rem', 0],
      duration:1500,
      complete: function(anim) {
        animationPcResetCompletedOut = true; 
        animationPcResetCompletedIn = false; 
      }
   },'-=1400');

   animationResetIn = anime.timeline({
      autoplay: false,
    }).add({
      targets: '.reset-pc-counter',
      opacity: [0,1],
      width: [0,'4rem'],
      duration:1500,
    }).add({
      targets: '.img-undo-reset',
      scale: [0,1],
      rotate: '1turn',
      duration:1500,
      complete: function(anim) {
        animationPcResetCompletedOut = false; 
        animationPcResetCompletedIn = true; 
      }
   }, '-=1400');

   clickedPc = document.querySelectorAll('.pc-plus').length;
    if(clickedPc >= 1 && !animationPcResetCompletedIn){
      animationResetIn.play();
    }

  });

  function handleOnClickBall(){
    animationBall.play();
  }

  function handleOnClickPC(){
    var elem = document.createElement("img");
    elem.setAttribute("src", "/images/programming.png");
    elem.setAttribute("width", "47");
    var div = document.getElementsByClassName("main-screen")[0];
  
    elem.style.position = 'absolute';
    elem.style.top = (document.body.clientHeight * Math.random()) + 'px';
    elem.style.left = (document.body.clientWidth * Math.random()) + 'px';
    elem.style.zIndex = "-5";
    elem.style.opacity = "0.6";
    elem.className = "pc-plus";

    div?.appendChild(elem);

    clickedPc ++;

    if(clickedPc >= 1 && !animationPcResetCompletedIn){
      animationResetIn.play();
    }
  }

  function handleMouseOn (e){
    isHovered = true;
    x = e.pageX + 12;
		y = e.pageY + 12;

    dispatch('message', {
			isHovered: 'true'
		});
  }

  function mouseMove(event) {
		x = event.pageX + 12;
		y = event.pageY + 12;

    dispatch('message', {
      isHovered: 'true',
      positionX: x,
      positionY: y
		});
	}

  function handleMouseLeave(){
    isHovered = false;

    dispatch('message', {
			isHovered: 'false'
		});
  }

  function handleOnClickPCControl(){
    const pcs = document.querySelectorAll('.pc-plus');
    pcs.forEach(pc => {
      pc.remove();
    });

    animationResetOut.play();
    animationPcResetCompletedIn = false;
    clickedPc = 0;

  }
  

</script>

<div class="card-about">
  <div class="content-about">
    <img class="my-image-container object-fill" src="/images/leo_foto_perto_2.jpg" alt= "foto" />
    <div class="inline-flex">
      <div class="self-center reset-pc-counter flex justify-end">
        <svg aria-hidden="true" class="object-contain img-undo-reset" fill=" {$darkMode ? 'white' : 'black' }" xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 512 512" on:click={handleOnClickPCControl}><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"/></svg>
      </div>
      <img aria-hidden="true" class="m-2 self-center" src="/images/programming.png" width="47" alt="teste1" on:click={handleOnClickPC} on:pointerenter={handleMouseOn} on:pointerleave={handleMouseLeave} on:mousemove={mouseMove}/>
      <img aria-hidden="true" class="m-2 self-center bounce-click " src="/images/basketball-ball.png" width="47"  alt="teste1" on:click={handleOnClickBall} on:pointerenter={handleMouseOn} on:pointerleave={handleMouseLeave} on:mousemove={mouseMove}/>
    </div>
  </div>
    <p class="my-1 mx-1">
      Eu sou <span class="text-xl font-bold">Leonardo Pereira Sanger</span>, desenvolvedor do
      Brasil. Estou no mercado de tecnologia a {xpYears} anos com experiência em front-end e back-end.
    </p>
    <p class="my-1 mx-1">Gosto de fazer trabalhos criativos, escaláveis e com uma boa experiência de usuário.</p>
    <PageLink route = '/about' tab ='active-about' nameLegend = 'Sobre'/>
</div>
