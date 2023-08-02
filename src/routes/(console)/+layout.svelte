<script lang="ts">
	import SideBar from '$lib/ui/SideBar.svelte';
	import { breadcrumb_items } from '$lib/stores';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	$: ({ user } = data);
</script>

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
				{#if user.plan === 'basic'}
					<h1>Upgrade to pro</h1>
				{/if}
			</div>
		</div>
		<slot />
	</div>
</div>
