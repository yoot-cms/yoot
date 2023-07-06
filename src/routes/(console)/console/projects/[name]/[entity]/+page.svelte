<script lang="ts">
	import type { PageServerData } from './$types';
	import { location, breadcrumb_items } from '$lib/stores';
    import Entry from '$lib/ui/Entry.svelte';
	location.set('/console/projects');
	export let data: PageServerData;
    $: ({ entries, entity } = data)
    $: fields = Object.keys(entity.schema)
    $: console.log(fields)
	breadcrumb_items.set([
		{ title: data.project_name, path: `/console/projects/${data.project_name}` },
		{ title: data.entity_name, path: `/console/projects/${data.project_name}/${data.entity_name}` }
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
				class=" p-2 max-h-full w-full flex flex-col flex-wrap justify-start items-start gap-5 overflow-scroll no-scroll"
			>
                <div class=" flex justify-between items-center p-2 w-full overflow-x-scroll no-scroll border-b border-neutral-700 text-black h-10 ">
                    {#each fields as field}
                        <h1 class=" w-60 shrink-0 border-r">{field.toUpperCase()}</h1>
                    {/each}
                </div>    
			</div>
		</div>
</div>
