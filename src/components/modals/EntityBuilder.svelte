<script lang="ts">
  import { modal2State, EntityFields } from "../../stores/stores";
  import { types } from "../../config"
  import axios from "axios";
  import { apiUrl } from "../../config";
  import Field from "../../components/Field.svelte"

  let addingEntity = false;
  let error = false;
  export let container = ""
  //SECTION - Entity building
    let entityName = ""
    let fieldName = ""
    let fieldType = ""
    function addField(){
      if(fieldName=="" || fieldType=="" ){
        alert("Make sure the field name and type are not empty")
        return
      }
      for (const iterator of $EntityFields) {
        if(iterator.name==fieldName){
          alert("A field with the same name already exists on the entity")
          return
        }
      }
      EntityFields.update((value)=>{
        value.push({ name: fieldName, type: fieldType })
        return value
      })
    }

    function addEntity() {
      if(entityName==""){
        alert("Entity name can't be empty")
        return
      }
      if($EntityFields.length==0){
        alert("Can't create entity with no fields")
        return
      }
      addingEntity = true
      const entity = {
        name: entityName,
        fields: $EntityFields,
        container: container
      }
      axios.post(
        apiUrl+`entity/create`,
        entity,
        {
          headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      ).then((res)=>{
        addingEntity = false
        console.log(res.data)
      }).catch((err)=>{
        addingEntity = false
        console.log(err)
      })
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class={`${
    $modal2State ? "hidden" : ""
  } flex flex-col items-center justify-center text-2xl  h-screen w-full  z-10 top-0 left-0 absolute `}
>
  <!-- EntityBuilder   -->
  <div
    class=" w-4/6 h-3/5 rounded-md p-2 bg-blue-500 space-y-5 flex flex-col shadow-xl shadow-blue-600"
  >
    <div class=" flex justify-between text-white">
      <div class=" flex gap-2">
        <h1>Entity Builder</h1>
        <button>
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
        </button>
      </div>
      <button class=" hover:scale-105 hover:-translate-y-1 transition-all"
        on:click={() => {
          $modal2State = true;
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-7 h-7"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class=" flex justify-center ">
      <input
        bind:value={entityName}
        type="text"
        name=""
        id=""
        placeholder="Entity name"
        class="text-xl text-slate-600 p-1  w-64 caret-slate-600 text-center rounded-md focus:outline-none"
      />
    </div>
    <div class=" flex justify-center text-white ">
      <div class=" flex gap-2 items-center">
        <h1 class=" text-xl text-center ">Describe your Entity down below</h1>
        <button>
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
        </button>
      </div>
    </div>
    <!-- Fields builder -->
    <div class=" flex justify-center gap-36 items-center">
      <div>
        <input
          bind:value={fieldName}
          class=" focus:outline-none text-center w-64 p-1 rounded-md text-slate-600 text-xl"
          placeholder="Field"
          type="text"
          name=""
          id=""
        />
      </div>
      <div>
        <select
          bind:value={fieldType}
          name=""
          id=""
          class=" text-center w-64 focus:outline-none p-1 rounded-md text-slate-600 text-xl"
        >
          {#each types as type}
            <option title={type.description} value={type.name}>{type.name}</option>
          {/each}
        </select>
      </div>
      <div class=" flex justify-center w-64">
        <button on:click={addField} class=" h-9 text-blue-500 bg-white  rounded-md px-2 hover:scale-105 hover:-translate-y-1 transition-all">
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
    </div>
    <div class=" h-96 overflow-y-scroll border rounded-md" >
      {#each $EntityFields as field}
        <Field name={field.name} type={field.type} />
      {/each}
    </div>
    <div class=" flex justify-center ">
      <button
        on:click={addEntity}
        class=" hover:scale-105 hover:-translate-y-1 transition-all text-center rounded-md bg-white text-blue-500 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class={`w-10 h-10 ${addingEntity ? "animate-spin" : ""}`}
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
