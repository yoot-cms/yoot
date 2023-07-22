<script lang="ts">
	import { goto } from '$app/navigation';
	import Edit from '$lib/components/Edit.svelte';
	import Trash from '$lib/components/Trash.svelte';
	import Shared from '$lib/components/Shared.svelte';
	import { createEventDispatcher } from 'svelte';
    import { targetted_project, show_delete_confirmation, show_edit_project } from "$lib/stores"
	const dispatch = createEventDispatcher();
	export let name: string;
</script>

<button
	on:click={() => {
		goto(`/console/projects/${name}`);
	}}
	class=" truncate p-2 drop-shadow-lg hover:drop-shadow-xl relative group h-[200px] w-[200px] bg-neutral-50 border-neutral-200 rounded-lg transition-all"
>
	<div class=" w-32 h-10 absolute top-0 right-0 m-2 flex justify-end gap-5">
		<button
			class=" z-50 hover:text-green-500"
			on:click={(e) => {
				e.stopPropagation();
                targetted_project.set(name)
				dispatch('share', {
					project: name
				});
			}}
		>
			<Shared />
		</button>
		<button
			class="z-50 hover:text-blue-500"
			on:click={(e) => {
				e.stopPropagation();
                targetted_project.set(name)
                show_edit_project.set(true)
				dispatch('edit_project', {
					project: name
				});
			}}
		>
			<Edit />
		</button>
		<button
			class="z-50 hover:text-red-500"
			on:click={(e) => {
				e.stopPropagation();
                targetted_project.set(name)
                show_delete_confirmation.set(true)
				dispatch('delete_or_trash_project', {
					project: name
				});
			}}
		>
			<Trash />
		</button>
	</div>

	<h1 class="truncate group-hover:text-neutral-900 text-2xl text-neutral-700 font-bold">{name}</h1>
</button>
