<script lang="ts">
  import { browser } from "$app/environment";
  import { location } from "../../stores/stores";
  import Container from "../../components/Container.svelte";
  if (browser) {
    location.update((_value)=>window.location.pathname);
  }
  
</script>

<svelte:head>
  <title>YOOT | Containers</title>
</svelte:head>

<main class=" h-full " >
  <!-- Toolbar -->
  <div class=" h-[5%] flex justify-between items-center" >
    <h1>You are viewing your containers</h1>
    <button class=" flex border-slate-400 border  rounded-md p-1 bg-indigo-500 text-white " >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>      
    </button>
  </div>
  <!-- Containers -->
  <section class={`border-[3px] border-spacing-10 border-dashed border-slate-400 rounded-md h-[95%] w-full ${false?'grid grid-cols-5':'flex '} p-2 gap-5 overflow-y-scroll`} >
    <div class={`${true?"":"hidden"} flex flex-col h-full w-full items-center justify-center`} >
      <h1>You don't have any content container</h1> 
      <button class=" flex border-slate-400 border  rounded-md p-1 bg-indigo-500 text-white " >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>      
      </button>
    </div>
  </section>
</main>