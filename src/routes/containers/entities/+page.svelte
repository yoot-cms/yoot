<script lang="ts" >
  import { browser } from "$app/environment";
  import { location } from "../../../stores/stores";
  import { entityBuilderIsVisible } from "../../../stores/stores";
  if (browser) {
    location.update(_value=>window.location.pathname);
  }
</script>

<svelte:head>
    <title>YOOT | Entities</title>
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
  <div class="h-16 border-2">
    <nav class="flex p-2" aria-label="Breadcrumb">
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
            <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Containers</a>
          </div>
        </li>
    
        <li>
          <div class="flex items-center">
            <!-- Heroicon name: solid/chevron-right -->
            <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">Entities</a>
          </div>
        </li>
      </ol>
    </nav>
  </div>


  <!-- entities div  -->

  <div class="w-full  " >
    <div class="min-h-screen border-2 border-dashed border-slate-200 rounded-xl m-3" >
      <!-- container  -->
      <div class="w-full grid grid-cols-5 p-2" >

        <!-- entities list -->
        <div class="col-span-3 mr-2 p-2 rounded-lg border" >
          <!-- entity cpmnt -->
          <div class="w-full rounded-lg h-14 border border-orange-600 p-2 flex items-center my-1 justify-between" >
            <p>Entity Name (eg. Product)</p>

            <!-- fields dropdon here -->
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="relative inline-block text-left">
              <div>
                <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Fields
                  <!-- Heroicon name: solid/chevron-down -->
                  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              <!--
                Dropdown menu, show/hide based on menu state.
                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Price - Number</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Name - String</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sold out - Boolean</a>
                  <form method="POST" action="#" role="none">
                    <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">FooBar</button>
                  </form>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <!-- entities create form -->
        <div class="col-span-2 p-2 rounded-lg border grid grid-cols-6 gap-2" >
          <!-- entity name input -->
          <input type="text" placeholder="Entity Name" class="col-span-6 rounded-lg border p-2 h-12" />
          
          <!-- fields input -->

          <!-- field name input -->
          <input type="text" placeholder="Field name" class="col-span-3 rounded-lg border p-2 h-10" />
          <!-- field type input (combo box) -->
          <div class="col-span-2" >
            <!-- <label for="type" class="block text-sm font-medium text-gray-700 col-span-2">Type select here</label> -->
            <select id="type" name="location" class="block w-full pl-3 pr-10 py-2 text-base h-10 border-sky-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option selected >Select a type</option>
              <option>Number</option>
              <option>String</option>
              <option>Boolean</option>
            </select>
          </div>
          <!-- <button class=" " ></button> -->
          <button class="col-span-1 border border-sky-600 rounded-lg h-10" >Add</button>
          
          <!-- added fields list -->
          <!-- added field line -->
          <div class="col-span-5 grid grid-cols-5 gap-2 border border-sky-600 rounded-lg h-12" >
            <div class="col-span-3 p-2 " >
              <p>Price</p>
            </div>
            <div class="col-span-2 p-2 " >
              <p>Number</p>
            </div>
          </div>
          <button class="col-span-1 border border-red-600 rounded-lg h-12" >Remove</button>
          <!-- added field line -->
          <div class="col-span-5 grid grid-cols-5 gap-2 border border-sky-600 rounded-lg h-12" >
            <div class="col-span-3 p-2 " >
              <p>Name</p>
            </div>
            <div class="col-span-2 p-2 " >
              <p>String</p>
            </div>
          </div>
          <button class="col-span-1 border border-red-600 rounded-lg h-12" >Remove</button>
          <!-- added field line -->
          <div class="col-span-5 grid grid-cols-5 gap-2 border border-sky-600 rounded-lg h-12" >
            <div class="col-span-3 p-2 " >
              <p>SoldOut</p>
            </div>
            <div class="col-span-2 p-2 " >
              <p>Boolean</p>
            </div>
          </div>
          <button class="col-span-1 border border-red-600 rounded-lg h-12" >Remove</button>
          
          
          <!-- save btn -->
          <button class="col-span-6 border border-sky-600 rounded-lg h-10" >Save</button>
        </div>
      </div>

      

    </div>

  </div>

</div>
