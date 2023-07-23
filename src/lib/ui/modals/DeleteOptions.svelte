<script lang="ts">
	import {
    show_delete_project,
    targetted_project
  } from '$lib/stores';
	import { enhance, type SubmitFunction } from '$app/forms';
	import Loading from '$lib/components/Loading.svelte';
	import Close from '$lib/components/Close.svelte';
	import toast from 'svelte-french-toast';
	let loading = false;
	const handle_delete_project: SubmitFunction = () => {
		loading = true;
		return async ({ result, update }) => {
			loading = false;
			switch (result.type) {
				case 'success':
					toast.success('Project deleted');
					show_delete_project.set(false);
          targetted_project.set("")
					break;
				case 'failure':
					toast.error('Something went wrong. Try again or contact support');
					break;
			}
			await update();
		};
	};
</script>

{#if $show_delete_project}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1 class="truncate">Delete project <b>{$targetted_project}</b> ?</h1>
				<button
					on:click={() => {
						if (!loading) {
							show_delete_project.set(false);
						}
					}}
				>
					<Close />
				</button>
			</div>
			<form
				use:enhance={handle_delete_project}
				action="?/delete"
				method="post"
				class="flex justify-between gap-5 h-full"
			>
				<input type="text" name="project" value={$targetted_project} hidden />
				<button
					disabled={loading}
					class="justify-center transition-all duration-100 w-full flex items-center bg-blue-500 hover:bg-blue-700 h-10 rounded-md text-white"
					on:click={() => {
						show_delete_project.set(false);
					}}
				>
					<h1>Cancel</h1>
				</button>
				<button
					disabled={loading}
					class="justify-center transition-all duration-100 w-full flex items-center bg-red-500 hover:bg-red-700 h-10 rounded-md text-white"
				>
					{#if loading}
						<Loading />
					{:else}
						<h1>Delete</h1>
					{/if}
				</button>
			</form>
		</div>
	</div>
{/if}
