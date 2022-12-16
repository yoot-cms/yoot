<script lang="ts" >
  import { browser } from "$app/environment";
  import { location } from "../../../stores/stores";
  if (browser) {
    location.update(_value=>window.location.pathname);
  }
  import Entity from "../../../components/Entity.svelte";
</script>

<svelte:head>
    <title>YOOT | Entities</title>
</svelte:head>

<main class=" h-full flex justify-between" >
  <!-- Entities list -->
  <section class=" h-full w-[55%] flex flex-col " >
    
    <!-- Title and button section -->
    <div class=" flex justify-between items-center h-[5%]" >
      <h1>You are viewing Entities in <span class=" font-bold" >Container</span> </h1>
      <button class=" px-2 flex border  rounded-md p-1 bg-indigo-500 text-white " >
        <h1>Add Entity</h1>
      </button>
    </div>

    <!-- Actual list -->
    <div class={` p-3 h-[95%] overflow-y-scroll border-[3px] border-dashed border-slate-400 rounded-md w-full ${ true?" flex flex-col gap-5 ":"flex flex-col justify-center items-center"}`} >
      <!-- <h1>Seems like you don't have any entities yet</h1>
      <button class="px-2 flex border  rounded-md p-1 bg-indigo-500 text-white " >
        <h1>What about creating one?</h1>
      </button> -->
      <Entity/>
      <Entity/>
      <Entity/>
      <Entity/>
      <Entity/>
    </div>
  </section>

  <!-- Toolbar -->
  <section class=" h-full flex flex-col w-[30%]" >
    <!-- Search bar -->
    <div class=" flex justify-end items-center h-[5%]" >
    </div>

    <!-- Toolbar utilities -->
    <div class=" h-[95%] border-[3px] border-dashed rounded-md border-slate-400" >      
    </div>
  </section>
</main>