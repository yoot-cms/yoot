<script lang="ts">
    import { enhance } from "$app/forms";
    import { show_edit_project } from "$lib/stores"
    import Loading from "$lib/components/Loading.svelte";
    import Close from "$lib/components/Close.svelte";
    let loading = false
</script>

<div
	class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
>
	<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
		<div class=" flex justify-between items-center">
			<h1 class=" font-bold text-xl">Create a project</h1>
			<button
				on:click={() => {
					if (!loading) {
						show_edit_project.set(false);
					}
				}}
			>
				<Close />
			</button>
		</div>
		<form
			action="?/create"
			method="post"
			class="flex flex-col justify-between gap-5 h-full"
		>
			<input
				required
				type="text"
				placeholder="Project name"
				name="name"
				autocomplete="off"
				class=" border p-2 rounded-md w-full focus:outline-none"
			/>
			<button
				disabled={loading}
				class="justify-center flex items-center bg-blue-400 h-10 rounded-md text-white"
			>
				{#if loading}
					<Loading />
				{:else}
					<h1>Create project</h1>
				{/if}
			</button>
		</form>
	</div>
</div>
