<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	onMount(() => {
		if (browser) {
			let auth_token = localStorage.getItem('auth_token') ?? '';
			if (auth_token === '') {
				goto('/auth');
			}
		}
	});
</script>

<h1>You are authenticated nigg</h1>
