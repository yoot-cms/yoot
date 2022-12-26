<script lang="ts" >
  import { browser } from "$app/environment";
  import { location } from "../../../stores/stores";
  import { entityBuilderIsVisible } from "../../../stores/stores";
  if (browser) {
    location.update(_value=>window.location.pathname);
  }
</script>

<svelte:head>
    <title>YOOT | Entities</title>
</svelte:head>
