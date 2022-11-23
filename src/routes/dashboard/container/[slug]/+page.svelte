<script lang="ts">
  import axios from "axios";
  import type { PageData } from "./$types";
  import LoaderPlaceholder from "../../../../components/LoaderPlaceholder.svelte";
  import EntityBuilder from "../../../../components/modals/EntityBuilder.svelte";
  import { apiUrl } from "../../../../config";
  import { browser } from "$app/environment";
  import { modal2State } from "../../../../stores/stores"

  export let data: PageData;
  const { slug } = data;
  let error = false;
  let loading = true;

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
          return data;
        })
        .catch((err) => {
          console.log(err);
          error = true;
        });
    }
  }

  let fetchresult = loadEntities();
</script>

<EntityBuilder/>
<main class="  flex flex-col  p-2">
  <!-- Toobar -->
  <div class=" flex justify-between items-center  mb-1">
    <div class=" flex gap-1">
      <a href="/dashboard" class="font-bold">CONTENT CONTAINERS </a>
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
      <a href={`/dashboard/${slug}`} class="font-bold">{slug}</a>
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
    </div>
    <button on:click={() => { $modal2State=false }} class=" hover:scale-100 hover:-translate-y-1 transition-all bg-blue-500 p-1 rounded-md text-white ">
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
    class=" flex p-2 gap-5 flex-wrap justify-center h-[750px] border-t border-b border-dashed border-slate-600  overflow-y-scroll"
  />
</main>
