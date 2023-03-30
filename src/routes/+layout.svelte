<script>
  import { seo } from '$lib/stores/Seo';
  import Navigation from '../components/navigation/Navigation.svelte';
  import Footer from '../components/footer/Footer.svelte';
  import Seo from './SEO.svelte';

  seo.set({
    title: 'Company Name',
    description: 'Company Name',
  });
</script>

<Seo title={$seo.title} description={$seo.description} />
<Navigation />
<main class="main" data-testid="main">
  <slot />
</main>
<Footer />

<style lang="scss">
  main {
    background-color: $deep-blue;
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    min-height: 100vh;
    padding-top: 3rem;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    box-sizing: border-box;
    overflow: scroll;
    text-decoration: none;
  }
  :global(body) {
    font-family: Inter-Regular, 'Segoe UI Mono', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
  }
</style>
