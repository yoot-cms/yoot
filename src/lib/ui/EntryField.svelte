<script lang="ts">
	export let data_type: string;
	export let field_name: string;
</script>

{#if data_type === 'Text'}
	<input class=" border p-2 rounded-md w-full focus:outline-none" placeholder={field_name} type="text" name={field_name} />
{/if}

{#if data_type === 'Number'}
	<input class=" border p-2 rounded-md w-full focus:outline-none" placeholder={field_name} type="number" name={field_name} />
{/if}

{#if data_type === 'Boolean'}
	<input  class=" border p-2 rounded-md w-full focus:outline-none" placeholder={field_name} type="checkbox" name={field_name} />
{/if}

{#if data_type === 'Image'}
	<input class=" border p-2 rounded-md w-full focus:outline-none" placeholder={field_name} type="file" accept="image/*" name={field_name} />
{/if}
