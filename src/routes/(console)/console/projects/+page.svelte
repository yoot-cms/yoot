<script lang="ts">
	import type { PageServerData } from './$types';
	import { location, show_create_project } from '$lib/stores';
    import Project from '$lib/ui/Project.svelte';
    import Close from '$lib/components/Close.svelte';
    import Loading from '$lib/components/Loading.svelte';
    let loading = false
	import { enhance } from '$app/forms';
	location.set('/console/projects');
	export let data: PageServerData;
</script>

<!--Create project modal -->
{#if $show_create_project}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
        on:click={()=>{ show_create_project.set(false) }}
		class="z-30 hover:cursor-default fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div on:click={(event)=>{ event.stopPropagation() }} class="z-50 p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5" >
            <div class=" flex justify-between items-center ">
                <h1 class=" font-bold text-xl">Create a project</h1>
                <button on:click={()=>{ show_create_project.set(false) }} >
                    <Close/>
                </button>
            </div>
            <form action="" class="flex flex-col justify-between gap-5 h-full">
                <input type="text" placeholder="Project name" class=" border p-2 rounded-md w-full focus:outline-none ">
                <button class="justify-center flex items-center bg-blue-400 h-10 rounded-md text-white">
                    {#if loading}
                        <h1>Loading</h1>
                    {:else}
                        <Loading/>
                    {/if}
                </button>
            </form>
        </div>
	</div>
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
