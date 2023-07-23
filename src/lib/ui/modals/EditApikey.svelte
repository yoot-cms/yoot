<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { show_edit_api_key, targetted_key } from '$lib/stores';
	import Close from '$lib/components/Close.svelte';
	import Loading from '$lib/components/Loading.svelte';
	let { permissions, name } = $targetted_key;
	$: ({ write_permission, create_permission, delete_permission } = JSON.parse(permissions) as {
		write_permission: boolean;
		create_permission: boolean;
		delete_permission: boolean;
	});
	let loading = false;
	$: new_permissions = JSON.stringify({
		write_permission,
		create_permission,
		delete_permission
	});
	const handle_edit_key: SubmitFunction = ({ data, cancel }) => {
		console.log(data);
		cancel();
	};
</script>

{#if $show_edit_api_key}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1 class=" font-bold text-xl">Create a new key</h1>
				<button
					on:click={() => {
						if (!loading) {
							show_edit_api_key.set(false);
						}
					}}
				>
					<Close />
				</button>
			</div>
			<form
				use:enhance={handle_edit_key}
				action="?/create_key"
				method="post"
				class="flex flex-col justify-between gap-5 h-full"
			>
				<input
					type="text"
					name="name"
                    bind:value={name}
					required
					placeholder={$targetted_key.name}
					autocomplete="off"
					class=" border p-2 rounded-md w-full focus:outline-none"
				/>
				<h1>Permissions</h1>
				<div class=" flex gap-2">
					<input type="checkbox" bind:value={write_permission} bind:checked={write_permission} />
					<h1 class=" text-neutral-500">Key can write to entities</h1>
				</div>
				<div class=" flex gap-2">
					<input type="checkbox" bind:value={write_permission} bind:checked={create_permission} />
					<h1 class=" text-neutral-500">Key can create entities</h1>
				</div>
				<div class=" flex gap-2">
					<input type="checkbox" bind:value={write_permission} bind:checked={delete_permission} />
					<h1 class=" text-neutral-500">Key can delete entities</h1>
				</div>
				<input hidden bind:value={new_permissions} name="permissions" type="text" />
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
