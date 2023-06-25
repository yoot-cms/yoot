<script lang="ts">
	import { goto } from "$app/navigation";
    import type { PageData, ActionData } from "./$types";
    export let form : ActionData
    import Loading from "$lib/components/Loading.svelte";
	let email = '';
    let username = '';
	let password = '';
    let loading = false
    let error = ""
    console.log(form)
</script>

<div class="fixed flex h-screen w-screen items-center justify-center bg-white">
	<div
		class="max-h-[75vh] lg:max-h-[60vh] max-w-[90vw] rounded-lg p-4 transition-all md:max-w-[75vw] lg:max-w-[60vw] duration-500"
	>
		<form method="post" enctype="application/x-www-form-urlencoded" class=" flex flex-col gap-5">
			<input
				bind:value={email}
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="email"
				required
                name="email"
				placeholder="Enter your email"
			/>
			<input
				bind:value={username}
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="text"
				required
                name="username"
				placeholder="Enter your username"
			/>
			<input
				bind:value={password}
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="password"
				required
                name="password"
				placeholder="Enter your password"
			/>
            <h1 class=" text-xs text-red-500 text-center">{error}</h1>
			<button disabled={loading} class="flex justify-center p-2 bg-blue-500 text-white rounded-md">
                {#if !loading}
                    <h1>Register</h1>
                {:else}
                    <Loading/>
                {/if}
			</button>
			<a class="text-sm text-blue-500 underline" href="/login"
				>Already have an account? Login instead</a
			>
		</form>
	</div>
</div>
