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
    <h1>You are viewing your Containers</h1>
    <form class=" flex  " >
      <input type="text" placeholder="Container name" class="rounded-md border-2 focus:outline-none text-gray-400" required >
      <button class=" px-2 flex border rounded-md p-1 bg-indigo-500 text-white " type="submit" >
        <h1>Add container</h1>     
      </button>
    </form>
  </div>
  <!-- Containers -->
  <section class={`border-[3px] border-spacing-10 border-dashed border-slate-400 rounded-md h-[95%] w-full ${false?'grid grid-cols-5':'flex '} p-2 gap-5 overflow-y-scroll`} >
    <div class={`${true?"":"hidden"} flex flex-col h-full w-full items-center justify-center`} >
      <h1>You don't have any content container, but creating one is as easy as choosing it's name!</h1>
      <h1>Click <a href="#containers" class=" text-indigo-500">here</a> to learn more about containers </h1>
    </div>
  </section>
</main>