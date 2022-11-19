<script lang="ts" >
    import { modal1State } from "../../stores/stores"
    import { ContentContainers } from "../../stores/contentContainersStore"
    import axios from "axios"
    import { devapiUrl} from "../../config"

    let addingContainer = false
    let containerName = ""
    let error = false

    function addContainer() {
    addingContainer = true
    if (containerName == "") {
      error=true
      addingContainer = false
      return;
    }
    let params = {name: containerName}
    axios.post(
      devapiUrl+"container/create",
      params,
      {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    ).then((res)=>{
      error = false
      const { data } = res.data
      ContentContainers.update((containers)=>[
        ...containers,
        data
      ])
      addingContainer = false
      containerName = ""
    }).catch((_err)=>{
      error = true
      addingContainer = false
    })
  }
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={`${$modal1State?"hidden":""} flex flex-col items-center justify-center text-2xl  h-screen w-full text-white z-10 top-0 left-0 absolute `} >
    <div class=" w-96 h-44 rounded-md p-2 bg-blue-500 space-y-5 flex flex-col shadow-xl shadow-blue-600" >
        <div class=" flex justify-center ">
            <button on:click={()=>{ $modal1State=true }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                </svg> 
            </button>             
        </div>
        <input bind:value={containerName} class={` ${error?"border border-red-900":""} rounded-md p-1 text-center focus:outline-none text-slate-600 `} type="text" placeholder="Container name">
       <div class=" flex justify-center ">
         <button on:click={addContainer} class=" text-center rounded-md bg-white text-blue-500 " >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class={`w-10 h-10 ${addingContainer?"animate-spin":""}`}>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clip-rule="evenodd" />
            </svg>              
         </button>
       </div>
    </div>
</div>