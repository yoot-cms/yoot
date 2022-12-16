<script lang="ts">
  const list = [
    {
      name: "Profile",
      type: "Text",
    },
    {
      name: "Profile picture",
      type: "Media",
    },
    {
      name: "Profile picture",
      type: "Media",
    },
    {
      name: "Profile picture",
      type: "Media",
    },
    {
      name: "Profile picture",
      type: "Media",
    },
    {
      name: "Profile picture",
      type: "Media",
    },
    {
      name: "Profile picture",
      type: "Media",
    },
  ];

  $: toggleFields = false;
</script>

<div
  class=" bg-grayscale-400 p-3 rounded-md text-white cursor-pointer flex justify-between h-12"
>
  <div>
    <h1>Entity name</h1>
  </div>

  <div class="relative flex flex-col items-center">
    <button
      on:click={() => {
        toggleFields = !toggleFields;
      }}
      class=" flex items-center"
    >
      <h1 class="">Fields</h1>
      {#if toggleFields}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd"
          />
        </svg>
      {/if}
    </button>
    <!-- Fields -->
    <div
      class={` ${
        toggleFields ? "" : "hidden"
      } rounded-md p-2  bg-slate-400 w-64 cursor-default z-10`}
    >
      {#each list as item}
        <div class=" flex justify-between gap-2 border-b-[1px] ">
          <div class=" w-[50%] overflow-hidden truncate text-center ">
            <h1>{item.name.slice(0, 9)}{item.name.length > 10 ? "..." : ""}</h1>
          </div>
          <div class="">
            <h1>:</h1>
          </div>
          <div class=" w-[50%] text-center ">
            <h1>{item.type}</h1>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div>
    <h1>15 total ressources</h1>
  </div>
</div>
