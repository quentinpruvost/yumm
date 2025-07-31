<script lang="ts">
  import Icon from '@iconify/svelte';
  import Map from '$lib/components/commande/Map.svelte';
</script>

<svelte:head>
  <title>Commander - Trouver un restaurant</title>
</svelte:head>

<div class="grid grid-cols-[400px_1fr] h-screen">

  <aside class="bg-white border-r border-gray-200 p-6 flex flex-col">
    <div class="flex border-b">
      <button class="font-semibold text-blue-800 border-b-2 border-blue-800 px-4 py-2">
        Proximité
      </button>
      <button class="font-semibold text-gray-500 px-4 py-2 hover:text-blue-700">
        Favoris
      </button>
    </div>

    <div class="mt-6 relative">
      <label for="location-search" class="sr-only">Ville, Région ou Code Postal</label>
      <input 
        type="text" 
        id="location-search"
        placeholder="Ville, Région ou Code Postal"
        class="w-full rounded-md border-gray-400 border pl-10 pr-4 py-2 shadow-sm"
      />
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon icon="heroicons:magnifying-glass-20-solid" class="text-gray-400"/>
      </div>
    </div>

    <p class="mt-4 text-sm text-gray-600">
      Trouvez et sélectionnez un emplacement pour voir des menus plus précis et commencer votre commande.
    </p>

    <button 
      type="button" 
      class="mt-4 w-full bg-white border border-gray-400 text-blue-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
    >
      <Icon icon="heroicons:map-pin-20-solid" />
      <span>UTILISER MA POSITION</span>
    </button>
  </aside>

  <main class="w-full h-full">
    <Map />
  </main>

</div>