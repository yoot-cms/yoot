<script lang="ts">
	export let data: PageServerData;
	import { location, show_create_project } from '$lib/stores';
	import { creating_project } from './store';
	import type { PageServerData } from './$types';
	import { enhance, type SubmitFunction } from '$app/forms';
	import Project from '$lib/components/ui/Project.svelte';
	import Search from '$lib/components/Search.svelte';
	import Plus from '$lib/components/Plus.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import toast from 'svelte-french-toast';
	location.set('/console/projects');
	let loading = false;

	function name_is_duplicate(name: string) {
        return data.data.some(project=>project.name===name)
	}

	const submit_create_project: SubmitFunction = ({ data, cancel }) => {
		loading = true;
		const name = data.get('name')! as string;
		if (name_is_duplicate(name)) {
			loading = false;
			cancel();
			toast.error(`You already have a project named ${name}`);
		}
		return async ({ result, update }) => {
            loading = false;
			switch (result.type) {
				case 'failure':
					toast.error(`You already have a project named ${name}`);
					break;
				case 'success':
                    toast.success(`Project ${name} created`)
			}
			await update();
		};
	};
</script>

<!-- Create project modal -->
{#if $show_create_project}
	<div
		class=" z-50 fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-screen w-full flex flex-col items-center justify-center bg-black/40"
	>
		<form
			use:enhance={submit_create_project}
			action="?/create"
			method="post"
			class=" flex flex-col justify-between rounded-md h-64 w-[30%] p-3 bg-white"
		>
			<h1 class=" text-neutral-500 font-bold">Enter your project name</h1>
			<input
				class=" border border-3 rounded-md p-3 w-[100%] focus:outline-none"
				type="text"
				name="name"
				placeholder="Project name"
				autocomplete="off"
				required
			/>
			<div class="flex justify-end gap-5 text-white">
				<button
					disabled={loading}
					type="button"
					on:click={() => {
						show_create_project.set(false);
					}}
					class=" rounded-md w-32 bg-red-500 font-bold hover:bg-red-600 p-2"
				>
					<h1>Cancel</h1>
				</button>
				<button
					disabled={loading}
					class="flex justify-center rounded-md w-32 bg-blue-500 font-bold hover:bg-blue-600 p-2"
				>
					{#if loading}
						<Loading />
					{:else}
						<h1>Create</h1>
					{/if}
				</button>
			</div>
		</form>
	</div>
{/if}
<!-- Create project modal -->

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
			class="hover:text-neutral-700 flex flex-col text-neutral-400 justify-center text-center items-center w-72 h-52 rounded-md border-2 p-2"
		>
			<Plus />
			<h1>Create new project</h1>
		</button>
	</div>
</div>
