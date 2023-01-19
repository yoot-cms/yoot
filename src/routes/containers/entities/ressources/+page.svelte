<script lang="ts">
  import { browser } from "$app/environment";
  import { location } from "../../../../stores";
  if (browser) {
    location.update(_value=>window.location.pathname);
  }
</script>

<svelte:head>
  <title>YOOT | Ressources</title>
</svelte:head>

<h1>And these are your ressources cuh</h1>
