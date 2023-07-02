<script lang="ts">
	import Plus from '$lib/components/Plus.svelte';
	import Trash from '$lib/components/Trash.svelte';
	import { breadcrumb_items, location, show_create_entity } from '$lib/stores';
	import type { PageServerData } from './$types';
	import { enhance, type SubmitFunction } from '$app/forms';
	import toast from 'svelte-french-toast';
	location.set('/console/projects');
	export let data: PageServerData;
	breadcrumb_items.set([
		{ title: 'Projects', path: '/console/projects' },
		{ title: data.name, path: `/console/projects/${data.name}` }
	]);
	let schema: { name: string; type: string }[] = [];
	function show_type_info(data_type: string) {
		switch (data_type) {
			case 'Text':
				return 'Represent a textual value. ';
			case 'Number':
				return 'Represent a numerical value. Supports any real number';
			case 'Image':
				return 'Represent an image. User will upload an image to YOOT servers';
			default:
				return '';
		}
	}
	$: schema_to_string = JSON.stringify(schema);
	let field_name: string = '';
	let field_type: string = 'text';
	function add_field() {
		if (field_type === '' || field_name === '') {
			toast.error('Empty field name');
			return;
		}
		if (schema.some((field) => field.name === field_name)) {
			toast.error(`Your entity already has a field named ${field_name}`);
            return
		}
        schema = [...schema, { name:field_name, type:field_type }]
        toast.success("Field added")
        field_name = ""
	}
	function remove_field(name: string) {}
	const handle_entity_creation: SubmitFunction = async ({ data, cancel }) => {
		return async ({ update, result }) => {
			await update();
		};
	};
</script>

{#if !$show_create_entity}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<form
			method="post"
			action="?/create_entity"
			use:enhance
			class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5"
		>
			<h1 class="font-bold text-md mb-3">Create your entity</h1>
			<input hidden name="schema" bind:value={schema_to_string} type="text" />
			<div class=" flex flex-col gap-5">
				<div class=" flex flex-col gap-2">
					<h1>Entity name</h1>
					<input
						required
						type="text"
						name="name"
						autocomplete="off"
						class=" p-3 rounded-md border border-blue-300 focus:outline-none"
					/>
				</div>
				<div class="w-full flex flex-col gap-2">
					<div class="w-full flex justify-between">
						<div class="flex gap-2 items-baseline">
							<h1>Schema</h1>
							<a class=" text-blue-700 underline text-xs" href="/docs#EntitySchema">
								<h1>Learn more</h1>
							</a>
						</div>
					</div>
					<div class=" flex gap-5 w-full">
						<input
							placeholder="Field name"
							bind:value={field_name}
							autocomplete="off"
							type="text"
							class=" w-full p-2 rounded-md border border-blue-400 focus:outline-none"
						/>
						<select
							bind:value={field_type}
							class="bg-white w-full p-2 pr-6 rounded-md border border-blue-400 focus:outline-none"
						>
							<option value="text">Text</option>
							<option value="number">Number</option>
							<option value="boolean">Boolean</option>
							<option value="image">Image</option>
						</select>
						<button type="button" on:click={add_field} class=" text-blue-700">
							<Plus />
						</button>
					</div>
					<div class="gap-5 w-full flex text-neutral-800 rounded-md">
						<div class="p-2 w-full">
							<h1 class="font-bold">Field name</h1>
						</div>
						<div class="p-2 w-full">
							<h1 class="font-bold">Field type</h1>
						</div>
						<button type="button" class=" text-white">
							<Trash />
						</button>
					</div>
					<div class="w-full flex flex-col gap-2 h-64 overflow-y-scroll no-scroll group">
						{#each schema as field}
							<div
								class="gap-5 w-full flex justify-between hover:cursor-pointer text-neutral-800 rounded-md"
							>
								<div title={field.name} class="p-2 w-full">
									<h1 class="">{field.name}</h1>
								</div>
								<div title={show_type_info(field.type)} class="p-2 w-full">
									<h1>{field.type}</h1>
								</div>
								<button
									type="button"
									class=" group-hover:opacity-100 hover:text-red-500 transition duration-300 initial state: text-black opcaity-0"
								>
									<Trash />
								</button>
							</div>
						{/each}
					</div>
					<button
						type="submit"
						class=" p-2 w-full flex justify-center bg-blue-700 rounded-md text-white"
					>
						<h1>Create entity</h1>
					</button>
				</div>
			</div>
		</form>
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
