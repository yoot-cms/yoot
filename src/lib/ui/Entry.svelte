<script lang="ts">
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
			<div class="w-[300px] shrink-0 ">
				<img
					class="hover:cursor-pointer w-16 shrink-0 h-10"
					src={entry.value[field_name].toString()}
					alt=""
				/>
			</div>
		{:else if field_type === 'Boolean'}
			<div class=" flex flex-col gap-2">
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
</div>
