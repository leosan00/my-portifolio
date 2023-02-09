<style>
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

  .projects{
    height: 40px;
    border-radius: 22px;
    position: absolute;
    left: 16px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    transition: all 0.4s ease-out .3s ;
    background: rgb(255, 255, 255);
    border: none;
    bottom: 16px;
    width: 40px;
    
  }
  .projects:hover{
    width: 110px;
    cursor: pointer;
      box-shadow: 0 0px 0px 4px rgb(255 255 255 / 50%);
  }

  .projects:hover .legend{
    opacity: 1;
      transform: none;
  }

  .legend{
    opacity: 0;
    transform: translateX(-12px) translateZ(0px);
    font-size: 15px;
    font-family: "Silka Regular";
    line-height: normal;
    letter-spacing: 0.3px;
    font-weight: 400;
    white-space: nowrap;
    color: rgb(13, 17, 23);
    margin: 0px 36px 0px 16px;
    transition: all .4s ease-in-out .2s;
  }

  .position-icon{
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
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


    :global(.card:hover .test-position-left, .content-projects:hover .test-position-right){
      opacity: 1;
      transform: translateX(0%) translateY(0%);
      width:  19rem;
    }

  }
</style>
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
    <a href="/projects">
      <div class="projects">
        <p class="legend">
          Projetos
        </p>
      <div class="position-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width= 25 height=25 ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>
      </div>  
    </div>
  </a> 