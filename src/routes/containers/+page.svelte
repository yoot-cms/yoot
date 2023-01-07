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
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <!-- Heroicon name: solid/home -->
            <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span class="sr-only">Home</span>
          </a>
        </div>
      </li>
  
      <li>
        <div class="flex items-center">
          <!-- Heroicon name: solid/chevron-right -->
          <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Projects</a>
        </div>
      </li>
  
      <li>
        <div class="flex items-center">
          <!-- Heroicon name: solid/chevron-right -->
          <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">Project Nero</a>
        </div>
      </li>
    </ol>
  </nav>
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