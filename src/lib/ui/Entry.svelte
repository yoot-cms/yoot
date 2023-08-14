<script lang="ts">
	import Trash from '$lib/components/Trash.svelte';
	import Edit from '$lib/components/Edit.svelte';
	import {
		show_delete_entry,
		targetted_entry,
		show_image_previewer,
		previewer_source
	} from '$lib/stores';
	export let schema: Record<string, string>;
	export let entry: {
		id: string;
		entity: string;
		value: Record<string, string | number | boolean | any>;
	};
</script>

<div class=" w-full shrink-0 truncate p-2 h-16 overflow-x-scroll flex items-center ">
	{#each Object.entries(schema) as [field_name, field_type]}
		{#if field_type === 'Image'}
			<div class=" w-[300px] shrink-0 ">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					on:click={() => {
						previewer_source.set(entry.value[field_name].toString());
						show_image_previewer.set(true);
					}}
					class="hover:cursor-pointer w-16 shrink-0 h-10"
					src={entry.value[field_name].toString()}
					alt=""
				/>
			</div>
		{:else if field_type === 'Boolean'}
			<div class=" flex flex-col gap-2 truncate w-[300px] shrink-0">
				<label class="relative inline-flex items-center cursor-pointer">
					<input type="checkbox" checked={entry.value[field_name]} class="sr-only peer" />
					<div
						class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
					/>
				</label>
			</div>
		{:else}
			<h1 title={entry.value[field_name].toString()} class=" truncate w-[300px] shrink-0">
				{entry.value[field_name]}
			</h1>
		{/if}
	{/each}
	<div class="w-[300px] gap-5 flex shrink-0">
		<button
			on:click={() => {
				targetted_entry.set(entry.id);
				show_delete_entry.set(true);
			}}
			class="hover:text-red-500"
		>
			<Trash />
		</button>
		<button class="hover:text-blue-500">
			<Edit />
		</button>
	</div>
</div>
