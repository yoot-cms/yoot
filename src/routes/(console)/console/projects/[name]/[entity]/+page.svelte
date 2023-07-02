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

<div class="flex flex-col overflow-hidden">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead
            class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
            <tr>
              <th scope="col" class="px-6 py-4">First</th>
              <th scope="col" class="px-6 py-4">Last</th>
              <th scope="col" class="px-6 py-4">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
              <td class="whitespace-nowrap px-6 py-4">Mark</td>
              <td class="whitespace-nowrap px-6 py-4">Otto</td>
              <td class="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr
              class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
              <td class="whitespace-nowrap px-6 py-4">Jacob</td>
              <td class="whitespace-nowrap px-6 py-4">Thornton</td>
              <td class="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr
              class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
              <td
                colspan="2"
                class="whitespace-nowrap px-6 py-4 text-center">
                Larry the Bird
              </td>
              <td class="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
