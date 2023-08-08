<script lang="ts">
  import { location, breadcrumb_items } from "$lib/stores";
  location.set('/console/shares')
	breadcrumb_items.set([{ title: 'Shares', path: '/console/shares' }]);
  import Share from "$lib/ui/Share.svelte";
  export let data
</script>

<div class="w-full h-full bg-neutral-100 flex justify-center">
	{#if data.shares.length === 0}
		<div class=" h-full w-full flex justify-center items-center">
			<button
				class=" group transition-all flex flex-col gap-3 items-center justify-center border-2 border-neutral-300 hover:border-neutral-500 border-dashed w-64 h-64 rounded-lg"
			>
				<h1 class=" group-hover:text-neutral-500 text-center text-neutral-400">Create a project</h1>
			</button>
		</div>
	{:else}
		<div
			class=" p-5 max-w-[600px] lg:max-w-[800px] 2xl:max-w-[1000px] h-full w-full flex flex-col justify-start transition-all gap-2"
		>
			<div class=" flex items-center justify-between">
				<h1 class=" font-bold text-2xl">Shares</h1>
			</div>
			<div
				class=" p-2 max-h-full w-full flex flex-wrap justify-start items-start gap-5 overflow-y-scroll no-scroll"
			>
				{#each data.shares as share}
					<Share
						{share}
					/>
				{/each}
			</div>
		</div>
	{/if}
</div>
