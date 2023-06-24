<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    import { API_URL } from "$lib/utils"
    import Loading_1 from '$lib/components/Loading_1.svelte';
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
			}).then(async (res) => {
                    if (res.status===401) {
                            localStorage.removeItem("token")
                            goto("/login")
                    }
                    return await res.json() as { data:{ username:string, email:string } }
                });
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
            <div class="p-2 flex gap-4">
                <button class=" p-3 w-52 bg-gray-500 rounded-md text-white">Projects</button>
                <button class=" p-3 w-52 bg-gray-500 rounded-md text-white">Api Keys</button>
            </div>
            <div class="p-2 flex gap-4">
                <button class=" p-3 w-52 bg-gray-500 rounded-md text-white">Stats</button>
                <button class=" p-3 w-52 bg-gray-500 rounded-md text-white">Profile</button>
            </div>
		</div>
	</div>
{:else}
	<div class=" p-1 relative h-screen w-full">
		<div
			class=" p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col items-center justify-center"
		>
			<Loading_1/>
			<div />
		</div>
	</div>
{/if}
