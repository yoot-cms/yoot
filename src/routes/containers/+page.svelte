<script lang="ts">
  import { browser } from "$app/environment";
  import { location } from "../../stores/stores";
  if (browser) {
    location.update((_value)=>window.location.pathname);
  }
</script>

<svelte:head>
  <title>YOOT | Containers</title>
</svelte:head>

<!-- Location indicator -->
<div>cuh</div>
