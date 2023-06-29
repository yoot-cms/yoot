<script lang="ts">
	import type { PageServerData } from './$types';
	import { location } from '$lib/stores';
    import Plus from '$lib/components/Plus.svelte';
	import { enhance } from '$app/forms';
	location.set('/console/projects');
	export let data: PageServerData;
</script>

<!--Create project modal -->

<div class="w-full h-full bg-neutral-100 flex justify-center">
	{#if data.projects.length === 0}
		<div class=" h-full w-full flex justify-center items-center flex">
			<button class=" group transition-all flex flex-col gap-3 items-center justify-center border-2 hover:border-neutral-500 border-dashed w-64 h-64 rounded-lg ">
                <h1 class=" group-hover:text-neutral-500 text-center text-neutral-300 ">Create a project</h1>
            </button>
		</div>
	{:else}
		<div class=" h-full w-full flex flex-col" />
	{/if}
</div>
