<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { t } from "$lib/language/translations";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  $: listTools = [
    {
      name: "Visual Studio",
      imageSrc: "/images/vsLogo.svg",
      type: $t("about.tools.title"),
    },
    {
      name: "Visual Studio Code",
      imageSrc: "/images/vsCodeLogo.png",
      type: $t("about.tools.title"),
    },
    {
      name: "Sql Server Management",
      imageSrc: "/images/sql-server.png",
      type: $t("about.tools.title"),
    },
    {
      name: "Firebase",
      imageSrc: "/images/firebaseLogo.png",
      type: $t("about.tools.title"),
    },
    {
      name: "Oracle Sql Developer",
      imageSrc: "/images/OracleSqlLogo.png",
      type: $t("about.tools.title"),
    },
    {
      name: "Postman",
      imageSrc: "/images/postmanLogo.svg",
      type: $t("about.tools.title"),
    },
    {
      name: "Android Studio",
      imageSrc: "/images/androidStudioLogo.png",
      type: $t("about.tools.title"),
    },
    {
      name: "Flutter",
      imageSrc: "/images/flutterLogo.png",
      type: "Framework",
    },
    {
      name: "Dart",
      imageSrc: "/images/dartLogo.png",
      type: $t("about.programmingLanguage.title"),
    },
    {
      name: "C#",
      imageSrc: "/images/c-sharp.png",
      type: $t("about.programmingLanguage.title"),
    },
    {
      name: "JavaScript",
      imageSrc: "/images/jsLogo.png",
      type: $t("about.programmingLanguage.title"),
    },
    {
      name: "SQL",
      imageSrc: "/images/sql-server.png",
      type: $t("about.programmingLanguage.title"),
    },
    {
      name: "Jquery",
      imageSrc: "/images/jqueryLogo.png",
      type: "Framework",
    },
    {
      name: "HTML",
      imageSrc: "/images/HTML5Logo.png",
      type: $t("about.others.title"),
    },
    {
      name: "CSS",
      imageSrc: "/images/css-3.png",
      type: $t("about.others.title"),
    },
    {
      name: "Svelte",
      imageSrc: "/images/svelteLogo.png",
      type: "Framework",
    },
    {
      name: "Notion",
      imageSrc: "/images/notionLogo.png",
      type: $t("about.tools.title"),
    },
    {
      name: "ASP.NET Core",
      imageSrc: "/images/NET-Core.png",
      type: "Framework",
    },
    {
      name: "Entity Framework Core",
      imageSrc: "/images/entity-framework.png",
      type: $t("about.others.title"),
    },
    {
      name: "Bootstrap",
      imageSrc: "/images/bootstrap-logo.svg",
      type: "Framework",
    },
  ];

  $: listOfTypes = listTools
    ?.map((x) => x.type)
    .filter(function (elem, index, self) {
      return self.indexOf(elem) == index;
    });

  $: sortedList = listTools?.sort(function (a, b) {
    const nameA = a.type.toUpperCase(); // ignore upper and lowercase
    const nameB = b.type.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
</script>

<style lang="postcss">
  .main-page {
    padding: 40px 0px 80px 0px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .about {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    padding: 8px 8px 8px 8px;
  }

  .content-about {
    border-radius: 40px;
    width: 95%;
    padding: 2.5rem 1.5rem;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .grid-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    gap: 1rem;
    padding: 4px 4px 4px 4px;
  }
  .title {
    margin-bottom: 1.2rem;
    font-size: 2.2rem;
    line-height: 32px;
    font-weight: 800;
  }
  .img-grid-tools {
    width: 60px;
    height: 100%;
    min-width: 60px;
    min-height: 60px;
    border-radius: 8px;
  }
  .img-div {
    width: 75px;
    height: 100%;
    min-width: 75px;
    min-height: 100%;
    margin-bottom: 0.5rem;
  }
  .content-about-tools {
    padding-left: 1.5rem;
    width: 100%;
  }
  .sub-title {
    font-size: 1.25rem;
    font-weight: 700;
  }
  .content-location {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 0.2rem;
  }
  .location-title,
  .date-title {
    font-size: 1.05rem;
    font-weight: 600;
  }
  .content-tools {
    display: flex;
    width: 100%;
    height: 120px;
    padding: 20px 20px 20px 20px;
    border-radius: 18px;
    align-items: center;
  }

  .custom-etec-logo {
    width: 75px;
    height: 75px;
    min-width: 75px;
    padding-top: 0.2rem;
    padding-right: 0.5rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-items: center;
    margin-bottom: 0.5rem;
  }
  .main-content-tools-grid {
    margin-top: 3rem;
    margin-bottom: 6rem;
    margin-left: auto;
    margin-right: auto;
  }

  .main-content-tools-grid:last-child {
    margin-bottom: 0rem;
  }

  .content-language {
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
  }

  @media (min-width: 640px) {

    .content-about-tools {
      padding-left: 2.5rem;
    }
    .main-content-tools-grid {
      padding-left: 0.8rem;
      padding-right: 0.8rem;
    }
    .content-about {
      width: 75%;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      padding-top: 2.75rem;
      padding-bottom: 2.75rem;
    }
  }
  
    @media (min-width: 850px) {

      .about{
        flex-direction: row;
      }

      .grid-content {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
      }
    }
  
  @media (min-width: 1020px) {
    .grid-content {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1.5rem;
    }
  }

</style>


{#if mounted}
  <div class="container main-page">
    <div class="content-about bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)]" in:fade|local>
      <h1 class="title">{$t("about.education.title")}</h1>
      <div class="mt-10 mb-12">
        <div class="about">
          <div class="img-div">
            <img src="/images/logoFiap.png" class="rounded-xl" alt="logoFiap" />
          </div>
          <div class="content-about-tools">
            <h2 class="sub-title">{$t("about.education.mbaDescription")}</h2>
            <div class="content-location">
              <h3 class="location-title">FIAP</h3>
              <h3 class="date-title">{$t("about.education.mbaDate")}</h3>
            </div>
          </div>
        </div>
        <div class="about">
          <div class="img-div">
            <img src="/images/logoFiap.png" class="rounded-xl" alt="logoFiap" />
          </div>
          <div class="content-about-tools">
            <h2 class="sub-title">{$t("about.education.fiapDescription")}</h2>
            <div class="content-location">
              <h3 class="location-title">FIAP</h3>
              <h3 class="date-title">{$t("about.education.fiapDate")}</h3>
            </div>
          </div>
        </div>
        <div class="about">
          <div class="custom-etec-logo dark:bg-white bg-gray-300">
            <img src="/images/etecSP.png" alt="etecSP" />
          </div>
          <div class="content-about-tools">
            <h2 class="sub-title">{$t("about.education.etecDescription")}</h2>
            <div class="content-location">
              <h3 class="location-title">ETEC São Paulo (ETESP)</h3>
              <h3 class="date-title">{$t("about.education.etecDate")}</h3>
            </div>
          </div>
        </div>
      </div>
        <h1 class="title">{$t("about.language.title")}</h1>
        <div class="content-language space-x-12">
          <img src="/images/united-states.png" class="w-32 rounded-xl" alt="unites-states-flag"/>
          <div class="sub-title">
            {$t("about.language.englishLanguage")}
          </div>
        </div>
    </div>
  <div>
      {#each listOfTypes as type}
        <div class="main-content-tools-grid container px-5 md:px-2">
          <h1 class="title">{type}</h1>
          <div class="grid-content">
            {#each sortedList as item}
              {#if item.type == type}
                <div class="content-tools bg-white/[0.8] dark:bg-zinc-800/90 dark:border-2 dark:border-[#666666] dark:shadow-[0_0_0_2px_inset_rgb(48 54 61)] drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)]">
                  <div>
                    <img src={item.imageSrc} class="img-grid-tools" alt={item.name}/>
                  </div>
                  <div class="content-about-tools">
                    <h2 class="sub-title">{item.name}</h2>
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}