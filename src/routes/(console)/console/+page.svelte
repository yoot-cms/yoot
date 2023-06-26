<script lang="ts">
    import type { PageServerData } from './$types';
    export let data : PageServerData
    import Loading_1 from '$lib/components/Loading_1.svelte';
    import { location } from '$lib/stores';
    location.set("/console")
</script>

<div class=" p-1 h-[100%] w-full">
    <h1 class=" text-xl font-bold">Welcome {data.user.username}</h1>
</div>
