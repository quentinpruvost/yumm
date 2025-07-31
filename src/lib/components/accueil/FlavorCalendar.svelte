<script lang="ts">
  import FlavorDayCard from './FlavorDayCard.svelte';
  import Icon from '@iconify/svelte';

  // Type pour définir la structure de nos données de parfum
  type Flavor = {
    date: string;
    dayOfWeek: string;
    flavorName: string;
    imageUrl: string;
    soups: string[];
  };

  // --- 1. GESTION DE L'ÉTAT ---
  // 'upcoming', 'currentMonth', 'nextMonth'
  let activeTab: 'upcoming' | 'currentMonth' | 'nextMonth' = 'upcoming';

  // --- 2. DONNÉES SIMULÉES ---
  // Données pour "Prochaines Saveurs"
  const upcomingFlavors: Flavor[] = [
    {
      date: '30 JUILLET', dayOfWeek: 'MERCREDI', flavorName: 'Cookie à la Menthe',
      imageUrl: '/images/mintcookie.jpg', soups: ["Chili de George®", "Chili Suprême de George®"]
    },
    {
      date: '31 JUILLET', dayOfWeek: 'JEUDI', flavorName: 'Sauce au Caramel',
      imageUrl: '/images/caramel.jpg', soups: ["Chili de George®", "Chili Suprême de George®"]
    },
  ];

  // Données pour "Mois Complet" (Juillet)
  const currentMonthFlavors: Flavor[] = [
    {
      date: '30 JUILLET', dayOfWeek: 'MERCREDI', flavorName: 'Cookie à la Menthe',
      imageUrl: '/images/mintcookie.jpg', soups: ["Chili de George®", "Chili Suprême de George®"]
    },
    {
      date: '31 JUILLET', dayOfWeek: 'JEUDI', flavorName: 'Sauce au Caramel',
      imageUrl: '/images/caramel.jpg', soups: ["Chili de George®", "Chili Suprême de George®"]
    },
  ];

  // Données pour "Mois Prochain" (Août)
  const nextMonthFlavors: Flavor[] = [
    {
      date: '01 AOÛT', dayOfWeek: 'VENDREDI', flavorName: 'Menthe et Chocolat',
      imageUrl: '/images/mintchoco.jpg', soups: ["Chili de George®", "Chili Suprême de George®"]
    },
    {
      date: '02 AOÛT', dayOfWeek: 'SAMEDI', flavorName: 'Volcan au Chocolat',
      imageUrl: '/images/caramel.jpg', // Remplacez par une image de volcan choco
      soups: ["Chili de George®"]
    },
    {
      date: '03 AOÛT', dayOfWeek: 'DIMANCHE', flavorName: 'Cheesecake à la Framboise',
      imageUrl: '/images/mintcookie.jpg', // Remplacez par une image de framboise
      soups: ["Chili Suprême de George®"]
    },
  ];
</script>

<section class="py-16 bg-white">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center text-blue-900 mb-8 uppercase">Calendrier du restaurant</h2>
    
    <div class="border-b border-gray-300 mb-4">
      <nav class="flex space-x-1">
        <button 
          on:click={() => activeTab = 'upcoming'}
          class="px-4 py-2 font-semibold transition-colors duration-200"
          class:text-white={activeTab === 'upcoming'}
          class:bg-blue-800={activeTab === 'upcoming'}
          class:text-gray-600={activeTab !== 'upcoming'}
          class:hover:text-blue-700={activeTab !== 'upcoming'}
        >
          Prochaines Saveurs
        </button>
        <button 
          on:click={() => activeTab = 'currentMonth'}
          class="px-4 py-2 font-semibold transition-colors duration-200"
          class:text-white={activeTab === 'currentMonth'}
          class:bg-blue-800={activeTab === 'currentMonth'}
          class:text-gray-600={activeTab !== 'currentMonth'}
          class:hover:text-blue-700={activeTab !== 'currentMonth'}
        >
          Voir le mois complet
        </button>
        <button 
          on:click={() => activeTab = 'nextMonth'}
          class="px-4 py-2 font-semibold transition-colors duration-200"
          class:text-white={activeTab === 'nextMonth'}
          class:bg-blue-800={activeTab === 'nextMonth'}
          class:text-gray-600={activeTab !== 'nextMonth'}
          class:hover:text-blue-700={activeTab !== 'nextMonth'}
        >
          Voir le mois prochain
        </button>
      </nav>
    </div>

    <div>
      {#if activeTab === 'upcoming'}
        <div class="bg-blue-800 text-white p-6 rounded-t-lg">
          <FlavorDayCard data={upcomingFlavors[0]} isFeatured={true} />
        </div>
        {#each upcomingFlavors.slice(1) as flavor}
          <div class="bg-white shadow-lg rounded-b-lg overflow-hidden">
             <FlavorDayCard data={flavor} />
          </div>
        {/each}

      {:else if activeTab === 'currentMonth'}
        <div class="bg-blue-800 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 class="font-bold">JUILLET 2025</h3>
            </div>
        <div class="bg-white shadow-lg rounded-b-lg overflow-hidden">
          {#each currentMonthFlavors as flavor}
            <FlavorDayCard data={flavor} />
          {/each}
        </div>

      {:else if activeTab === 'nextMonth'}
         <div class="bg-blue-800 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 class="font-bold">AOÛT 2025</h3>
        </div>
        <div class="bg-white shadow-lg rounded-b-lg overflow-hidden">
          {#each nextMonthFlavors as flavor}
            <FlavorDayCard data={flavor} />
          {/each}
        </div>
      {/if}
    </div>

  </div>
</section>