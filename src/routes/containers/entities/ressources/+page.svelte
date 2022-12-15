<script lang="ts">
  import { browser } from "$app/environment";
  import { location } from "../../../../stores/stores";
  if (browser) {
    location.update(_value=>window.location.pathname);
  }
</script>

<svelte:head>
  <title>YOOT | Ressources</title>
</svelte:head>

<h1>And this is your ressources cuh</h1>
