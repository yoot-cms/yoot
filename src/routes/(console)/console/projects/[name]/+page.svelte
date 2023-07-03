<script lang="ts">
	import Plus from '$lib/components/Plus.svelte';
	import Trash from '$lib/components/Trash.svelte';
	import { breadcrumb_items, location, show_create_entity } from '$lib/stores';
	import type { PageData } from './$types';
	import { enhance, type SubmitFunction } from '$app/forms';
	import toast from 'svelte-french-toast';
	import Broom from '$lib/components/Broom.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Close from '$lib/components/Close.svelte';
	import Entity from '$lib/ui/Entity.svelte';
	location.set('/console/projects');
	export let data: PageData;
	let loading = false;
	$: ({ entities } = data);
	breadcrumb_items.set([
		{ title: 'Projects', path: '/console/projects' },
		{ title: data.name, path: `/console/projects/${data.name}` }
	]);
	let entity_schema: { name: string; type: string }[] = [];
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
	$: schema_to_string = JSON.stringify(entity_schema);
	let field_name: string = '';
	let field_type: string = 'Text';
	function add_field() {
		if (field_type === '' || field_name === '') {
			toast.error('Empty field name');
			return;
		}
		if (entity_schema.some((field) => field.name === field_name)) {
			toast.error(`Your entity already has a field named ${field_name}`);
			return;
		}
		entity_schema = [...entity_schema, { name: field_name, type: field_type }];
		toast.success('Field added');
		field_name = '';
	}
	function remove_field(name: string) {
		entity_schema = entity_schema.filter((field) => field.name !== name);
		toast.success('Field removed');
	}
	const handle_entity_creation: SubmitFunction = async ({ data, cancel }) => {
		loading = true;
		const name = data.get('name') as string;
		const schema = data.get('schema') as string;
		if (entities.some((entity) => entity.name === name)) {
			toast.error(`You already have an entity named ${name}`);
			loading = false;
			cancel();
		}
		if (schema === '[]') {
			toast.error('You can not create an entity with an empty schema');
			loading = false;
			cancel();
		}
		return async ({ update, result }) => {
			loading = false;
			switch (result.type) {
				case 'error':
					switch (result.status) {
						case 409:
							toast.error(`You already have an entity named ${name}`);
							break;

						default:
							break;
					}
					break;
				case 'success':
					entity_schema = [];
					switch (result.status) {
						case 204:
							toast.success('Entity created');
					}
				default:
					break;
			}
			await update();
		};
	};
</script>

{#if $show_create_entity}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<form
			method="post"
			action="?/create_entity"
			use:enhance={handle_entity_creation}
			class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5"
		>
			<div class="flex justify-between">
				<h1 class="font-bold text-md mb-3">Create your entity</h1>
				<button
					type="button"
					on:click={() => {
						show_create_entity.set(false);
					}}
				>
					<Close />
				</button>
			</div>
			<input hidden name="schema" bind:value={schema_to_string} type="text" />
			<input hidden name="project" bind:value={data.name} type="text" />
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
							on:keydown={(event) => {
								if (event.key === 'Enter') {
									add_field();
									event.preventDefault();
								}
							}}
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
							<option value="Text">Text</option>
							<option value="Number">Number</option>
							<option value="Boolean">Boolean</option>
							<option value="Image">Image</option>
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
						<button
							on:click={() => {
								entity_schema = [];
								toast.success('Schema cleared');
							}}
							type="button"
							class="hover:text-red-500 transition duration-300 initial state: text-black opcaity-0"
							title="Clear schema"
						>
							<Broom />
						</button>
					</div>
					<div class="w-full flex flex-col gap-2 h-64 overflow-y-scroll no-scroll">
						{#each entity_schema as field}
							<div
								class="group z-10 gap-5 w-full flex justify-between hover:cursor-pointer text-neutral-800 rounded-md"
							>
								<div title={field.name} class="truncate p-2 w-full">
									<h1 class="truncate text-ellipsis">{field.name}</h1>
								</div>
								<div title={show_type_info(field.type)} class="p-2 w-full">
									<h1>{field.type}</h1>
								</div>
								<button
									on:click={() => {
										remove_field(field.name);
									}}
									type="button"
									class="z-20 hover:text-red-500 transition duration-300 text-neutral-400 opcaity-0"
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
						{#if loading}
							<Loading />
						{:else}
							<h1>Create entity</h1>
						{/if}
					</button>
				</div>
			</div>
		</form>
	</div>
{/if}

<div class="w-full h-full bg-neutral-100 overflow-y-auto flex justify-center">
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
		<div
			class=" p-5 max-w-[600px] lg:max-w-[800px] 2xl:max-w-[1000px] h-full w-full flex flex-col justify-start transition-all gap-2"
		>
			<div class=" flex items-center justify-between">
				<h1 class=" font-bold text-2xl">Entities</h1>
				<div class="flex gap-2">
					<input
						type="text"
						class=" bg-white rounded-full px-5 placeholder:text-neutral-200 focus:outline-none"
						placeholder="Search your entities"
					/>
					<button
						on:click={() => {
							show_create_entity.set(true);
						}}
						class=" bg-blue-400 p-2 rounded-full text-white w-32">New Entity</button
					>
				</div>
			</div>
			<div
				class=" p-2 pb-6 max-h-full w-full flex flex-wrap justify-start items-start gap-5 overflow-y-scroll no-scroll"
			>
				{#each entities as entity}
					<Entity name={entity.name} project={data.name} schema={entity.schema} />
				{/each}
			</div>
		</div>
	{/if}
</div>
