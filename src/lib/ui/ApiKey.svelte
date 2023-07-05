<script lang="ts">
	export let key: {
		id: string;
		key: string;
		name: string;
		project: string;
		created_at: string;
		permissions: string;
	};
</script>

<button
	class="p-2 drop-shadow-lg hover:drop-shadow-xl relative group h-[200px] w-[200px] bg-neutral-50 border-neutral-200 rounded-lg transition-all"
>
	<h1 class=" group-hover:text-neutral-900 text-2xl text-neutral-700 font-bold">{key.name}</h1>
</button>
