<script lang="ts">
	export let name: string;
	export let schema: Record<string, string>;
	import Trash from '$lib/components/Trash.svelte';
	import Loading from '$lib/components/Loading.svelte';
	$: schema_array = Object.entries(schema);
	function color(type: string) {
		switch (type) {
			case 'Image':
				return 'text-yellow-500';
			case 'Number':
				return 'text-orange-500';
			case 'Text':
				return 'text-sky-500';
			case 'Boolean':
				return 'text-violet-500';
		}
	}
	let loading = false;
</script>

<div
	class=" max-h-full shrink-0 hover:cursor-pointer w-[300px] rounded-lg p-5 flex flex-col drop-shadow-lg hover:drop-shadow-xl bg-neutral-50"
>
	<form class=" mb-2 w-full flex justify-between gap-2 items-center">
		<input
			title={name}
            value={name}
			class="bg-transparent hover:cursor-text focus:outline-none w-full text-ellipsis truncate text-neutral-800 text-2xl font-bold"
		>
		{#if loading}
            <button type="button" class=" text-neutral-300 ">
                <Loading />
            </button>
		{:else}
			<button type="button" class="p-2 text-neutral-300 hover:text-red-500 transition-all duration-300">
				<Trash />
			</button>
		{/if}
	</form>
	<div class="overflow-y-auto no-scroll pr-5 h-full pb-5 text-lg">
		{#each schema_array as property}
			<div class="flex w-full items-center justify-between pt-6">
				<span class="font-medium text-neutral-600">{property[0]}</span>
				<span class={color(property[1])}>{property[1]}</span>
			</div>
		{/each}
	</div>
</div>
