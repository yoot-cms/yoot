<script lang="ts">
    import type { PageServerData } from "./$types";
    import { location } from "$lib/stores";
    import { enhance } from "$app/forms";
    location.set("/console/projects")
    export let data : PageServerData
</script>

{data.projects}
<h1>Hello bozo</h1>
