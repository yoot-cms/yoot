<script lang="ts">
	import Trash from '$lib/components/Trash.svelte';
  import CreatePermission from '$lib/components/CreatePermission.svelte'
  import WritePermission from '$lib/components/WritePermission.svelte'
  import DeletePermission from '$lib/components/DeletePermission.svelte'
	import { show_delete_api_key, targetted_key } from '$lib/stores';
	export let key: {
		id: string;
		key: string;
		name: string;
		project: string;
		created_at: string;
		permissions: string;
	};
	$: ({ create_permission, write_permission, delete_permission } = JSON.parse(key.permissions) as {
		create_permission: boolean;
		write_permission: boolean;
		delete_permission: boolean;
	})
</script>

<button
	class="p-2 drop-shadow-lg hover:drop-shadow-xl relative group h-[200px] w-[200px] bg-neutral-50 border-neutral-200 rounded-lg transition-all"
>
	<div class=" w-32 h-10 absolute top-0 right-0 m-2 flex justify-end gap-5">
		<button
			class="z-50 hover:text-red-500"
			on:click={(e) => {
				e.stopPropagation();
				show_delete_api_key.set(true);
				targetted_key.set(key);
			}}
		>
			<Trash />
		</button>
	</div>
	<h1 class=" group-hover:text-neutral-900 text-2xl text-neutral-700 font-bold">{key.name}</h1>
	<div class="hidden group-hover:flex transition text-neutral-300 duration-500 flex justify-center ">
    {#if create_permission}
      <CreatePermission />
    {/if}
    {#if write_permission}
      <WritePermission />
    {/if}
    {#if delete_permission}
      <DeletePermission />
    {/if}
	</div>
</button>
