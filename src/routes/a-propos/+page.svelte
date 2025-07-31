<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>À Propos - Yummy's</title>
</svelte:head>

<div>
  <Header />

  <main>
    <section class="text-center py-12 bg-gray-50">
      <div class="container mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold text-blue-800 uppercase">
          À propos de Yummy's
        </h1>
        <p class="mt-2 text-lg text-gray-600">
          Salutations de Saint-Nazaire, France
        </p>
      </div>
    </section>

    <section>
      <img 
        src="/images/mascot.jpg" 
        alt="Glace Yummy's" 
        class="w-full h-96 object-cover"
      >
    </section>

    <section class="container mx-auto px-4 text-center py-16">
      <h2 class="text-3xl font-bold text-blue-900 uppercase">
        Notre Mission
      </h2>
      <p class="mt-4 text-xl font-semibold text-blue-700 max-w-4xl mx-auto">
        Nous créons de la gourmandise avec passion, pour que chaque visite chez Yummy's soit un moment de pur plaisir.
      </p>
      <div class="mt-6 text-gray-700 space-y-4 max-w-3xl mx-auto text-left sm:text-center">
        <p>
          Qu'il s'agisse de composer le cornet parfait avec vos parfums favoris ou de turbiner la dernière création de notre "Parfum du Jour", notre unique but est de vous voir repartir avec un grand sourire.
        </p>
        <p>
          Notre histoire est celle d'un amour pour la glace artisanale, ancrée ici à Saint-Nazaire. Nous croyons qu'une bonne glace peut illuminer une journée. C'est pourquoi nous sélectionnons les meilleurs ingrédients, si possible locaux, pour vous offrir un moment de bonheur et de fraîcheur. Si nous pouvons rendre votre journée un peu plus douce, alors notre mission est accomplie.
        </p>
      </div>
    </section>

    <section class="container mx-auto px-4 pb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img 
          src="/images/caramel.jpg" 
          alt="Préparation d'une glace" 
          class="w-full h-80 object-cover rounded-lg"
        >
        <img 
          src="/images/mintchoco.jpg" 
          alt="Cornet de glace Yummy's" 
          class="w-full h-80 object-cover rounded-lg"
        >
      </div>
    </section>

  </main>

  <Footer />
</div>