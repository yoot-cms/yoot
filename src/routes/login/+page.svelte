<script lang="ts">
	let email = '';
	let password = '';
	async function login() {
		try {
			const response = await fetch('http://localhost:5173/api/auth/login', {
				method: 'POST',
				body: JSON.stringify({ email, password })
			});
            if (response.status===500) {
                alert("Something went wrong. Please try again or contact us")
            }
            if (response.status===400) {
                alert("Invalid credentials")
            }
            if (response.status===200) {
                const { token } = await response.json() as { token : string }
                console.log(token)
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
			<button class="p-2 bg-blue-500 text-white rounded-md">
				<h1>Login</h1>
			</button>
			<a class="text-sm text-blue-500 underline" href="/register"
				>Don't have an account ? Register instead</a
			>
		</form>
	</div>
</div>
