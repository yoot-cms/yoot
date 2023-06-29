<script lang="ts">
	import Options from '$lib/components/Options.svelte';
	import { goto } from '$app/navigation';
	export let name: string;
</script>

<button
	on:click={() => {
		goto('/');
	}}
	class="drop-shadow-lg hover:drop-shadow-xl relative group  h-[200px] w-[200px] bg-neutral-50 border-neutral-200 rounded-lg transition-all"
>
	<button
		on:click={(event) => {
			event.stopPropagation();
			alert('You clicked me nigga');
		}}
		class="z-50 absolute top-4 right-4"
	>
		<Options />
	</button>
	<h1 class=" group-hover:text-neutral-900 text-2xl text-neutral-700 font-bold">{name}</h1>
</button>
