<script lang="ts">
	import { goto } from "$app/navigation";
    import Loading from "$lib/components/Loading.svelte";
    import { API_URL } from "$lib/utils";
	let email = '';
    let username = '';
	let password = '';
    let loading = false
    let error = ""
	async function register() {
        loading = true
        error = ""
		try {
			const response = await fetch(`${API_URL}/auth/register`, {
				method: 'POST',
				body: JSON.stringify({ email, password, username })
			});
            loading = false
            if (response.status===500) {
                error = "Something went wrong. Please try again or contact us"
            }
            if (response.status===409) {
                error = "Email already in use"
            }
            if (response.status===201) {
                goto("/login")
            }
		} catch (err) {
			console.log(err);
		}
	}
</script>

<div class="fixed flex h-screen w-screen items-center justify-center bg-white">
	<div
		class="max-h-[75vh] lg:max-h-[60vh] max-w-[90vw] rounded-lg p-4 transition-all md:max-w-[75vw] lg:max-w-[60vw] duration-500"
	>
		<form on:submit|preventDefault={register} class=" flex flex-col gap-5">
			<input
				bind:value={email}
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="email"
				required
				placeholder="Enter your email"
			/>
			<input
				bind:value={username}
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="text"
				required
				placeholder="Enter your username"
			/>
			<input
				bind:value={password}
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="password"
				required
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
