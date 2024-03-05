<script>
    import { acceptedCookies } from '$lib/stores/cookieStore';
    import { t } from '$lib/language/translations';
    import { fly } from 'svelte/transition';
    import { selectedLanguage } from '$lib/stores/selectedLanguage';
  
    const acceptCookies = () => {
      acceptedCookies.set(true);
      document.cookie = `cookies-banner-accepted=${true} ;`;
      document.cookie = `lang=${$selectedLanguage} ;`;
    };
  </script>

<style>
  .cookies-popup {
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%);
    background: #f0f0f0;
    z-index: 2;
    border-radius: 20px;
  }
  .cookie-accept-btn{
    background-color: #0066ff;
    border-radius: 10px;
  }
</style>
    <div class="cookies-popup w-3/4 p-4 text-center items-center flex flex-col lg:flex-row lg:justify-between" transition:fly ="{{ y: 100, duration: 800}}">
      <p class="p-2 lg:p-0 text-black text-sm">{$t('cookies.cookiesMsg')}</p>
      <button class= "cookie-accept-btn p-3 lg:m-0 text-white text-sm" on:click={acceptCookies}>{$t('cookies.acceptBtnText')}</button>
    </div>
  