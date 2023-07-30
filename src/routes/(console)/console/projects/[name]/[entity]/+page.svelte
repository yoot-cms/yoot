<script lang="ts">
	import type { PageServerData } from './$types';
	import { location, breadcrumb_items, show_create_entry } from '$lib/stores';
	import EntryField from '$lib/ui/EntryField.svelte';
	import Entry from '$lib/ui/Entry.svelte';
	import Close from '$lib/components/Close.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	import toast from 'svelte-french-toast';
	location.set('/console/projects');
	export let data: PageServerData;
	$: ({ entries, entity } = data);
	$: fields = Object.entries(entity.schema);
	breadcrumb_items.set([
		{ title: data.project_name, path: `/console/projects/${data.project_name}` },
		{ title: data.entity_name, path: `/console/projects/${data.project_name}/${data.entity_name}` }
	]);
	let loading = false;
	const handle_entry_creation: SubmitFunction = async ({ data }) => {
		data.set('fields', JSON.stringify(fields));
		data.set('entity', entity.id);
		toast.loading('Inserting entry', { id: '0' });
		loading = true;
		return async ({ update, result }) => {
			toast.dismiss('0');
			loading = false;
      switch (result.type) {
        case "success":
          toast.success("Entry inserted")
          show_create_entry.set(false)
          break;
        case "failure":
          toast.error("Something went wrong. Try again or contact support")
          break
      }
			await update();
		};
	};
</script>

<svelte:head>
	<title>YOOT | Entries in {data.entity_name}</title>
</svelte:head>

{#if $show_create_entry}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1 class=" font-bold text-xl truncate">Insert an entry in {data.entity_name}</h1>
				<button
					on:click={() => {
						if (!loading) {
							show_create_entry.set(false);
						}
					}}
				>
					<Close />
				</button>
			</div>
			<form
				action="?/create_entry"
				method="post"
				class="flex flex-col justify-between gap-5"
				use:enhance={handle_entry_creation}
                enctype="multipart/form-data"
			>
				<input type="text" name="entity" hidden />
				<input type="text" name="fields" hidden />
				<div class="max-h-[500px] flex flex-col gap-2 overflow-y-scroll no-scroll">
					{#each fields as [field_name, data_type]}
						<EntryField {data_type} {field_name} />
					{/each}
				</div>
				<button
					disabled={loading}
					class="p-2 justify-center flex items-center bg-blue-400 h-10 rounded-md text-white"
				>
					<h1>Insert Entry</h1>
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
			<h1 class=" font-bold text-2xl">Entries</h1>
			<button
				on:click={() => {
					show_create_entry.set(true);
				}}
				class=" bg-blue-400 p-2 rounded-full text-white w-32">New Entry</button
			>
		</div>
		<div
			class=" p-2 max-h-full w-full flex flex-col flex-wrap justify-start items-start gap-5 overflow-auto no-scroll"
		>
			<table
				class=" max-w-[600px] lg:max-w-[800px] 2xl:max-w-[1000px] max-h-full w-full flex flex-col justify-start transition-all gap-5 overflow-auto"
			>
				<thead class="w-full">
					<div
						class=" flex items-center min-w-full border p-2 border-neutral-300 rounded-lg w-fit text-black h-10"
					>
						{#each fields as field}
							<h1 class=" w-[300px] shrink-0">{field[0].toUpperCase()}</h1>
						{/each}
					</div>
				</thead>
				<tbody class=" max-h-[600px] overflow-scroll flex flex-col gap-3">
					{#each entries as entry}
						<Entry schema={data.entity.schema} {entry} />
            <hr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
