<script lang="ts">
	export let notifications: {
		id: string;
		type: 'notification' | 'invitation';
		read: boolean;
		invitation: string;
		notifiee: string;
	}[];
	import { show_notifications } from '$lib/stores';
	import Close from '$lib/components/Close.svelte';
	import Notification from '../Notification.svelte';
	let loading = false;
	$: show_read = false
</script>

{#if $show_notifications}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[50rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1>Notifications</h1>
				<div class=" flex gap-2">
					<label title="Show read notifications" class="relative inline-flex items-center cursor-pointer">
						<input type="checkbox" checked={show_read} on:change={()=>{ show_read = !show_read }} class="sr-only peer" />
						<div
							class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
						/>
					</label>
					<button
						on:click={() => {
							if (!loading) {
								show_notifications.set(false);
							}
						}}
					>
						<Close />
					</button>
				</div>
			</div>
			{#each notifications as notification}
				<Notification {notification} {show_read} />
			{/each}
		</div>
	</div>
{/if}
