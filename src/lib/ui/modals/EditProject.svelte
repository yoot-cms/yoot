<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { show_edit_project, targetted_project } from '$lib/stores';
	import Loading from '$lib/components/Loading.svelte';
	import Close from '$lib/components/Close.svelte';
	import toast from 'svelte-french-toast';
	let loading = false;
	const handle_edit_project: SubmitFunction = ({ data }) => {
        const new_name = data.get("new_name")! as string
		loading = true;
		return async ({ result, update }) => {
			loading = false;
			switch (result.type) {
				case 'failure':
                    switch (result.status) {
                        case 500:
                            toast.error('Something went wrong. Try again or contact support');
                            break;
                        case 409:
                            toast.error(`You already have a project named ${new_name}`)
                        default:
                            break;
                    }
					break;
				case 'success':
					toast.success('Changes applied');
                    show_edit_project.set(false)
					break;
			}
			await update();
		};
	};
</script>

{#if $show_edit_project}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1 class=" font-bold text-xl">Edit project</h1>
				<button
					on:click={() => {
						if (!loading) {
							show_edit_project.set(false);
						}
					}}
				>
					<Close />
				</button>
			</div>
			<form
				action="?/edit"
				use:enhance={handle_edit_project}
				method="post"
				class="flex flex-col justify-between gap-5 h-full"
			>
                <input type="text" name="project" value={$targetted_project}>
				<input
					required
					type="text"
					placeholder={$targetted_project}
					name="new_name"
					autocomplete="off"
					class=" border p-2 rounded-md w-full focus:outline-none"
				/>
				<button
					disabled={loading}
					class="justify-center flex items-center bg-blue-400 h-10 rounded-md text-white"
				>
					{#if loading}
						<Loading />
					{:else}
						<h1>Save</h1>
					{/if}
				</button>
			</form>
		</div>
	</div>
{/if}
