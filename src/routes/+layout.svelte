<script>
  import "../app.css";
  import { Toaster } from "svelte-french-toast"
</script>

<Toaster />
<div class=" h-screen w-screen">
    <slot />
</div>
