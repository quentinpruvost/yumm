<script lang="ts">
  import Icon from '@iconify/svelte';
  import { onMount, onDestroy } from 'svelte';

  // --- LOGIQUE POUR LE MENU DÉROULANT DESKTOP ---
  let isMenuOpen = false;
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }

  // --- NOUVEAU : LOGIQUE POUR LE MENU MOBILE ---
  let isMobileMenuOpen = false;

  // $: est une déclaration réactive de Svelte. Ce code s'exécute chaque fois que isMobileMenuOpen change.
  // On bloque le défilement de la page quand le menu mobile est ouvert pour une meilleure expérience.
  $: if (typeof document !== 'undefined') {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }

  // Assurons-nous que le style de défilement est réinitialisé si le composant est détruit
  onDestroy(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  });

  let logoText = "Yummy's";
</script>

<header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
  <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <div class="flex-shrink-0">
        <a href="/" class="text-3xl font-extrabold text-blue-800 italic">
          {logoText}
        </a>
      </div>

      <div class="hidden md:flex items-center space-x-2 lg:space-x-4">
        <div class="relative" use:clickOutside on:click_outside={() => isMenuOpen = false}>
            <button on:click={() => isMenuOpen = !isMenuOpen} type="button" class="flex items-center space-x-1 text-blue-800 uppercase font-bold px-3 py-2 rounded-md text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200" aria-haspopup="true" aria-expanded={isMenuOpen}>
                <span>Notre Menu</span>
                <Icon icon="heroicons:chevron-down-20-solid" class="w-5 h-5"/>
            </button>
            {#if isMenuOpen}
                <div class="absolute left-1/2 -translate-x-1/2 mt-3 w-64 rounded-md shadow-lg bg-white z-20">
                    <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                    <div class="relative py-2 px-2 rounded-md">
                        <a href="/menu" class="block px-4 py-2 text-md text-blue-800 hover:bg-blue-50 rounded-md">Voir Tout</a>
                    </div>
                </div>
            {/if}
        </div>
        <a href="/parfum-du-jour" class="text-blue-800 uppercase font-bold px-3 py-2 rounded-md text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200">Parfum du Jour</a>
        <a href="/a-propos" class="text-blue-800 uppercase font-bold px-3 py-2 rounded-md text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200">À Propos</a>
        <a href="/carrieres" class="text-blue-800 uppercase font-bold px-3 py-2 rounded-md text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200">Carrières</a>
        <a href="/commander" class="bg-blue-800 text-white uppercase font-bold px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors duration-200">Commander</a>
      </div>

      <div class="hidden md:flex items-center h-full">
        <a href="/trouver" class="text-blue-800 font-semibold px-4 py-2 rounded-md text-sm border border-blue-800 hover:bg-blue-50 transition-colors duration-200">Trouver un restaurant</a>
        <div class="ml-4 pl-4 border-l border-gray-300 h-10 flex items-center space-x-2">
           <Icon icon="heroicons:user-circle" class="w-8 h-8 text-gray-500"/>
           <div>
             <div class="text-blue-800 font-bold uppercase text-xs">Compte</div>
             <a href="/connexion" class="text-blue-800 text-sm underline">Connexion</a>
           </div>
        </div>
      </div>
      
       <div class="md:hidden">
        <button on:click={() => isMobileMenuOpen = !isMobileMenuOpen} class="text-blue-800 p-2">
          {#if isMobileMenuOpen}
            <Icon icon="heroicons:x-mark-20-solid" class="w-6 h-6"/>
          {:else}
            <Icon icon="heroicons:bars-3-20-solid" class="w-6 h-6"/>
          {/if}
        </button>
      </div>
    </div>
  </nav>

  {#if isMobileMenuOpen}
    <div class="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-200">
      <div class="flex flex-col p-4 space-y-2">
        <a on:click={() => isMobileMenuOpen = false} href="/menu" class="text-gray-700 font-semibold p-3 rounded-md hover:bg-gray-100">Menu</a>
        <a on:click={() => isMobileMenuOpen = false} href="/parfum-du-jour" class="text-gray-700 font-semibold p-3 rounded-md hover:bg-gray-100">Parfum du Jour</a>
        <a on:click={() => isMobileMenuOpen = false} href="/a-propos" class="text-gray-700 font-semibold p-3 rounded-md hover:bg-gray-100">À Propos</a>
        <a on:click={() => isMobileMenuOpen = false} href="/carrieres" class="text-gray-700 font-semibold p-3 rounded-md hover:bg-gray-100">Carrières</a>
        <hr class="my-2"/>
        <a on:click={() => isMobileMenuOpen = false} href="/commander" class="bg-blue-700 text-white text-center font-bold p-3 rounded-md hover:bg-blue-800">Commander</a>
        <a on:click={() => isMobileMenuOpen = false} href="/trouver" class="bg-gray-100 text-center font-semibold p-3 rounded-md hover:bg-gray-200">Trouver un restaurant</a>
      </div>
    </div>
  {/if}
</header>