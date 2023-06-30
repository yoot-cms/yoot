<script lang="ts">
	import type { PageServerData } from './$types';
	import { location, show_create_project } from '$lib/stores';
	import Project from '$lib/ui/Project.svelte';
	import Close from '$lib/components/Close.svelte';
	import Loading from '$lib/components/Loading.svelte';
	let loading = false;
	import { enhance, type SubmitFunction } from '$app/forms';
	import toast from 'svelte-french-toast';
	location.set('/console/projects');
	export let data: PageServerData;
	function name_is_duplicate(name: string) {
		return data.projects.some((project) => project.name === name);
	}
	const handle_project_creation: SubmitFunction = ({ data, cancel }) => {
		loading = true;
		const name = data.get('name')! as string;
		if (name_is_duplicate(name)) {
			loading = false;
			toast.error(`You already have a project named ${name}`);
			cancel();
		}
		return async ({ update, result }) => {
            loading = false;
            switch (result.type) {
                    case 'error':
                        toast.error("Something went wrong. Please try again or contact support")    
                    case 'success':
                        toast.success("Project  created")
                }
			await update();
		};
	};
</script>

{#if $show_create_project}
	<div class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50">
		<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1 class=" font-bold text-xl">Create a project</h1>
				<button
					on:click={() => {
						if (!loading) {
							show_create_project.set(false);
						}
					}}
				>
					<Close />
				</button>
			</div>
			<form
				action="?/create"
				method="post"
				use:enhance={handle_project_creation}
				class="flex flex-col justify-between gap-5 h-full"
			>
				<input
					type="text"
					placeholder="Project name"
					name="name"
                    autocomplete="off"
					class=" border p-2 rounded-md w-full focus:outline-none"
				/>
				<button
					disabled={loading}
					class="justify-center flex items-center bg-blue-400 h-10 rounded-md text-white"
				>
					{#if loading}
						<Loading />
					{:else}
						<h1>Create project</h1>
					{/if}
				</button>
			</form>
		</div>
	</div>
{/if}

<div class="w-full h-full bg-neutral-100 flex justify-center">
	{#if data.projects.length === 0}
		<div class=" h-full w-full flex justify-center items-center">
			<button
				on:click={() => {
					show_create_project.set(true);
				}}
				class=" group transition-all flex flex-col gap-3 items-center justify-center border-2 border-neutral-300 hover:border-neutral-500 border-dashed w-64 h-64 rounded-lg"
			>
				<h1 class=" group-hover:text-neutral-500 text-center text-neutral-400">Create a project</h1>
			</button>
		</div>
	{:else}
		<div
			class=" p-5 max-w-[600px] lg:max-w-[800px] 2xl:max-w-[1000px] h-full w-full flex flex-col justify-start transition-all gap-2"
		>
			<div class=" flex items-center justify-between">
				<h1 class=" font-bold text-2xl">Projects</h1>
				<button
					on:click={() => {
						show_create_project.set(true);
					}}
					class=" bg-blue-400 p-2 rounded-full text-white w-32">New Project</button
				>
			</div>
			<div
				class=" p-2 max-h-full w-full flex flex-wrap justify-start items-start gap-5 overflow-y-scroll"
			>
				{#each data.projects as project}
					<Project name={project.name} />
				{/each}
			</div>
		</div>
	{/if}
</div>
