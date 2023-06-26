<script lang="ts">
	import { show_create_project, creating_project } from '$lib/stores';
    import Loading from '../Loading.svelte';
</script>

{#if $show_create_project}
	<div class=" absolute h-screen w-full flex flex-col items-center justify-center bg-black/40">
		<div class=" flex flex-col justify-between rounded-md h-64 w-[30%] p-2 border border-2 bg-white">
			<h1 class=" text-neutral-500 font-bold ">Enter your project name</h1>
			<input
				class=" border border-3 rounded-md p-3 w-[100%] focus:outline-none"
				type="text"
				placeholder="Project name"
			/>
			<div class="flex justify-end gap-5 text-white">
				<button on:click={()=>{ show_create_project.set(false) }}  class=" rounded-md w-32 bg-red-500 font-bold hover:bg-red-600 p-2">
					<h1>Cancel</h1>
				</button>
				<button class="flex justify-center  rounded-md w-32 bg-blue-500 font-bold hover:bg-blue-600 p-2">
                    {#if $creating_project}
                       <Loading/> 
                    {:else}
                        <h1>Create</h1>
                    {/if}
				</button>
			</div>
		</div>
	</div>
{/if}
