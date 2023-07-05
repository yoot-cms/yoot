<script lang="ts">
	import type { PageData } from './$types';
	import { location, breadcrumb_items } from '$lib/stores';
    import Entry from '$lib/ui/Entry.svelte';
	location.set('/console/projects');
	export let data: PageData;
	breadcrumb_items.set([
		{ title: data.name, path: `/console/projects/${data.name}` },
		{ title: data.entity, path: `/console/projects/${data.name}/${data.entity}` }
	]);
</script>

<div class="w-full h-full bg-neutral-100 flex justify-center">
		<div
			class=" p-5 max-w-[600px] lg:max-w-[800px] 2xl:max-w-[1000px] h-full w-full flex flex-col justify-start transition-all gap-2"
		>
			<div class=" flex items-center justify-between">
				<h1 class=" font-bold text-2xl">Entries</h1>
				<button
					class=" bg-blue-400 p-2 rounded-full text-white w-32">New Entry</button
				>
			</div>
			<div
				class=" p-2 max-h-full w-full flex flex-wrap justify-start items-start gap-5 overflow-y-scroll no-scroll"
			>
            
			</div>
		</div>
</div>
