<script lang="ts">
	export let notifications: {
		id: string;
		type: 'notification' | 'invitation';
		read: boolean;
		invitation: string;
		notifiee: string;
		message: string;
	}[];
	import { show_notifications } from '$lib/stores';
	import Close from '$lib/components/Close.svelte';
	import Notification from '../Notification.svelte';
	let loading = false;
</script>

{#if $show_notifications}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[50rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1>Notifications</h1>
				<div class=" flex gap-2">
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
			<div class="flex flex-col gap-5 max-h-[500px] overflow-y-scroll no-scroll">
				{#each notifications as notification}
					<Notification {notification} />
				{/each}
			</div>
		</div>
	</div>
{/if}
