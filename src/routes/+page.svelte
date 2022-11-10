<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  onMount(() => {
    if (browser) {
      if (!localStorage.getItem("token")) {
        window.location.href = "/auth";
      }
    }
  });
</script>

<div>Welcome to Pigeon</div>
