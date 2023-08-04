<script lang="ts">
	import SideBar from '$lib/ui/SideBar.svelte';
	import Notifications from '$lib/components/Notifications.svelte';
	import { breadcrumb_items, show_notifications } from '$lib/stores';
	import type { LayoutData } from './$types';
	import NotificationsBoard from '$lib/ui/modals/NotificationsBoard.svelte';
	export let data: LayoutData;
	$: ({ user } = data);
</script>

<NotificationsBoard />

<div class=" w-full h-screen flex">
	<SideBar user_data={{ name: user.username, profile_pic: user.profile_pic }} />
	<div class=" flex flex-col w-full h-full">
		<div class=" flex justify-between items-center p-5 w-full h-20 border-b">
			<div class=" flex gap-1 font-bold">
				{#each $breadcrumb_items as breadcrumb_item}
					<a href={breadcrumb_item.path} class=" hover:underline">{breadcrumb_item.title}/</a>
				{/each}
			</div>
			<div class=" flex gap-5">
				<h1>{` ${user.plan === 'basic' ? 'Free' : 'Pro'} `}</h1>
				<button
					on:click={() => {
						show_notifications.set(true);
					}}
					class=" flex relative"
				>
					<span class=" absolute right-0 bg-red-400 rounded-full p-1" />
					<Notifications />
				</button>
			</div>
		</div>
		<slot />
	</div>
</div>
