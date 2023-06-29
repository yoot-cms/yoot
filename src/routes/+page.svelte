<script lang="ts">
	import Project from '$lib/ui/Project.svelte';
	import Entity from '$lib/ui/Entity.svelte';
</script>

<div
	class="pl-96 w-screen flex gap-7 h-screen pt-32 p-8 overflow-y-auto overflow-x-hidden max-h-screen items-start flex-wrap justify-start"
>
	<Entity
		name={'Product'}
		schema={[
			{ name: 'Price', type: 'number' },
			{ name: 'Nmame', type: 'text' },
			{ name: 'Image', type: 'image' },
			{ name: 'Price', type: 'number' },
			{ name: 'Nmame', type: 'text' },
			{ name: 'Image', type: 'image' }
		]}
	/>
	<Entity name={'Product'} schema={[{ name: 'Price', type: 'number' }]} />
	<Entity
		name={'Product'}
		schema={[
			{ name: 'Price', type: 'number' },
			{ name: 'Nmame', type: 'text' }
		]}
	/>
	<Entity
		name={'Product'}
		schema={[
			{ name: 'Price', type: 'number' },
			{ name: 'Nmame', type: 'text' },
			{ name: 'Image', type: 'image' },
			{ name: 'Price', type: 'number' },
			{ name: 'Nmame', type: 'text' },
			{ name: 'Image', type: 'image' }
		]}
	/>
	<Entity name={'Product'} schema={[{ name: 'Price', type: 'number' }]} />
	<Entity
		name={'Product'}
		schema={[
			{ name: 'Price', type: 'number' },
			{ name: 'Nmame', type: 'text' }
		]}
	/>
	<Entity
		name={'Product'}
		schema={[
			{ name: 'Price', type: 'number' },
			{ name: 'Nmame', type: 'text' },
			{ name: 'Image', type: 'image' },
			{ name: 'Price', type: 'number' },
			{ name: 'Nmame', type: 'text' },
			{ name: 'Image', type: 'image' }
		]}
	/>
	<Entity
		name={'Product'}
		schema={[
			{ name: 'Price', type: 'number' },
			{ name: 'Nmame', type: 'text' },
			{ name: 'Image', type: 'image' }
		]}
	/>
</div>
