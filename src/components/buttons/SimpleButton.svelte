<script lang="ts">
	export let on_click: () => void = () => {};
</script>

<button on:click={on_click} class="p-1 rounded-md text-white w-28 h-10 font-bold bg-violet-600">
	<slot />
</button>
