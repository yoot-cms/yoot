<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	import toast from 'svelte-french-toast';
	import { goto } from '$app/navigation';
	let loading = false;
	const handle_registration: SubmitFunction = async () => {
		loading = true;
		return async ({ update, result }) => {
			loading = false;
			switch (result.status) {
				case 409:
					toast.error('Email already in use');
          return
			}
      toast.success('Account created!')
      goto('/login')
			await update();
		};
	};
</script>

<div class="fixed flex h-screen w-screen items-center justify-center bg-white">
	<div
		class="max-h-[75vh] lg:max-h-[60vh] max-w-[90vw] rounded-lg p-4 transition-all md:max-w-[75vw] lg:max-w-[60vw] duration-500"
	>
		<form use:enhance={handle_registration} method="post" class=" flex flex-col gap-2">
			<input
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="email"
				required
				autocomplete="off"
				name="email"
				placeholder="Enter your email"
			/>
			<input
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="text"
				autocomplete="off"
				required
				name="username"
				placeholder="Enter your username"
			/>
			<input
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="password"
				autocomplete="off"
				required
				name="password"
				placeholder="Enter your password"
			/>
			<button disabled={loading} class="flex justify-center p-2 bg-blue-500 text-white rounded-md">
				{#if !loading}
					<h1>Register</h1>
				{:else}
					<Loading />
				{/if}
			</button>
			<a class="text-sm text-blue-500 underline" href="/login"
				>Already have an account? Login instead</a
			>
		</form>
	</div>
</div>
