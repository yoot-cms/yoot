<script lang="ts">
	import Trash from '$lib/components/Trash.svelte';
	export let share: {
		share_id: string;
		project_name: string;
		project_owner: string;
    is_sharer: boolean
    sharer_email: string
    sharee_email: string
	};
</script>

<button
	class="p-2 drop-shadow-lg hover:drop-shadow-xl relative group h-[200px] w-[200px] bg-neutral-50 border-neutral-200 rounded-lg transition-all"
>
	<div class=" w-32 h-10 absolute top-0 right-0 m-2 flex justify-end gap-5">
		<button hidden={!share.is_sharer} class="z-50 hover:text-red-500">
			<Trash />
		</button>
	</div>
	<h1 class=" group-hover:text-neutral-900 text-2xl text-neutral-700 font-bold">
		{share.project_name}
	</h1>
  {#if share.is_sharer}
    <h1 class="text-xs truncate text-ellipsis" title={`Sharing with ${share.sharee_email}`}>Sharing with {share.sharee_email}</h1>
  {:else}
    <h1 class="text-xs truncate text-ellipsis" title={`Shared by ${share.sharer_email}`}>Shared by {share.sharer_email}</h1>
  {/if}
</button>
