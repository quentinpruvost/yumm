<script lang="ts">
  export let name: string;
  export let imageUrl: string;
  export let link: string = '#';
</script>

<a href={link} class="group text-center">
  <div class="flex justify-center items-center">
    <img 
      src={imageUrl} 
      alt={name} 
      class="h-48 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
    >
  </div>
  <h3 class="mt-4 text-xl font-bold text-blue-800 uppercase group-hover:underline">
    {name}
  </h3>
</a>