<script lang="ts">
	export let data_type: string;
	export let field_name: string;
</script>

{#if data_type === 'Text'}
	<input
		required
		class=" border p-2 rounded-md w-full focus:outline-none"
		placeholder={field_name}
		type="text"
		name={field_name}
	/>
{/if}

{#if data_type === 'Number'}
	<input
		required
		class=" border p-2 rounded-md w-full focus:outline-none"
		placeholder={field_name}
		type="number"
		name={field_name}
	/>
{/if}

{#if data_type === 'Boolean'}
	<div class="flex gap-2">
		<h1 class="">{field_name}</h1>
		<label class="relative inline-flex items-center cursor-pointer">
			<input type="checkbox" value="" class="sr-only peer" />
			<div
				class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
			/>
		</label>
	</div>
{/if}

{#if data_type === 'Image'}
	<input
		required
		class=" border p-2 rounded-md w-full focus:outline-none"
		placeholder={field_name}
		type="file"
		accept="image/*"
		name={field_name}
	/>
{/if}
