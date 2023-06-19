<script lang="ts">
	import { goto } from "$app/navigation";
    import Loading from "$lib/components/Loading.svelte";
    import { API_URL } from "$lib/utils";
	let email = '';
	let password = '';
    let loading = false
    let error = ""
	async function login() {
        loading = true
        error = ""
		try {
			const response = await fetch(`${API_URL}/auth/login`, {
				method: 'POST',
				body: JSON.stringify({ email, password })
			});
            loading = false
            if (response.status===500) {
                error = "Something went wrong. Please try again or contact us"
            }
            if (response.status===400) {
                error = "Invalid credentials"
            }
            if (response.status===200) {
                const { token } = await response.json() as { token : string }
                localStorage.setItem("token", token)
                goto("/dashboard")
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
		<form on:submit|preventDefault={login} class=" flex flex-col gap-5">
			<input
				bind:value={email}
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="email"
				required
				placeholder="Enter your email"
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
                    <h1>Login</h1>
                {:else}
                    <Loading/>
                {/if}
			</button>
			<a class="text-sm text-blue-500 underline" href="/register"
				>Don't have an account ? Register instead</a
			>
		</form>
	</div>
</div>
