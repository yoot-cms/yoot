<script lang="ts">
	import Spinner from '../../components/icons/Spinner.svelte';
    import logger from '$lib/utils/logger';
    import { goto } from '$app/navigation';
	let auth_state: 0 | 1 = 0;
	let sending_code = false;
	let submitting = false;
	$: error_sending_code = '';
	$: error_submitting = '';
	let email = '';
	let auth_code = '';

	async function request_auth() {
		try {
            sending_code = true
			const req_url = new URL(`${window.location.origin}/api/auth/request`);
			req_url.searchParams.append('email', email);
			const auth_request_response = await fetch(req_url);
            sending_code = false
			if (auth_request_response.status !== 200) {
				error_sending_code = 'Something went wrong. Please retry or contact support';
				return;
			}
			error_sending_code = '';
			auth_state = 1;
		} catch (err) {
            logger("ERR", err as string, "RequestAuthClient")
            sending_code = false
			error_sending_code = 'Something went wrong. Please retry or contact support';
		}
	}

	async function submit_code() {
		try {
            submitting = true
			const req_url = new URL(`${window.location.origin}/api/auth/verify`);
			req_url.searchParams.append('email', email);
			req_url.searchParams.append('code', auth_code);
			const code_submit_response = await fetch(req_url);
            submitting = false
			if (code_submit_response.status !== 200 && code_submit_response.status !== 404) {
				error_submitting = 'Something went wrong. Please retry or contact support';
				return;
			}
			if (code_submit_response.status === 404) {
				error_submitting = 'Invalid code';
				return;
			}
			const data = await code_submit_response.json() as { auth_token: string };
            localStorage.setItem("auth_token", data.auth_token)
            goto('/projects')
		} catch (err) {
            logger("ERR", err as string, "SubmitAuthCode")
            submitting = false
			error_submitting = 'Something went wrong. Please retry or contact support';
		}
	}
</script>

<div class=" h-screen w-full flex flex-col items-center justify-center p-2">
	<div class=" w-full h-52 flex flex-col gap-5">
		<h1 class=" text-center text-3xl font-bold">Welcome (back)</h1>
		{#if auth_state === 0}
			<h1 class=" text-center">
				Enter your email below and we will send you a code to authenticate
			</h1>
			<form on:submit|preventDefault={request_auth} class=" flex flex-col items-center gap-2">
				<input
					type="email"
					class=" p-2 focus:outline-none rounded-md w-full border border-gray-500 text-center"
					placeholder="Your Email"
					required
					bind:value={email}
				/>
				<span class=" text-red-700 text-sm">{error_sending_code}</span>
				<button
					type="submit"
					class=" flex justify-center p-2 rounded-md border border-white text-white font-semibold bg-violet-700 w-full"
				>
					{#if sending_code}
						<Spinner />
					{:else}
						<h1>Get code</h1>
					{/if}
				</button>
			</form>
		{/if}
		{#if auth_state === 1}
			<h1 class=" text-center">Check your mail box and enter the 6 digit code you received</h1>
			<form on:submit|preventDefault={submit_code} class=" flex flex-col items-center gap-2">
				<input
					type="text"
					class=" p-2 focus:outline-none rounded-md w-full border border-gray-500 text-center"
					placeholder=""
					required
					maxlength="6"
					bind:value={auth_code}
				/>
				<span class="text-red-700 text-sm">{error_submitting}</span>
				<button type="submit" class="flex justify-center p-2 rounded-md text-white font-semibold bg-violet-700 w-full">
					{#if submitting}
						<Spinner />
					{:else}
						<h1>Submit</h1>
					{/if}
				</button>
			</form>
		{/if}
	</div>
</div>
