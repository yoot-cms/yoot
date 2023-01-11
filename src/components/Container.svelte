<script lang="ts" >
    let show_actions = true

    function delete_container(){

    }
</script>

<main class="container">
  <div class="w-full space-y-2 pl-2 pt-2">
    <h1 class=" font-semibold text-xl ">Container name</h1>
    <h1 class=" font-light" >Entities: 15</h1>
    <h1 class=" font-light" >Ressources: 120</h1>
    <h1 class=" font-light" >Created: 120 days ago</h1>
  </div>
  <div class=" flex flex-col items-center relative pt-2 pr-2 ">
    <button  class="z-50" on:click={()=>{ show_actions=!show_actions }} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
    <button on:click={()=>{ alert("bruh") }} class={` hover:scale-110 text-red-500 absolute opacity-0 transition-all ${show_actions?" opacity-100 translate-y-[35px] ease-in-out duration-300":"  "} `}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <button on:click={()=>{ alert("bruh") }} class={` hover:scale-110 text-blue-500 absolute opacity-0 transition-all ${show_actions?" opacity-100 translate-y-[70px] ease-in-out duration-300":"  "} `}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5"
      >
        <path
          d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"
        />
      </svg>
    </button>
    <button on:click={()=>{ alert("bruh") }} class={` hover:scale-110 text-green-500 absolute opacity-0 transition-all ${show_actions?" opacity-100 translate-y-[105px] ease-in-out duration-300":"  "} `}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</main>

<style>
  .container {
    @apply p-1  border-2 h-[10rem] w-full rounded-2xl flex justify-between cursor-pointer;
  }
  .icon{
    @apply absolute opacity-0
  }
</style>
