<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Hero from '$lib/components/accueil/Hero.svelte';
  import FlavorCalendar from '$lib/components/accueil/FlavorCalendar.svelte';
  import CallToAction from '$lib/components/accueil/CallToAction.svelte';
</script>

<svelte:head>
  <title>Yummy's - Bienvenue chez les Gourmands</title>
  <meta name="description" content="Page d'accueil du restaurant de fast-food américain Yummy's. Découvrez notre parfum du jour !" />
</svelte:head>

<div class="font-sans">
  <Header />

  <main>
    <Hero />
    <FlavorCalendar />
    <CallToAction />
  </main>

  <Footer />
</div>