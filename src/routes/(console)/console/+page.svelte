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
	<div class=" p-1 h-[100%] w-full">
        <h1 class=" text-xl font-bold">Welcome {username}</h1>
	</div>
{:else}
	<div class=" p-1 h-[100%] w-full">
		<div
			class=" p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col items-center justify-center"
		>
			<Loading_1/>
			<div />
		</div>
	</div>
{/if}
