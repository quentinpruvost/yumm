<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Trouver le Parfum du Jour - Yummy's</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="flex-grow">
    <div class="container mx-auto px-4 py-20 text-center">
      
      <h1 class="font-bold uppercase">
        <span class="block text-2xl sm:text-3xl text-gray-700 font-semibold">Trouvez votre</span>
        <span class="block text-5xl sm:text-6xl text-blue-800 mt-1">Parfum du Jour</span>
      </h1>

      <form class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2">
        <div>
          <label for="location-search" class="sr-only">Ville, Région ou Code Postal</label>
          <input 
            type="text" 
            id="location-search"
            placeholder="Entrez la ville, région ou code postal"
            class="w-72 rounded-md border-gray-400 border px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
        </div>
        <button 
          type="submit" 
          class="bg-blue-800 text-white font-bold uppercase px-8 py-2 rounded-md hover:bg-blue-700 transition-colors h-[42px]"
        >
          Go
        </button>
      </form>

      <p class="mt-6 text-sm text-gray-600">
        <a href="/inscription" class="text-blue-600 underline hover:text-blue-800">Rejoignez MyYummy's</a> pour recevoir les actus du Parfum du Jour.
      </p>

    </div>

    <div class="w-full mt-10">
      <img 
        src="/images/mascot.jpg" 
        alt="Assortiment de parfums de crème glacée"
        class="w-full h-48 object-cover"
      >
    </div>
  </main>

  <Footer />
</div>