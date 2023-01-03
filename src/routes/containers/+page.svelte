<script lang="ts">
  import { browser } from "$app/environment";
  import { location } from "../../stores/stores";
  if (browser) {
    location.update((_value)=>window.location.pathname);
  }
  
</script>

<svelte:head>
  <title>YOOT | Containers</title>
</svelte:head>

<div class="w-full" >
  <!-- navbar -->

  <div class="sticky top-2 bg-white z-50 flex justify-between items-center p-2 m-2 rounded-xl drop-shadow-md" >
    <h1 class="font-medium text-2xl pl-4" >YOOT</h1>
    <ul class="flex items-center" >
      <li class="p-2" >Docs</li>
      <li class="p-2" >Doocs</li>
      <li class="p-2" >Bruh</li>
    </ul>
  </div>

  <!-- bread crumb div down here -->
<div class="h-16 border-2 border-red-500 text-red-500">
  <p>bread crumb here boi</p>
</div>


  <!-- containers div  -->

  <div class="w-full  " >
    <div class="min-h-screen border-2 border-dashed border-slate-200 rounded-xl m-3" >
      <!-- container input -->
      <div class="w-full flex justify-end" >
        <input type="text" placeholder="New container" class="w-96 focus:outline-none rounded-lg h-12 m-2 p-2 border-2 border-sky-700" />
        <button class="rounded-lg border-2 border-sky-700 h-12 w-12 m-2 text-4xl text-sky-700 flex items-center justify-center" >+</button>
      </div>

      <!-- containers -->
      <div class="flex flex-wrap mt-2 p-2 gap-2">

        <!-- container cmpnt-->
        <div class="h-48 w-52 rounded-lg border-2 border-emerald-700 text-center p-8" >
          <p>Name</p>
          <p>69 Entities</p>
          <p>420 Resources</p>
        </div>
        <div class="h-48 w-52 rounded-lg border-2 border-emerald-700 text-center p-8" >
          <p>Name</p>
          <p>69 Entities</p>
          <p>420 Resources</p>
        </div>
        <div class="h-48 w-52 rounded-lg border-2 border-emerald-700 text-center p-8" >
          <p>Name</p>
          <p>69 Entities</p>
          <p>420 Resources</p>
        </div>
        <div class="h-48 w-52 rounded-lg border-2 border-emerald-700 text-center p-8" >
          <p>Name</p>
          <p>69 Entities</p>
          <p>420 Resources</p>
        </div>
      </div>

    </div>

  </div>

</div>