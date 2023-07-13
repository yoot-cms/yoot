<script lang="ts">
	export let schema: Record<string, string>;
	export let entry: {
		id: string;
		entity: string;
		value: Record<string, string | number | boolean>;
	};
    $: console.log(entry)
</script>

<div class="w-full p-2 overflow-x-scroll bg-yellow-400 flex gap-3">
	{#each Object.entries(schema) as [field_name, field_type]}
		{#if field_type === 'Image'}
			<img src={entry.value[field_name].toString()} alt="" />
        {:else}
            <h1>{entry.value[field_name]}</h1>
		{/if}
	{/each}
</div>
