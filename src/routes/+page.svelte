<script lang="ts">
	import { goto } from '$app/navigation';
	onMount(() => {
		if (import.meta.env.PROD) {
			goto('/login');
		}
	});
	import Entry from '$lib/ui/Entry.svelte';
	import { onMount } from 'svelte';
	const schema = {
		name: 'Text',
		age: 'Number',
		profile: 'Image',
		alive: 'Boolean'
	};
	const entry = {
		id: 'duhhuh',
		entity: 'duh',
		value: {
			name: 'Joseph',
			age: 2,
			profile: 'https://picsum.photos/200/300',
			alive: true
		}
	};
</script>

<div
	class="pl-96 w-screen flex gap-7 h-screen pt-32 p-8 overflow-y-auto overflow-x-hidden max-h-screen items-start flex-wrap justify-start"
>
	<Entry {schema} {entry} />
</div>
