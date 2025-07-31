<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Icon from '@iconify/svelte';

  // Variable pour afficher l'alerte d'erreur (pour la démonstration)
  let showError = true;
</script>

<svelte:head>
  <title>Carrières - Yummy's</title>
</svelte:head>

<div>
  <Header />

  <main class="container mx-auto px-4 py-16">
    
    <section class="text-center max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl text-blue-900 font-extrabold uppercase">
        Trouvez votre carrière chez Yummy's
      </h1>
      <p class="mt-6 text-gray-700">
        Dans nos restaurants, l'esprit d'équipe et la collaboration sont essentiels. En rejoignant notre équipe, vous évoluerez dans un environnement solidaire et dynamique, tout en ayant l'opportunité de vous développer personnellement et professionnellement. Travaillez dur pour nous, et nous travaillerons tout aussi dur pour vous. C'est la méthode Yummy's.
      </p>
    </section>

    <section class="text-center max-w-xl mx-auto mt-20">
      <h2 class="text-3xl text-blue-900 font-extrabold uppercase">
        Recherchez un Yummy's près de chez vous.
      </h2>

      <form class="mt-8 flex flex-col items-center justify-center gap-3">
        <div>
          <label for="location-search" class="block text-left text-sm font-medium text-gray-700 mb-1">
            Entrez la ville, région ou code postal
          </label>
          <div class="flex gap-2">
            <input 
              type="text" 
              id="location-search"
              class="w-72 rounded-md border-gray-400 border px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
            <button 
              type="submit" 
              class="bg-blue-800 text-white font-bold uppercase px-8 py-2 rounded-md hover:bg-blue-700 transition-colors h-[42px]"
            >
              Go
            </button>
          </div>
        </div>

        <button 
          type="button" 
          class="w-full max-w-xs bg-gray-100 border border-gray-400 text-blue-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
        >
          <Icon icon="heroicons:map-pin-20-solid" />
          <span>Utiliser ma position</span>
        </button>
      </form>

      {#if showError}
        <div class="mt-10 border border-red-500 bg-red-50 p-4 text-red-700 rounded-md">
          Nous n'avons pas trouvé de Yummy's près de chez vous. Veuillez chercher un autre endroit.
        </div>
      {/if}

    </section>

  </main>

  <Footer />
</div>