<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	onMount(() => {
		if (browser) {
			const auth_token = localStorage.getItem('auth_token') ?? '';
			if (auth_token === '') {
				goto('/auth');
			}
		}
	});
</script>

<slot />
