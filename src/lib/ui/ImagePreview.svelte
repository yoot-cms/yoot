<script lang="ts">
	import Discard from '$lib/components/Discard.svelte';
	export let image: Blob;
	export let loaded_preview = true
</script>

<div class=" w-full relative">
	<img class=" w-full max-h-[200px]" src={window.URL.createObjectURL(image)} alt="" />
	<button
		on:click|preventDefault={() => {
			loaded_preview = false;
		}}
		class="bg-red-500 rounded-full z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
	>
		<Discard />
	</button>
</div>
