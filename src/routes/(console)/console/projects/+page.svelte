<script lang="ts">
	export let data: PageServerData;
	import { location, show_create_project } from '$lib/stores';
	import type { PageServerData } from './$types';
	import Project from '$lib/components/ui/Project.svelte';
	import Search from '$lib/components/Search.svelte';
	import Plus from '$lib/components/Plus.svelte';
	location.set('/console/projects');
</script>

<div class=" w-full h-[100%] border-2 border-dashed rounded-md flex flex-col p-2 gap-2">
	<div class="p-2 h-[5%] flex items-center justify-between">
		<a href="/console/projects" class=" text-blue-500 underline">
			<h1>Projects</h1>
		</a>
		<div class="flex gap-2 items-center">
			<div class="flex bg-neutral-100 rounded-md items-center p-2 gap-2 text-gray-700">
				<Search />
				<input
					type="text"
					class="focus:outline-none bg-transparent"
					placeholder="Search in projects"
				/>
			</div>
			<button
				on:click={() => {
					show_create_project.set(true);
				}}
				class=" rounded-md bg-blue-700 p-2 text-white"
			>
				<h1>New Project</h1>
			</button>
		</div>
	</div>
	<hr />
	<div class=" p-2 flex flex-wrap gap-5">
		{#each data.data as project}
			<Project name={project.name} id={project.id} />
		{/each}
		<button
			on:click={() => {
				show_create_project.set(true);
			}}
			class="hover:text-neutral-700 flex flex-col text-neutral-400 justify-center text-center items-center w-52 h-52 rounded-md border-2 p-2"
		>
			<Plus />
			<h1>Create new project</h1>
		</button>
	</div>
</div>
