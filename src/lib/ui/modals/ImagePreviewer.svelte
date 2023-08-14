<script lang="ts">
	import { show_image_previewer, previewer_source } from '$lib/stores';
	import Close from '$lib/components/Close.svelte';
</script>

{#if $show_image_previewer}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-center items-center">
				<button
					on:click={() => {
						show_image_previewer.set(false);
					}}
				>
					<Close />
				</button>
			</div>
			<img src={$previewer_source} alt="" />
		</div>
	</div>
{/if}
