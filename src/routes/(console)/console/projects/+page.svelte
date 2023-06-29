<script lang="ts">
	import type { PageServerData } from './$types';
	import { location, show_create_project } from '$lib/stores';
    import Project from '$lib/ui/Project.svelte';
	import { enhance } from '$app/forms';
	location.set('/console/projects');
	export let data: PageServerData;
</script>

<!--Create project modal -->
{#if $show_create_project}
	<button
        on:click={()=>{ show_create_project.set(false) }}
		class="z-50 hover:cursor-default fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" hover:cursor-pointer bg-white w-[30rem] h-80 rounded-lg" />
	</button>
{/if}

<div class="w-full h-full bg-neutral-100 flex justify-center">
	{#if data.projects.length !== 0}
		<div class=" h-full w-full flex justify-center items-center">
			<button
                on:click={()=>{ show_create_project.set(true) }}
				class=" group transition-all flex flex-col gap-3 items-center justify-center border-2 hover:border-neutral-500 border-dashed w-64 h-64 rounded-lg"
			>
				<h1 class=" group-hover:text-neutral-500 text-center text-neutral-300">Create a project</h1>
			</button>
		</div>
	{:else}
		<div class=" p-5 max-w-[600px] lg:max-w-[800px]  2xl:max-w-[1000px] h-full w-full flex flex-col justify-start transition-all gap-2" >
            <div class=" flex items-center justify-between ">
                <h1 class=" font-bold text-2xl ">Projects</h1>
                <button on:click={()=>{ show_create_project.set(true) }} class=" bg-blue-500 p-2 rounded-2xl text-white w-32 ">New Project</button>
            </div>
            <div class=" container p-2 h-full w-full flex flex-wrap justify-start gap-5 overflow-y-scroll">
                <Project name={"Test"}/>
                <Project name={"Test"}/>
                <Project name={"Test"}/>
                <Project name={"Test"}/>
                <Project name={"Test"}/>
            </div>
        </div>
	{/if}
</div>
