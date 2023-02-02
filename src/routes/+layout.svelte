<svelte:head>
    <script>
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    </script>
</svelte:head>
<script>
    import '../app.css'
  </script>
  <div class="top-menu">
      <a href="/">Leonardo Pereira Sanger</a>
      <div>
          <a href="/">home</a>
          <a href="/about">about</a>
      </div>
  </div>
  
  <slot />