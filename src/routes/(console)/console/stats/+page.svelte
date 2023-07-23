<script lang="ts">
  import { location, breadcrumb_items } from "$lib/stores";
  location.set('/console/stats')
	breadcrumb_items.set([{ title: 'Shared', path: '/console/stats' }]);
</script>
