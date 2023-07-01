<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	import toast from 'svelte-french-toast';
	let loading = false;
	const handle_login: SubmitFunction = async () => {
		loading = true;
		return async ({ update, result }) => {
			loading = false;
			switch (result.status) {
				case 400:
					toast.error('Invalid credentials');
				case 500:
					toast.error('Something went wrong. Please retry');
			}
			await update();
		};
	};
</script>

<div class="fixed flex h-screen w-screen items-center justify-center bg-white">
	<div
		class="max-h-[75vh] lg:max-h-[60vh] max-w-[90vw] rounded-lg p-4 transition-all md:max-w-[75vw] lg:max-w-[60vw] duration-500"
	>
		<form method="post" use:enhance={handle_login} class=" flex flex-col gap-2">
			<input
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="email"
				autocomplete="off"
				name="email"
				required
				placeholder="Enter your email"
			/>
			<input
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="password"
				autocomplete="off"
				name="password"
				required
				placeholder="Enter your password"
			/>
			<button disabled={loading} class="flex justify-center p-2 bg-blue-500 text-white rounded-md">
				{#if !loading}
					<h1>Login</h1>
				{:else}
					<Loading />
				{/if}
			</button>
			<a class="text-sm text-blue-500 underline" href="/register"
				>Don't have an account ? Register instead</a
			>
		</form>
	</div>
</div>
