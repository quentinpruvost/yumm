<script lang="ts">
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Erreur {$page.status} - Yummy's</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="flex-grow flex items-center justify-center">
    <div class="text-center p-8">
      <h1 class="text-8xl md:text-9xl font-extrabold text-blue-800 tracking-wider">
        {$page.status}
      </h1>
      
      <h2 class="mt-4 text-2xl md:text-4xl font-bold text-gray-800">
        {#if $page.status === 404}
          Page non trouvée
        {:else}
          Une erreur est survenue
        {/if}
      </h2>

      <p class="mt-4 text-gray-600">
        {#if $page.status === 404}
          Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
        {:else}
          {$page.error?.message ?? "Quelque chose s'est mal passé sur nos serveurs."}
        {/if}
      </p>

      <div class="mt-10">
        <a href="/" class="bg-blue-700 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-800 transition-colors">
          Retour à l'accueil
        </a>
      </div>
    </div>
  </main>

  <Footer />
</div>