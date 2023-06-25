<script lang="ts">
	import { writable } from 'svelte/store';
	import ApiKeys from '../ApiKeys.svelte';
	import Avatar from '../Avatar.svelte';
	import Projects from '../Projects.svelte';
	import Stats from '../Stats.svelte';
	import type { SvelteComponent } from 'svelte';
	export const location = writable('');
	const items: { name: string; path: string; icon: typeof SvelteComponent }[] = [
		{
			name: 'Projects',
			path: '/console/projects',
			icon: Projects
		},
		{
			name: 'API keys',
			path: '/console/keys',
			icon: ApiKeys
		},
		{
			name: 'Profile',
			path: '/console/profile',
			icon: Avatar
		},
		{
			name: 'Stats',
			path: '/console/stats',
			icon: Stats
		}
	];
</script>

<div class=" w-[15%] h-[100%] border-r-2 flex flex-col p-5 gap-5">
	{#each items as item}
		<a
			href={item.path}
			class=" bg-neutral-100 hover:bg-neutral-400 hover:text-white text-xl rounded-md p-3 flex items-center gap-2"
		>
			<svelte:component this={item.icon} />
			<h1>{item.name}</h1>
		</a>
	{/each}
</div>
