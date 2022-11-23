<script lang="ts" >
    import { modal2State } from "../../stores/stores"
    import axios from "axios"
    import { apiUrl} from "../../config"

    let addingEntity = false
    let containerName = ""
    let error = false

    function addEntity() {
     
    }
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={`${$modal2State?"hidden":""} flex flex-col items-center justify-center text-2xl  h-screen w-full  z-10 top-0 left-0 absolute `} >
  <!-- EntityBuilder   -->
  <div class=" w-4/6 h-3/5 rounded-md p-2 bg-blue-500 space-y-5 flex flex-col shadow-xl shadow-blue-600" >
        <div class=" flex justify-between text-white">
            <div class=" flex">
              <h1>Entity Builder</h1>
              
            </div>
            <button on:click={()=>{ $modal2State=true }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                </svg> 
            </button>             
        </div>
        <div class=" " >
          <input type="text" name="" id="" placeholder="Entity name" class=" text-slate-600 p-1  w-64 caret-slate-600 text-center rounded-md focus:outline-none">
        </div>
        <!-- Fields builder -->
        <div class=" flex justify-between items-center" >
          <div>
            <input class=" focus:outline-none text-center w-64 p-1 rounded-md text-slate-600" placeholder="Field" type="text" name="" id="">
          </div>
          <div >
            <select name="" id="" class=" text-center w-64 focus:outline-none p-1 rounded-md text-slate-600" >
              <option value="Text">Text</option>
              <option value="Array">Array</option>
            </select>
          </div>
          <button class=" h-9 text-blue-500 bg-white rounded-md px-2" >
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
        <div class=" h-96 overflow-y-scroll border rounded-md" >

        </div>
       <div class=" flex justify-center ">
         <button on:click={addEntity} class=" hover:scale-105 hover:-translate-y-1 transition-all text-center rounded-md bg-white text-blue-500 " >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class={`w-10 h-10 ${addingEntity?"animate-spin":""}`}>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clip-rule="evenodd" />
            </svg>              
         </button>
       </div>
    </div>
</div>