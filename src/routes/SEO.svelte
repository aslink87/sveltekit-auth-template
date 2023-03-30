<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import { onMount } from 'svelte';
  export const { title } = $seo;
  export const { description } = $seo;
  const loadSeo = () => {
    seo.set({
      title,
      description,
    });
  };
  loadSeo();
  onMount(() => {
    loadSeo();
  });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta name="theme-color" content="#000000" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <meta
    name="keywords"
    content="non-profit, financial assistance, food bank, education, Plainwell, Allegan county, Michigan"
  />
  <meta name="author" content="adam@slinkman.net" />
  <meta name="robots" content="index, follow" />
  <meta
    name="googlebot"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
  <meta
    name="bingbot"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://company.com" />
  <meta property="og:title" content="Home - Company Name" />
  <meta property="og:site_name" content="Company Name" />
</svelte:head>
