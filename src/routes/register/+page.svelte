<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	import toast from 'svelte-french-toast';
	let loading = false;
	const handle_registration: SubmitFunction = async () => {
		loading = true;
		return async ({ update, result }) => {
			loading = false;
			switch (result.status) {
				case 409:
					toast.error('Email already in use');
					return;
			}
			toast.success('Account created!');
			window.location.href = '/login';
			await update();
		};
	};
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<img
			class="mx-auto h-10 w-auto"
			src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
			alt="Your Company"
		/>
		<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
			<h1>Welcome to YOOT</h1>
			<div class="m-auto flex justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><rect width="10" height="10" x="1" y="1" fill="#414ce1" rx="1"
						><animate
							id="svgSpinnersBlocksShuffle30"
							fill="freeze"
							attributeName="x"
							begin="0;svgSpinnersBlocksShuffle3b.end"
							dur="0.2s"
							values="1;13"
						/><animate
							id="svgSpinnersBlocksShuffle31"
							fill="freeze"
							attributeName="y"
							begin="svgSpinnersBlocksShuffle38.end"
							dur="0.2s"
							values="1;13"
						/><animate
							id="svgSpinnersBlocksShuffle32"
							fill="freeze"
							attributeName="x"
							begin="svgSpinnersBlocksShuffle39.end"
							dur="0.2s"
							values="13;1"
						/><animate
							id="svgSpinnersBlocksShuffle33"
							fill="freeze"
							attributeName="y"
							begin="svgSpinnersBlocksShuffle3a.end"
							dur="0.2s"
							values="13;1"
						/></rect
					><rect width="10" height="10" x="1" y="13" fill="#414ce1" rx="1"
						><animate
							id="svgSpinnersBlocksShuffle34"
							fill="freeze"
							attributeName="y"
							begin="svgSpinnersBlocksShuffle30.end"
							dur="0.2s"
							values="13;1"
						/><animate
							id="svgSpinnersBlocksShuffle35"
							fill="freeze"
							attributeName="x"
							begin="svgSpinnersBlocksShuffle31.end"
							dur="0.2s"
							values="1;13"
						/><animate
							id="svgSpinnersBlocksShuffle36"
							fill="freeze"
							attributeName="y"
							begin="svgSpinnersBlocksShuffle32.end"
							dur="0.2s"
							values="1;13"
						/><animate
							id="svgSpinnersBlocksShuffle37"
							fill="freeze"
							attributeName="x"
							begin="svgSpinnersBlocksShuffle33.end"
							dur="0.2s"
							values="13;1"
						/></rect
					><rect width="10" height="10" x="13" y="13" fill="#414ce1" rx="1"
						><animate
							id="svgSpinnersBlocksShuffle38"
							fill="freeze"
							attributeName="x"
							begin="svgSpinnersBlocksShuffle34.end"
							dur="0.2s"
							values="13;1"
						/><animate
							id="svgSpinnersBlocksShuffle39"
							fill="freeze"
							attributeName="y"
							begin="svgSpinnersBlocksShuffle35.end"
							dur="0.2s"
							values="13;1"
						/><animate
							id="svgSpinnersBlocksShuffle3a"
							fill="freeze"
							attributeName="x"
							begin="svgSpinnersBlocksShuffle36.end"
							dur="0.2s"
							values="1;13"
						/><animate
							id="svgSpinnersBlocksShuffle3b"
							fill="freeze"
							attributeName="y"
							begin="svgSpinnersBlocksShuffle37.end"
							dur="0.2s"
							values="1;13"
						/></rect
					></svg
				>
			</div>
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form use:enhance={handle_registration} class="space-y-6" method="POST">
			<div>
				<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
					>Email address</label
				>
				<div class="mt-2">
					<input
						name="email"
						type="email"
						autocomplete="off"
						required
						class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div>
				<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Username</label
				>
				<div class="mt-2">
					<input
						name="username"
						type="text"
						autocomplete="off"
						required
						class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div>
				<div class="flex items-center justify-between">
					<label for="password" class="block text-sm font-medium leading-6 text-gray-900"
						>Password</label
					>
				</div>
				<div class="mt-2">
					<input
						name="password"
						type="password"
						autocomplete="off"
						required
						class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<button
          disabled={loading}
					type="submit"
					class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
          {#if !loading}
            <h1>Register</h1>
          {:else}
            <Loading/>
          {/if}
          </button
				>
			</div>
		</form>

		<p class="mt-10 text-center text-sm text-gray-500">
			Already have an account?
			<a href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
				>Login instead</a
			>
		</p>
	</div>
</div>
