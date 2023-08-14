<script lang="ts">
	import Trash from '$lib/components/Trash.svelte';
	import SignOut from '$lib/components/SignOut.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	import toast from 'svelte-french-toast';
	import { goto } from '$app/navigation';
	export let share: {
		share_id: string;
		project_name: string;
		project_owner: string;
		is_sharer: boolean;
		sharer_email: string;
		sharee_email: string;
	};
	const handle_delete_share: SubmitFunction = ({}) => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'failure':
					toast.error('Something went wrong. Please try again or contact support');
					break;
				case 'success':
					const message = share.is_sharer ? 'Share deleted' : 'You left this share';
					toast.success(message);
					break;
			}
			await update();
		};
	};
</script>

<button
	class=" p-2 drop-shadow-lg hover:drop-shadow-xl relative group h-[200px] w-[200px] bg-neutral-50 border-neutral-200 rounded-lg transition-all"
	on:click={() => {
		if (share.is_sharer) {
      goto(`/console/projects/${share.project_name}`)
		} else {
      goto(`/console/shares/${share.project_name}`)
		}
	}}
>
	<div class=" w-32 h-10 absolute top-0 right-0 m-2 flex justify-end gap-5">
		<form action="?/delete" method="post" use:enhance={handle_delete_share}>
			<input type="text" hidden name="project_name" value={share.project_name} />
			<input type="text" hidden name="project_owner" value={share.project_owner} />
			<input type="text" hidden name="share" value={share.share_id} />
			<button type="submit" hidden={!share.is_sharer} class="z-50 hover:text-red-500">
				<Trash />
			</button>
			<button type="submit" hidden={share.is_sharer} class="z-50 hover:text-red-500">
				<SignOut />
			</button>
		</form>
	</div>
	<h1 class=" group-hover:text-neutral-900 text-2xl text-neutral-700 font-bold">
		{share.project_name}
	</h1>
	{#if share.is_sharer}
		<h1 class="text-xs truncate text-ellipsis" title={`Sharing with ${share.sharee_email}`}>
			Sharing with {share.sharee_email}
		</h1>
	{:else}
		<h1 class="text-xs truncate text-ellipsis" title={`Shared by ${share.sharer_email}`}>
			Shared by {share.sharer_email}
		</h1>
	{/if}
</button>
