<script lang="ts">
	import type { PageServerData } from './$types';
	import { location, breadcrumb_items, show_create_entry } from '$lib/stores';
	import Entry from '$lib/ui/Entry.svelte';
    import EntryField from '$lib/ui/EntryField.svelte';
	import Close from '$lib/components/Close.svelte';
    import Loading from '$lib/components/Loading.svelte';
	location.set('/console/projects');
	export let data: PageServerData;
	$: ({ entries, entity } = data);
	$: fields = Object.entries(entity.schema);
	breadcrumb_items.set([
		{ title: data.project_name, path: `/console/projects/${data.project_name}` },
		{ title: data.entity_name, path: `/console/projects/${data.project_name}/${data.entity_name}` }
	]);
    let loading = false
</script>

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
				action="?/create"
				method="post"
				class="flex flex-col justify-between gap-5 h-full"
			>
                {#each fields as [field_name, data_type]}
                    <EntryField  {data_type} {field_name} />
                {/each}
				<button
					disabled={loading}
					class="justify-center flex items-center bg-blue-400 h-10 rounded-md text-white"
				>
					{#if loading}
						<Loading />
					{:else}
						<h1>Insert Entry</h1>
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
			<h1 class=" font-bold text-2xl">Entries</h1>
			<button on:click={()=>{ show_create_entry.set(true) }} class=" bg-blue-400 p-2 rounded-full text-white w-32">New Entry</button>
		</div>
		<div
			class=" p-2 max-h-full w-full flex flex-col flex-wrap justify-start items-start gap-5 overflow-scroll no-scroll"
		>
			<div
				class=" flex justify-between items-center p-2 w-full overflow-x-scroll no-scroll border-b border-neutral-700 text-black h-10"
			>
				{#each fields as field}
					<h1 class=" w-60 shrink-0 border-r">{field[0].toUpperCase()}</h1>
				{/each}
			</div>
		</div>
	</div>
</div>
