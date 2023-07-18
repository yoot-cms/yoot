<script lang="ts">
	import { goto } from '$app/navigation';
	export let name: string;
</script>

<button
	on:click={() => {
		goto(`/console/projects/${name}`);
	}}
	class="truncate p-2 drop-shadow-lg hover:drop-shadow-xl relative group h-[200px] w-[200px] bg-neutral-50 border-neutral-200 rounded-lg transition-all"
>

	<h1 class="truncate group-hover:text-neutral-900 text-2xl text-neutral-700 font-bold">{name}</h1>
</button>
