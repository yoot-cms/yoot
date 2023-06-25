<script lang="ts">
	import { location } from '$lib/stores';
    import Search from '$lib/components/Search.svelte';
	location.set('/console/projects');
</script>

<div class=" w-full h-[100%] border-2 border-dashed flex flex-col p-2 gap-2">
	<div class="p-2 h-[5%] flex items-center justify-between">
		<h1 class=" text-blue-500 underline">Projects</h1>
		<div class="flex gap-2 items-center">
            <div class="flex bg-neutral-100 rounded-md items-center p-2 gap-2 text-gray-700">
                <Search/>
                <input type="text" class="focus:outline-none bg-transparent " placeholder="Search in projects">
            </div>
			<button class=" rounded-md bg-blue-700 p-2 text-white">
				<h1>New Project</h1>
			</button>
		</div>
	</div>
	<hr />
	<div class=" p-2">
		<h1>Content</h1>
	</div>
</div>
