<script lang="ts">
    import { breadcrumb_items, location } from "$lib/stores";
	import type { PageServerData } from "./$types";
    location.set("/console/projects")
    export let data : PageServerData
    breadcrumb_items.set([{ title:"Projects", path:"/console/projects" }, { title:data.name, path:`/console/projects/${data.name}` }])
</script>

<div class="w-full h-full bg-neutral-100 flex justify-center">
    <h1>breh</h1>
</div>
