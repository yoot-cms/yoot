<script lang="ts">
  import axios from "axios";
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

  const url = "http://localhost:5000/container/";
  const containers = [
    {
      name: "uh1",
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

  let containerName = "";
  let addingContainer = false;
  let error = false;
  let errorMessage = "";

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
      addingContainer = false
      console.log(res.data)
    }).catch((_err)=>{
      error = true
      addingContainer = false
    })
  }
</script>

<Header />
<div class=" h-screen bg">
  <!-- Toolbar -->
  <div class=" flex space-x-4 justify-between items-baseline my-3 p-3">
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
    class=" text-white flex flex-wrap gap-12 h-4/5 border-t border-b p-3 border-transparent justify-center overflow-y-scroll list"
  >
    {#each containers as container}
      <ContentContainer name={container.name} />
    {/each}
  </div>
</div>

<style>
  .bg {
    background-image: url("ooorganize.svg");
  }

  .list::-webkit-scrollbar{
    @apply w-3 rounded-md;
    border: solid 1px white; 
  }
  .list::-webkit-scrollbar-thumb{
    @apply rounded-md bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100;
  }
</style>
