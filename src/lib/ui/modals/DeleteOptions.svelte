<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { show_delete_confirmation, targetted_project } from '$lib/stores';
	import Loading from '$lib/components/Loading.svelte';
	import Close from '$lib/components/Close.svelte';
	import toast from 'svelte-french-toast';
	let loading = false;
	const handle_delete_trash: SubmitFunction = () => {
		loading = true;

		return async ({ update, result }) => {
			loading = false;
			switch (result.type) {
				case 'success':
					toast.success('Entity moved in trash');
					show_delete_confirmation.set(false);
					break;
				default:
					toast.error('Something went wrong. Please try again or contact support');
			}
			await update();
		};
	};
	let delete_mode = 'trash';
</script>

{#if $show_delete_confirmation}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1>What do you want to do</h1>
				<button
					on:click={() => {
						if (!loading) {
							show_delete_confirmation.set(false);
						}
					}}
				>
					<Close />
				</button>
			</div>
			<form
				use:enhance={handle_delete_trash}
				action="?/delete"
				method="post"
				class="flex flex-col justify-between gap-5 h-full"
			>
				<input hidden type="text" name="mode" bind:value={delete_mode} />
				<input hidden type="text" name="name" value={$targetted_project} />
				<div class="flex gap-2 w-full">
					<button
						disabled={loading}
						class="justify-center w-full flex items-center bg-red-500 hover:bg-red-700 h-10 rounded-md text-white"
					>
						{#if loading}
							<Loading />
						{:else}
							<h1>Move to trash</h1>
						{/if}
					</button>
					<button
						disabled={loading}
						class="justify-center w-full flex items-center bg-red-500 hover:bg-red-700 h-10 rounded-md text-white"
						on:click={() => {
							delete_mode = 'delete';
						}}
					>
						{#if loading}
							<Loading />
						{:else}
							<h1>Delete permanently</h1>
						{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
