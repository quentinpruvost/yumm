<script>
  // 1. Importez le composant Icon
  import Icon from '@iconify/svelte';
</script>

<footer class="bg-blue-900 text-white">
  <div class="container mx-auto px-6 py-12">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 class="font-bold mb-4">RESTAURANT</h3>
        <ul>
          <li class="mb-2"><a href="#" class="hover:underline">Guide Nutrition et Allergènes</a></li>
          <li class="mb-2"><a href="#" class="hover:underline">Notre Histoire</a></li>
          <li class="mb-2"><a href="#" class="hover:underline">Cartes Cadeaux</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-4">OPPORTUNITÉS</h3>
        <ul>
          <li class="mb-2"><a href="#" class="hover:underline">Carrières</a></li>
          <li class="mb-2"><a href="#" class="hover:underline">Devenir Franchisé</a></li>
          <li class="mb-2"><a href="#" class="hover:underline">Nos Histoires</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-4">CONTACTEZ-NOUS</h3>
        <ul>
          <li class="mb-2"><a href="#" class="hover:underline">Donner votre avis</a></li>
          <li class="mb-2"><p>Ou appelez le Service Client au <br> 0 800 123 456</p></li>
        </ul>
      </div>
      
      <div>
        <h3 class="font-bold mb-4">NOUS SUIVRE</h3>
        <div class="flex space-x-4">
          <a href="#" aria-label="Facebook" class="hover:opacity-75">
            <Icon icon="simple-icons:facebook" class="w-6 h-6" />
          </a>
          <a href="#" aria-label="Twitter X" class="hover:opacity-75">
            <Icon icon="simple-icons:x" class="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" class="hover:opacity-75">
            <Icon icon="simple-icons:instagram" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
    <div class="mt-12 border-t border-blue-800 pt-6 text-center text-sm text-blue-200">
      <p>&copy; {new Date().getFullYear()} Yummy's Système de Franchise, LLC. Tous droits réservés.</p>
      <p class="mt-2">
        <a href="#" class="hover:underline">Plan du site</a> | 
        <a href="#" class="hover:underline">Mentions Légales</a> | 
        <a href="#" class="hover:underline">Accessibilité</a>
      </p>
    </div>
  </div>
</footer>