<script lang="ts">
  import type { fetchContainerResponse } from "../../types";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { clip_string } from "../../Functions";
  import { containers_store, user_store } from "../../stores";
  import Container from "../../components/Container.svelte";
  import axios from "axios";
  import { onMount } from "svelte";

  onMount(() => {
    if (browser) {
      if (!localStorage.getItem("token")) {
        goto("/auth");
      }
    }
  });

  let loading = true;
  let error = false;
  let container_name = "";

  async function load_containers() {
    const result = await axios
      .get("http://localhost:8000/container/get_all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        loading = false;
        const response = res.data as fetchContainerResponse;
        const containers = response.data;
        containers_store.set(containers);
        return true;
      })
      .catch((err) => {
        loading = false;
        switch (err.response.status) {
          case 401:
            goto("/auth");
            break;
        }
        return false;
      });
    return result;
  }

  if(browser){
    load_containers();
  }

  async function create_container() {
    try {
      loading = true;
      axios
        .post(
          "http://localhost:8000/container/create",
          {
            name: container_name,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          load_containers()
          container_name = ""
          console.log(res.data);
        })
        .catch((err) => {
          switch (err.response.data.status) {
            case 401:
              goto("/auth");
              break;
            case 500:
              alert("Something went terribly wrong. Please try again");
              break;
            default:
              break;
          }
        });
      loading = false;
    } catch (_) {
      error = true
    }
  }
</script>

<svelte:head>
  <title>YOOT | Containers</title>
</svelte:head>

<div class=" h-full p-4 ">
  <!-- Main container -->
  <main class=" flex flex-col bg-white h-full  md:px-16 lg:px-[16rem]">
    <!-- Form to add a new container -->
    <form
      on:submit|preventDefault={create_container}
      class=" flex justify-between w-full mb-5 "
    >
      <input
        bind:value={container_name}
        required
        type="text"
        class=" pl-2 h-[2.5rem] w-[85%] rounded-md border-2 p-1  focus:outline-gray-600"
        placeholder="Container name"
        name=""
        id=""
      />
      <button
        type="submit"
        class={`hover:border-gray-700 text-gray-700 flex rounded-md w-[13%] lg:w-[10%] border-2 justify-center items-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
          />
        </svg>
      </button>
    </form>

    <div
      class=" overflow-y-scroll relative no_scroll space-y-3 md:space-y-0 h-full md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:place-content-start "
    >
      {#if !loading}
        {#if $containers_store.length===0}
          <div class="w-full h-full flex flex-col absolute items-center justify-center" >
            <h1>You don't have any container yet</h1>
          </div>
        {:else}
          {#each $containers_store as container}
            <Container name={container.name} created_at={container.created_at} />
          {/each}
        {/if}
      {/if}
      {#if loading}
        <div
          class="w-full h-full flex flex-col absolute items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 animate-spin"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>
      {/if}
    </div>
  </main>
</div>
