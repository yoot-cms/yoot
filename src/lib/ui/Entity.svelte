<script lang="ts">
	export let name: string;
	export let project: string;
	export let schema: Record<string, string>;
	import { show_delete_entity, targetted_entity } from '$lib/stores';
	import Trash from '$lib/components/Trash.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import { goto } from '$app/navigation';
	$: schema_array = Object.entries(schema);
	let loading = false;
</script>

<button
	on:click={() => {
		goto(`/console/projects/${project}/${name}`);
	}}
	class=" max-h-full shrink-0 hover:cursor-pointer w-[300px] rounded-lg p-5 flex flex-col drop-shadow-lg hover:drop-shadow-xl bg-neutral-50"
>
	<div class=" mb-2 w-full flex justify-between gap-2 items-center">
		<div class=" flex gap-2 truncate ">
			<span
				class=" bg-transparent hover:cursor-text focus:outline-none text-ellipsis truncate text-neutral-800 text-2xl font-bold"
			>
				{name}
			</span>
		</div>
		{#if loading}
			<button type="button" class=" text-neutral-300">
				<Loading />
			</button>
		{:else}
			<button
				on:click={(event) => {
					event.stopPropagation();
					targetted_entity.set({
						name,
						project
					});
          show_delete_entity.set(true)
				}}
				type="button"
				class=" text-neutral-300 hover:text-red-500 transition-all duration-300"
			>
				<Trash />
			</button>
		{/if}
	</div>
	<div class="overflow-y-auto no-scroll h-full pb-5 text-lg">
		{#each schema_array as property}
			<div class="flex w-full items-center justify-between pt-6">
				<span class="font-medium text-neutral-600">{property[0]}</span>
				<span class=" text-neutral-300">{property[1]}</span>
			</div>
		{/each}
	</div>
</button>
