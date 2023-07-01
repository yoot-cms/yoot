<script lang="ts">
    import Plus from "$lib/components/Plus.svelte";
import { breadcrumb_items, location, show_create_entity } from "$lib/stores";
	import type { PageServerData } from "./$types";
    location.set("/console/projects")
    export let data : PageServerData
    breadcrumb_items.set([{ title:"Projects", path:"/console/projects" }, { title:data.name, path:`/console/projects/${data.name}` }])
</script>

{#if !$show_create_entity}
   <div  class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50">
    <div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
        <h1 class="font-bold text-md mb-3">Create your entity</h1>
        <div class=" flex flex-col gap-5 ">
            <div class=" flex flex-col gap-2">
                <h1>Entity name</h1>
                <input type="text" class=" p-3 rounded-md border border-blue-300 focus:outline-none">
            </div>
            <form class="w-full flex flex-col gap-2">
                <div class="w-full flex justify-between">
                    <h1>Property</h1>
                    <button class=" text-blue-700 ">
                        <Plus/>
                    </button>
                </div>
                <div class=" flex gap-5 w-full">
                    <input type="text" class=" w-full p-2 rounded-md border border-blue-400 focus:outline-none">
                    <select class="bg-white w-full p-2 rounded-md border border-blue-400 focus:outline-none">
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="boolean">Boolean</option>
                        <option value="image">Image</option>
                    </select>
                </div>
                <div class="w-full h-64 overflow-y-scroll">
                    <div class="gap-5 w-full flex justify-between">
                        <div class="p-2 w-full">
                            <h1>Name</h1>
                        </div>
                        <div class="p-2 w-full">
                            <h1>Type</h1>
                        </div>
                    </div>
                </div>
                <button class=" p-2 w-full flex justify-center bg-blue-700 rounded-md text-white">
                    <h1>Create entity</h1>
                </button>
            </form>
        </div>
    </div>
   </div> 
{/if}

<div class="w-full h-full bg-neutral-100 flex justify-center">
    {#if data.entities.length === 0}
		<div class=" h-full w-full flex justify-center items-center">
			<button
				on:click={() => {
					show_create_entity.set(true);
				}}
				class=" group transition-all flex flex-col gap-3 items-center justify-center border-2 border-neutral-300 hover:border-neutral-500 border-dashed w-64 h-64 rounded-lg"
			>
				<h1 class=" group-hover:text-neutral-500 text-center text-neutral-400">Create an entity</h1>
			</button>
		</div>
    {:else}
        <h1>You got some</h1>
    {/if}
</div>
