<script lang="ts">
	import EnvelopeOpened from '$lib/components/EnvelopeOpened.svelte';
	import EnvelopeClosed from '$lib/components/EnvelopeClosed.svelte';
	export let notification: {
		id: string;
		type: 'notification' | 'invitation';
		read: boolean;
		invitation: string;
		notifiee: string;
		message: string;
	};
	import { show_notification_viewer, targetted_notification } from '$lib/stores';
</script>

<button
	on:click={() => {
		show_notification_viewer.set(true);
		targetted_notification.set(notification);
	}}
	class={` w-full bg-neutral-500 rounded-md p-2 flex justify-between `}
>
	<h1 class="text-white">
		{notification.type === 'invitation' ? 'New invitation' : 'New message'}
	</h1>
	<div class=" flex gap-2 text-white">
		{#if notification.read}
			<EnvelopeOpened />
		{:else}
			<EnvelopeClosed />
		{/if}
	</div>
</button>
