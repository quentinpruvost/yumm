<script lang="ts">
  import Icon from '@iconify/svelte';

  // Type pour les données du parfum
  type Flavor = {
    date: string;
    dayOfWeek: string;
    flavorName: string;
    imageUrl: string;
    soups: string[];
  };

  // Le composant reçoit un seul objet "data"
  export let data: Flavor;
  
  // Une prop pour savoir si c'est la carte principale (texte blanc)
  export let isFeatured: boolean = false;
</script>

<div class="flex items-start space-x-6 p-6 border-t border-gray-200">
  <img src={data.imageUrl} alt={data.flavorName} class="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md flex-shrink-0">
  
  <div>
    <h3 class="text-lg font-bold" class:text-white={isFeatured} class:text-gray-800={!isFeatured}>
      {data.dayOfWeek}, {data.date}
    </h3>
    
    <p class="mt-1" class:text-gray-200={isFeatured} class:text-gray-600={!isFeatured}>
      Parfum du Jour : 
      <a href="#" class="font-semibold underline" class:text-white={isFeatured} class:text-blue-600={!isFeatured}>
        {data.flavorName}
      </a>
    </p>

    {#if !isFeatured}
      <button class="mt-3 flex items-center space-x-2 bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm font-bold hover:bg-blue-800">
        <Icon icon="heroicons:calendar-days-20-solid" />
        <span>AJOUTER AU CALENDRIER</span>
      </button>
    {/if}
    
    <p class="mt-2 text-sm" class:text-gray-300={isFeatured} class:text-gray-500={!isFeatured}>
      Soupes : 
      <a href="#" class="underline" class:text-white={isFeatured} class:text-blue-600={!isFeatured}>
        {data.soups.join(', ')}
      </a>
    </p>
    
    <p class="mt-1 text-xs text-gray-400">
      Les soupes du jour sont disponibles jusqu'à épuisement des stocks.
    </p>
  </div>
</div>