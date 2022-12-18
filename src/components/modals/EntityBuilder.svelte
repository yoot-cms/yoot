<script lang="ts">
  import { entityBuilderIsVisible } from "../../stores/stores";
  import Field from "../Field.svelte";

  function addField(){
    
  }  
</script>

<main hidden={!$entityBuilderIsVisible} class=" w-[50%] h-[55%] z-20 bg-gray-300 rounded-md shadow-2xl shadow-indigo-300 p-2 ">
  <div class=" flex justify-between " >
    <div class=" flex gap-1" >
      <h1 class="" >Entity builder</h1>
      <button >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg> 
      </button> 
    </div>
      <button on:click={()=>{ entityBuilderIsVisible.update(_value=>false) }} class=" hover:-translate-y-1 duration-200 " >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>                      
      </button>
  </div>
  <div class=" flex justify-center" >
    <input type="text" placeholder="Entity name" class=" p-2 rounded-md text-center focus:outline-none text-gray-400">
  </div>
  <form class=" flex justify-center gap-5 my-5" >
    <input type="text" required placeholder="Field name" class=" p-2 rounded-md focus:outline-none text-center text-gray-400" >
    <select type="text" required class=" p-2 rounded-md focus:outline-none text-center text-gray-400 w-48 " >
      <option selected >Field type</option>
      <option value="Text">Text</option>
      <option value="Text">Number</option>
      <option value="Text">Image</option>
      <option value="Text">List</option>
      <option value="Text">Markdown</option>
    </select>  
    <button type="submit" class=" bg-white rounded-md p-2 text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
      </svg>      
    </button>
  </form>
  <!-- Fields are listed here -->
  <div class=" space-y-2 p-2 m-auto w-[70%] h-64 border-[3.5px] border-dashed border-slate-400 rounded-md overflow-y-scroll" >
    <Field/>    
    <Field/>    
    <Field/>  
    <Field/>    
    <Field/>    
    <Field/>    
    <Field/> 
    <Field/>
  </div>

  <button class="m-auto mt-4 flex bg-gray-600 rounded-md p-2 text-white " >
    Create entity 
  </button>
  
</main>


<style >
  main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
