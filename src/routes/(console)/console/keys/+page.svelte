<script lang="ts">
	import { location, breadcrumb_items, show_create_api_key } from '$lib/stores';
	import type { ActionData, PageData } from './$types';
	import Close from '$lib/components/Close.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	import toast from 'svelte-french-toast';
	location.set('/console/keys');
	breadcrumb_items.set([{ title: 'Keys', path: '/console/keys' }]);
	export let data: PageData;
	export let form: ActionData;
	$: ({ keys, projects } = data);
	let loading = false;
	let read_permission = true;
	let write_permission = false;
	let create_permission = false;
	let delete_permission = false;
	$: permissions = JSON.stringify({
		read_permission,
		write_permission,
		create_permission,
		delete_permission
	});
	const handle_key_creation: SubmitFunction = ({ data, cancel }) => {
		loading = true;
		const key_name = data.get('name') as string;
		if (read_permission === false) {
            loading = false
			toast.error('The read permission is required for all keys');
			cancel();
		}
		if (keys.some((key) => key.name === key_name)) {
            loading = false
			toast.error(`You already have a key named ${key_name}`);
			cancel();
		}
		return async ({ update, result }) => {
			loading = false;
			console.log(form);
			await update();
		};
	};
</script>

<svelte:head>
    <title>YOOT | Keys</title>
</svelte:head>

{#if $show_create_api_key}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1 class=" font-bold text-xl">Create a new key</h1>
				<button
					on:click={() => {
						if (!loading) {
							show_create_api_key.set(false);
						}
					}}
				>
					<Close />
				</button>
			</div>
			<form
				action="?/create_key"
				use:enhance={handle_key_creation}
				method="post"
				class="flex flex-col justify-between gap-5 h-full"
			>
				<input
					type="text"
					name="name"
					required
					placeholder="Give a name to your key"
					autocomplete="off"
					class=" border p-2 rounded-md w-full focus:outline-none"
				/>
				<select required class=" p-2 rounded-md bg-white border" name="project" id="">
					<option >Link a project to the key</option>
					{#each projects as project}
						<option value={project.id}>{project.name}</option>
					{/each}
				</select>
				<h1>Permissions</h1>
				<div class="flex text-red-500">
                    <h1>Read permission is required and granted by default</h1>
                </div>
				<div class=" flex gap-2">
					<input bind:checked={write_permission} type="checkbox" />
					<h1 class=" text-neutral-500">Key can write to entities</h1>
				</div>
				<div class=" flex gap-2">
					<input bind:checked={create_permission} type="checkbox" />
					<h1 class=" text-neutral-500">Key can create entities</h1>
				</div>
				<div class=" flex gap-2">
					<input bind:checked={delete_permission} type="checkbox" />
					<h1 class=" text-neutral-500">Key can delete entities</h1>
				</div>
				<input hidden bind:value={permissions} name="permissions" type="text" />
				<button
					disabled={loading}
					class="justify-center flex items-center bg-blue-400 h-10 rounded-md text-white"
				>
					{#if loading}
						<Loading />
					{:else}
						<h1>Create Key</h1>
					{/if}
				</button>
			</form>
		</div>
	</div>
{/if}

<div class="w-full h-full bg-neutral-100 flex justify-center">
	<div
		class=" p-5 max-w-[600px] lg:max-w-[800px] 2xl:max-w-[1000px] h-full w-full flex flex-col justify-start transition-all gap-2"
	>
		<div class=" flex items-center justify-between">
			<h1 class=" font-bold text-2xl">Keys</h1>
			<div class="flex gap-2">
				<input
					type="text"
					class=" bg-white rounded-full px-5 placeholder:text-neutral-200 focus:outline-none"
					placeholder="Search your keys"
				/>
				<button
					on:click={() => {
						show_create_api_key.set(true);
					}}
					class=" bg-blue-400 p-2 rounded-full text-white w-32">New Key</button
				>
			</div>
		</div>
		<div
			class=" p-2 max-h-full w-full flex flex-wrap justify-start items-start gap-5 overflow-y-scroll no-scroll"
		/>
	</div>
</div>
