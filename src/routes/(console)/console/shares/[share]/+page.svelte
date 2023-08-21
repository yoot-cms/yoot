<script lang="ts">
	import { location, breadcrumb_items } from '$lib/stores';
	import Entity from '$lib/ui/Entity.svelte';
	import type { PageServerData } from './$types';
	location.set('/console/shares');
	export let data: PageServerData;
	$: ({ entities, share, sharer_email, project_name } = data);
  $: breadcrumb_items.set([
    { title: `${sharer_email}'s ${project_name.toUpperCase()} `, path: `/console/shares/${share}` },
  ]);
</script>

<svelte:head>
	<title>YOOT | Shared entities</title>
</svelte:head>

<div class="w-full h-full bg-neutral-100 overflow-y-auto flex justify-center">
	{#if data.entities.length === 0}
		<div class=" h-full w-full flex justify-center items-center">
			<button
				class=" group transition-all flex flex-col gap-3 items-center justify-center border-2 border-neutral-300 hover:border-neutral-500 border-dashed w-64 h-64 rounded-lg"
			>
				<h1 class=" group-hover:text-neutral-500 text-center text-neutral-400">Empty project</h1>
			</button>
		</div>
	{:else}
		<div
			class=" p-5 max-w-[600px] lg:max-w-[800px] 2xl:max-w-[1000px] h-full w-full flex flex-col justify-start transition-all gap-2"
		>
			<div class=" flex items-center justify-between">
				<h1 class=" font-bold text-2xl">Entities</h1>
				<div class="flex items-center gap-2">
					<input
						disabled
						type="text"
						class="hover:cursor-not-allowed p-2 bg-white rounded-full px-5 placeholder:text-neutral-200 focus:outline-none"
						placeholder="Search your entities"
					/>
				</div>
			</div>
			<div
				class=" p-2 pb-6 max-h-full w-full flex flex-wrap justify-start items-start gap-5 overflow-y-scroll no-scroll"
			>
				{#each entities as entity}
					<Entity from_share={true} name={entity.name} project={share} schema={entity.schema} />
				{/each}
			</div>
		</div>
	{/if}
</div>
