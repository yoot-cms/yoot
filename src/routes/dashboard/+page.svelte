<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    import { API_URL } from "$lib/utils"
	onMount(async () => {
		if (browser) {
			const token = localStorage.getItem('token') ?? '';
			if (token === '') {
				goto('/login');
			}
			const { data } = await fetch(`${API_URL}/user/info`, {
				headers: {
					Authorization: token
				}
			}).then(async (res) => (await res.json()) as { data:{email: string; username: string} });
            console.log(data.username)
			username = data.username;
            loading = false
		}
	});
	let loading = true;
	$: username = ""
</script>

{#if !loading}
	<div class=" p-1 relative h-screen w-full">
		<div
			class=" p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col items-center justify-center"
		>
			<h1 class="text-2xl font-bold">Welcome(back) {username}</h1>
			<div />
		</div>
	</div>
{:else}
    <h1>Loading</h1>
{/if}
