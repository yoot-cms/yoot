<script lang="ts">
	import { show_signout } from '$lib/stores';
	import Loading from '$lib/components/Loading.svelte';
	import Close from '$lib/components/Close.svelte';
	let loading = false;
</script>

{#if $show_signout}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1 class="truncate">Sign out of your account ?</h1>
				<button
					on:click={() => {
						if (!loading) {
							show_signout.set(false);
						}
					}}
				>
					<Close />
				</button>
			</div>
			<form action="/console?/signout" method="post" class="flex justify-between gap-5 h-full">
				<button
					disabled={loading}
					class="justify-center transition-all duration-100 w-full flex items-center bg-blue-500 hover:bg-blue-700 h-10 rounded-md text-white"
					on:click={() => {
						show_signout.set(false);
					}}
				>
					<h1>No</h1>
				</button>
				<button
					disabled={loading}
					class="justify-center transition-all duration-100 w-full flex items-center bg-red-500 hover:bg-red-700 h-10 rounded-md text-white"
				>
					{#if loading}
						<Loading />
					{:else}
						<h1>Yes</h1>
					{/if}
				</button>
			</form>
		</div>
	</div>
{/if}
