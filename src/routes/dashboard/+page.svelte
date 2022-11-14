<script lang="ts">
  import axios from "axios";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { ContentContainers } from "../../stores/contentContainersStore"
  import Header from "../../components/Header.svelte";
  import ContentContainer from "../../components/ContentContainer.svelte";
  onMount(() => {
    if (browser) {
      if (!localStorage.getItem("token")) {
        window.location.href = "/auth";
      }
    }
  });

  const url = "http://localhost:5000/container/";

  let containerName = "";
  let addingContainer = false;
  let error = false;

  function addContainer() {
    addingContainer = true
    if (containerName == "") {
      error=true
      addingContainer = false
      return;
    }
    let params = {name: containerName}
    axios.post(
      url+"create",
      params,
      {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    ).then((res)=>{
      error = false
      const { data } = res.data
      ContentContainers.update((containers)=>[
        ...containers,
        data
      ])
      addingContainer = false
      containerName = ""
    }).catch((_err)=>{
      error = true
      addingContainer = false
    })
  }

  async function getContainers(){
    if (browser) {
      await axios.get(
        `${url}all`,
        {
          headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      ).then((res)=>{
        const { data } = res.data
        ContentContainers.set([...data])
      }).catch((err)=>{
        console.log(err.response)
      })
    }
  }
  let fetchresult = getContainers()
</script>


<svelte:head>
	<title>YOOT | Dashboard</title>
</svelte:head>
<Header />
<div class=" h-screen ">
  <!-- Toolbar -->
  <div class=" flex space-x-4 justify-between items-baseline z-10 backdrop-blur-md   p-3 sticky top-24 shadow-sm shadow-white ">
    <h1 class=" text-white text-3xl underline ">My content containers</h1>
    <div class=" flex justify-between gap-3">
      <input
        bind:value={containerName}
        type="text"
        placeholder="New container"
        class={` text-white rounded-md p-2 focus:outline-none bg-transparent ${error?"border-red-500":"border-white"} border caret-white  `}
      />
      <button
        on:click={addContainer}
        class=" bg-white w-12 flex justify-center items-center rounded-md hover:scale-105 hover:-translate-y-1 transition-all"
      >
        {#if addingContainer}
          <p class=" animate-bounce font-extrabold text-slate-600">.</p>
        {:else}
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
        {/if}
      </button>
    </div>
  </div>

  <!-- Content Containers list  -->
  <div
    class=" text-white flex flex-wrap gap-12 h-screen p-3 justify-center mt-24 bg"
  >
  {#await fetchresult}
    <div class=" flex justify-center items-center " >
      <h1 class=" animate-pulse text-3xl "> Loading containers </h1>
    </div>
    {:then result} 
      {#each $ContentContainers as container}
        <ContentContainer name={container.name} entities={3} resources={54} />
      {/each}
    {/await}
  </div>
</div>

<style>
  .bg {
    background-image: url("ooorganize.svg");
  }
</style>
