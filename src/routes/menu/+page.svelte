<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import MenuCard from '$lib/components/menu/MenuCard.svelte';

  // Données pour nos catégories de menu
  const menuCategories = [
    { name: 'Glace pistache cookies', imageUrl: '/images/mintcookie.jpg' },
    { name: 'Glace caramel', imageUrl: '/images/caramel.jpg' },
    { name: 'Crèmes Glacées', imageUrl: '/images/mintchoco.jpg' },
    { name: 'Glace pistache cookies', imageUrl: '/images/mintcookie.jpg' },
    { name: 'Glace caramel', imageUrl: '/images/caramel.jpg' },
    { name: 'Crèmes Glacées', imageUrl: '/images/mintchoco.jpg' },
  ];
</script>

<svelte:head>
  <title>Notre Menu - Yummy's</title>
</svelte:head>

<div>
  <Header />

  <main class="container mx-auto px-4 py-8">
    
    <div class="border-b border-gray-300">
      <div class="text-sm text-gray-500 mb-4">
        <a href="/" class="hover:underline">Accueil</a>
      </div>
      <div class="flex space-x-4">
        <button class="font-bold text-blue-800 border-b-4 border-blue-800 pb-2">
          Menu
        </button>
        <button class="font-semibold text-gray-600 pb-2 hover:text-blue-800">
          Favoris
        </button>
      </div>
    </div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12">
  {#each menuCategories as category}
    <MenuCard name={category.name} imageUrl={category.imageUrl} />
  {/each}
</div>

  </main>

  <Footer />
</div>