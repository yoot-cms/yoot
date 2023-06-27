<script lang="ts">
	import Search from '$lib/components/Search.svelte';
	import Plus from '$lib/components/Plus.svelte';
    import type { PageServerData } from './$types';
    export let data : PageServerData
</script>

<div class=" w-full h-[100%] border-2 border-dashed rounded-md flex flex-col p-2 gap-2">
	<div class="p-2 h-[5%] flex items-center justify-between">
		<div class="flex gap-1">
			<a href="/console/projects" class=" text-blue-500 underline">
				<h1>Projects</h1>
			</a>
            {">"}
			<a href={`/console/projects/${data.name}`} class=" text-blue-500 underline">
				<h1>{data.name}</h1>
			</a>
		</div>
		<div class="flex gap-2 items-center">
			<div class="flex bg-neutral-100 rounded-md items-center p-2 gap-2 text-gray-700">
				<Search />
				<input
					type="text"
					class="focus:outline-none bg-transparent"
					placeholder="Search in entities"
				/>
			</div>
			<button class=" rounded-md bg-blue-700 p-2 text-white">
				<h1>New Entity</h1>
			</button>
		</div>
	</div>
	<hr />
	<div class=" p-2 flex flex-wrap gap-5">
		<button
			class="hover:text-neutral-700 flex flex-col text-neutral-400 justify-center text-center items-center w-72 h-52 rounded-md border-2 p-2"
		>
			<Plus />
			<h1>Create new entity</h1>
		</button>
	</div>
</div>
