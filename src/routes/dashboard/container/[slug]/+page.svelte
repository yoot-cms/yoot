<script lang="ts">
  import axios from "axios";
  import type { PageData } from "./$types";
  import EntityBuilder from "../../../../components/modals/EntityBuilder.svelte";
  import { apiUrl } from "../../../../config";
  import { browser } from "$app/environment";
  import { modal2State } from "../../../../stores/stores";
  import Entity from "../../../../components/Entity.svelte";

  export let data: PageData;
  const { slug } = data;
  let error = false;
  let entities: { name: string; container: string; ressources: number }[] = [];
  async function loadEntities() {
    if (browser) {
      axios
        .get(apiUrl + `entity/all?container=${slug}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          const { data } = res.data;
          entities = data;
          return data;
        })
        .catch((err) => {
          console.log(err);
          error = true;
        });
    }
  }

  let _ = loadEntities();
</script>

<svelte:head>
  <title>YOOT | Dashboard | Containers : {slug}</title>
</svelte:head>

<EntityBuilder container={slug} />
<main class="  flex flex-col  p-2">
  <!-- Toobar -->
  <div class=" flex justify-between items-center  mb-1">
    <div class=" flex gap-1">
      <a href="/dashboard" class="font-bold underline text-blue-400"
        >CONTENT CONTAINERS
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 cursor-pointer"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
          clip-rule="evenodd"
        />
      </svg>
      <span class=" font-extrabold">></span>
      <a
        href={`/dashboard/container/${slug}`}
        class="font-bold underline text-blue-400">{slug}</a
      >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <svg
        on:click={() => {
          alert(
            ` You are now inside a container. Here you will find the list of all the entities created under this container. `
          );
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 cursor-pointer"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <button
      on:click={() => {
        $modal2State = false;
      }}
      class=" hover:scale-100 hover:-translate-y-1 transition-all bg-blue-500 p-1 rounded-md text-white "
    >
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
  <!-- Containers -->
  <div
    class=" flex p-2 gap-5 flex-wrap justify-center h-[750px] border-t border-b border-dashed border-slate-600  "
  >
    <div class=" flex flex-col w-full">
      <div class=" flex justify-center items-center gap-2">
        <h1 class=" text-center font-extrabold text-xl">ENTITIES</h1>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <svg
          on:click={() => {
            alert(
              ` Entities are schemas that describes a specific ressource. They are also blocks that contains these ressources. `
            );
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5 cursor-pointer"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="  w-4/5  m-auto  flex flex-col">
        <div class="border-b flex  justify-between ">
          <div class=" w-1/4 text-center text-xl pl-7 font-bold overflow-clip">
            Name
          </div>
          <div class=" w-1/4 text-center text-xl font-bold overflow-clip">
            Ressources
          </div>
          <div class=" w-1/4 text-center text-xl pr-8 font-bold overflow-clip">
            _
          </div>
          <div class=" w-1/4 text-center text-xl pr-14 font-bold overflow-clip">
            Actions
          </div>
        </div>
        <div class=" h-[500px]  px-2 overflow-y-scroll">
          {#await _}
            <div class=" flex justify-center items-center h-full">
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
          {:then res}
            {#each entities as entity}
              <Entity ressources={0} name={entity.name} container={"_"} />
            {/each}
          {/await}
        </div>
      </div>
    </div>
  </div>
</main>
