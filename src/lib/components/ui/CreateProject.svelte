<script lang="ts">
	import { show_create_project } from '$lib/stores';
</script>

{#if $show_create_project}
	<div class=" absolute h-screen w-full flex flex-col items-center justify-center">
		<div class=" flex flex-col justify-between rounded-md h-64 w-[30%] bg-neutral-400 p-2">
			<h1 class="text-white font-bold text-lg">Enter your project name</h1>
			<input
				class=" text-neutral-500 rounded-md p-3 w-[100%] focus:outline-none"
				type="text"
				placeholder="Project name"
			/>
			<div class="flex justify-end gap-5 text-white">
				<button on:click={()=>{ show_create_project.set(false) }}  class=" rounded-md w-32 bg-red-500 font-bold hover:bg-red-600 p-2">
					<h1>Cancel</h1>
				</button>
				<button class=" rounded-md w-32 bg-blue-500 font-bold hover:bg-blue-600 p-2">
					<h1>Create</h1>
				</button>
			</div>
		</div>
	</div>
{/if}
