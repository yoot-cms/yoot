<script lang="ts">
	import { location } from '$lib/stores';
	import Projects from '$lib/components/Projects.svelte';
	import ApiKeys from '$lib/components/ApiKeys.svelte';
	import Shared from '$lib/components/Shared.svelte';
	const items: { name: string; path: string; icon: any }[] = [
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
			name: 'Shares',
			path: '/console/shares',
			icon: Shared
		}
		//    {
		//      name: 'Stats',
		//      path: '/console/stats',
		//      icon: Stats
		//    },
	];
	export let user_data: { name: string; profile_pic: string };
</script>

<div class=" w-64 p-5 flex flex-col justify-between h-full border-r border-neutral-300">
	<div class="flex flex-col gap-5">
		<a
			href="/console/"
			class=" font-bold bg-clip-text mb-1 text-transparent text-2xl text-center bg-gradient-to-t from-rose-700 to-pink-600"
			>YOOT</a
		>
		{#each items as item}
			<a
				href={item.path}
				class={` ${
					$location === item.path ? 'bg-neutral-600 text-white hover:text-black' : ' text-black'
				}  hover:bg-neutral-100  rounded-md p-3 flex items-center gap-2 transition-all`}
			>
				<svelte:component this={item.icon} />
				<h1>{item.name}</h1>
			</a>
		{/each}
	</div>
	<a
		href="/profile"
		class={` ${
			$location === '/console/profile'
				? 'bg-neutral-600 text-white hover:text-black'
				: ' text-black'
		}  hover:bg-neutral-100  rounded-md p-3 flex items-center gap-2 transition-all`}
	>
		<img src={user_data.profile_pic} class="w-8 h-8 rounded-full" alt="Profile" />
		<h1>{user_data.name}</h1>
	</a>
</div>
