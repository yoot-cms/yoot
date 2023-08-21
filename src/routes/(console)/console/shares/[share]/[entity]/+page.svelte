<script lang="ts">
	import type { PageServerData } from './$types';
	import { location, breadcrumb_items, show_create_entry } from '$lib/stores';
	import Entry from '$lib/ui/Entry.svelte';
	import ImagePreviewer from '$lib/ui/modals/ImagePreviewer.svelte';
	location.set('/console/shares');
	export let data: PageServerData;
	$: ({ entries, schema, project, sharer, entity, share } = data);
  $: console.log(project, entity)
	$: fields = Object.entries(schema);
  $: breadcrumb_items.set([
      { title: `${sharer}'s ${project.toUpperCase()} `, path: `/console/shares/${share}` },
      { title: entity, path: `/console/shares/${share}/${entity}` }
  ]);
</script>

<svelte:head>
	<title>YOOT | Shared entries</title>
</svelte:head>

<ImagePreviewer />

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
						<h1 class=" w-[300px] shrink-0">Actions</h1>
					</div>
				</thead>
				<div class="w-full">
					<tbody class="">
						{#each entries as entry}
							<Entry from_share={true} schema={data.schema} {entry} />
							<hr />
						{/each}
					</tbody>
				</div>
			</table>
		</div>
	</div>
</div>
