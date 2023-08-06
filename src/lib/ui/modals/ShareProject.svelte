<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { targetted_project, show_share_project } from '$lib/stores';
	import Loading from '$lib/components/Loading.svelte';
	import Close from '$lib/components/Close.svelte';
	import toast from 'svelte-french-toast';
	let loading = false;
	const handle_share_project: SubmitFunction = ({ data }) => {
		const sharee = data.get('sharee')! as string;
		loading = true;
		return async ({ result, update }) => {
			loading = false;
			switch (result.type) {
				case 'failure':
					switch (result.status) {
						case 404:
							toast.error(`User ${sharee} not found`);
              break;
            case 409:
              toast.error('You can not share a project with yourself')
              break;
						case 500:
							toast.error('Something went wrong. Try again or contact support');
							break;
						default:
							break;
					}
					break;
				case 'success':
					toast.success(`Invitation sent to ${sharee}`);
					show_share_project.set(false);
					break;
			}
			await update();
		};
	};
	let write_permission = false;
</script>

{#if $show_share_project}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1 class=" font-bold text-xl">Share project {$targetted_project}</h1>
				<button
					on:click={() => {
						if (!loading) {
							show_share_project.set(false);
						}
					}}
				>
					<Close />
				</button>
			</div>
			<h1 class="text-sm text-neutral-500">
				Enter the email address of the user you want to share the project with
			</h1>
			<form
				action="?/share"
				use:enhance={handle_share_project}
				method="post"
				class="flex flex-col justify-between gap-5 h-full"
			>
				<input type="text" hidden name="project" value={$targetted_project} />
				<input
					required
					type="email"
					name="sharee"
					autocomplete="off"
					class=" border p-2 rounded-md w-full focus:outline-none"
				/>
				<h1>Permissions</h1>
				<div class="flex text-red-500">
					<h1>Read permission is required and granted by default</h1>
				</div>
				<div class=" flex gap-2">
					<input name="write" bind:checked={write_permission} type="checkbox" />
					<h1 class=" text-neutral-500">User can insert entries</h1>
				</div>
				<button
					disabled={loading}
					class="justify-center flex items-center bg-blue-400 h-10 rounded-md text-white"
				>
					{#if loading}
						<Loading />
					{:else}
						<h1>Share</h1>
					{/if}
				</button>
			</form>
		</div>
	</div>
{/if}
