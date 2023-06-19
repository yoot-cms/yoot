<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	onMount(() => {
		if (browser) {
			const token = localStorage.getItem('token') ?? '';
			if (token === '') {
				goto('/login');
			}
		}
	});
</script>

<h1>Bienvenue sur votre dashboard</h1>
