<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { show_delete_confirmation, targetted_project } from '$lib/stores';
	import Loading from '$lib/components/Loading.svelte';
	import Close from '$lib/components/Close.svelte';
	import toast from 'svelte-french-toast';
	let loading = false;
	const handle_delete_or_trash: SubmitFunction = ({ data, cancel }) => {
		loading = true;
		const delete_mode = data.get('mode')! as string;
		if (delete_mode === 'delete') {
			const confirmation = confirm(
				`You are about to permanently delete this project and everything related to it. Proceed?`
			);
			if (!confirmation) {
				loading = false;
				cancel();
			}
		}

		return async ({ update, result }) => {
			loading = false;
			switch (result.type) {
				case 'success':
					const data = result.data?.message as string;
					toast.success(data);
					show_delete_confirmation.set(false);
					break;
				case 'error':
					toast.error('Something went wrong. Please try again or contact support');
					break;
			}
			await update();
		};
	};
	$: delete_mode = 'trash';
</script>

{#if $show_delete_confirmation}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1 class="truncate">What do you want to do with <b>{$targetted_project}</b></h1>
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
				use:enhance={handle_delete_or_trash}
				action="?/delete"
				method="post"
				class="flex flex-col justify-between gap-5 h-full"
			>
				<input hidden type="text" name="mode" bind:value={delete_mode} />
				<input hidden type="text" name="name" value={$targetted_project} />
				<div class="flex gap-2 w-full">
					<button
						type="button"
						disabled={loading}
						class={` ${
							delete_mode === 'trash' ? 'border border-red-700' : ''
						} justify-center transition-all duration-100 w-full flex items-center hover:border h-10 rounded-md text-red-500`}
						on:click={() => {
							delete_mode = 'trash';
						}}
					>
						<h1>Move to trash</h1>
					</button>
					<button
						type="button"
						disabled={loading}
						class={` ${
							delete_mode === 'delete' ? 'border border-red-700' : ''
						} justify-center transition-all duration-100 w-full flex items-center hover:border h-10 rounded-md text-red-500`}
						on:click={() => {
							delete_mode = 'delete';
						}}
					>
						<h1>Delete permanently</h1>
					</button>
				</div>
				<button
					disabled={loading}
					class="justify-center transition-all duration-100 w-full flex items-center bg-red-500 hover:bg-red-700 h-10 rounded-md text-white"
				>
					{#if loading}
						<Loading />
					{:else}
						<h1>Apply</h1>
					{/if}
				</button>
			</form>
		</div>
	</div>
{/if}
