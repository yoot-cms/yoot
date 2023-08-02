<script lang="ts">
	export let schema: Record<string, string>;
	export let entry: {
		id: string;
		entity: string;
		value: Record<string, string | number | boolean>;
	};
</script>

<div class=" w-fit shrink-0 truncate p-2 h-16 overflow-x-scroll flex items-center ">
	{#each Object.entries(schema) as [field_name, field_type]}
		{#if field_type === 'Image'}
			<div class="w-[300px] shrink-0 ">
				<img
					class="hover:cursor-pointer w-16 shrink-0 h-10"
					src={entry.value[field_name].toString()}
					alt=""
				/>
			</div>
		{:else}
			<h1 class=" truncate w-[300px] shrink-0">{entry.value[field_name]}</h1>
		{/if}
	{/each}
</div>
