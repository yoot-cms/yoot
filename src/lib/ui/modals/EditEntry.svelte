<script lang="ts">
  import Close from "$lib/components/Close.svelte";
  import EntryField from "../EntryField.svelte";
  import { show_edit_entry, targetted_edited_entry } from "$lib/stores"
  let loading  = false
  $: ({ schema, id, entity, value } = $targetted_edited_entry)
  $: console.log(schema, entity, value, id)
  $: fields = Object.entries(schema)
</script>

{#if $show_edit_entry}
	<div
		class=" z-30 fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-black/50"
	>
		<div class=" p-5 bg-white w-[30rem] rounded-lg flex flex-col gap-5">
			<div class=" flex justify-between items-center">
				<h1 class=" font-bold text-xl truncate">Update entry</h1>
				<button
					on:click={() => {
						if (!loading) {
							show_edit_entry.set(false);
						}
					}}
				>
					<Close />
				</button>
			</div>
			<form
				action="?/create_entry"
				method="post"
				class="flex flex-col justify-between gap-5"
				enctype="multipart/form-data"
			>
				<input type="text" name="entity" hidden />
				<input type="text" name="fields" hidden />
				<div class="max-h-[500px] flex flex-col gap-2 overflow-y-scroll no-scroll">
					{#each fields as [field_name, data_type]}
						<EntryField {data_type} {field_name} />
					{/each}
				</div>
				<button
					disabled={loading}
					class="p-2 justify-center flex items-center bg-blue-400 h-10 rounded-md text-white"
				>
					<h1>Update Entry</h1>
				</button>
			</form>
		</div>
	</div>
{/if}
