<script lang="ts">
    import type { PageData } from "./$types";
    import { location, breadcrumb_items } from "$lib/stores";
    location.set("/console/projects")
    export let data : PageData
	breadcrumb_items.set([
		{ title: data.name, path: `/console/projects/${data.name}` },
		{ title: data.entity, path: `/console/projects/${data.name}/${data.entity}` }
	]);
</script>

<h1>Welcome nigga</h1>
