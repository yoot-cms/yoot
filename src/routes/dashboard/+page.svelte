<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  import Header from "../../components/Header.svelte";
  import ContentContainer from "../../components/ContentContainer.svelte";

  onMount(() => {
    if (browser) {
      if (!localStorage.getItem("token")) {
        window.location.href = "/auth";
      }
    }
  });

  const containers = [
    {
      name: "uh",
    },
    {
      name: "uh",
    },
    {
      name: "uh",
    },
    {
      name: "uh",
    },
    {
      name: "uh",
    },
    {
      name: "uh",
    },
    {
      name: "uh",
    },
    {
      name: "uh",
    },
    {
      name: "uh",
    },
  ];
</script>

<Header />
<div class=" p-4 bg h-screen" >
  <div class=" flex space-x-4 justify-between items-baseline my-3">
    <h1 class=" text-white text-2xl underline ">My content containers</h1>
    <div class=" flex justify-between gap-3">
      <input type="text" placeholder="New container" class=" rounded-md p-2 focus:outline-none bg-transparent border-white border caret-white" />
      <button class=" bg-white w-10 flex justify-center items-center rounded-md hover:scale-105 hover:-translate-y-1 transition-all">
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
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  </div>
  
  <div class=" text-white flex flex-wrap gap-12 ">
    <!-- Content Containers list  -->
    {#each containers as container}
      <ContentContainer name={container.name} />
    {/each}
  </div>

  
</div>

<style>
  .bg{
    background-image: url('ooorganize.svg');
  }
</style>