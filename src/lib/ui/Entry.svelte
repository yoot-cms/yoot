<script lang="ts">
	const entity = {
		name: 'Person',
		schema: {
			name: 'text',
			age: 'number',
			profile: 'image',
			ssn: 'text'
		}
	};
	const entries = [
		{
			id: 'id',
			entity: 'entity',
			value: {
				name: {
					type: 'text',
					value: 'Joseph'
				},
				age: {
					type: 'number',
					value: 10
				},
				profile: {
					type: 'image',
					value: 'https://picsum.photos/200/200'
				},
				ssn: {
					type: 'text',
					value: '13456789876543456764355656543567543567u54'
				}
			}
		},
		{
			id: 'id',
			entity: 'entity',
			value: {
				name: {
					type: 'text',
					value: 'Josias'
				},
				age: {
					type: 'number',
					value: 100
				},
				profile: {
					type: 'image',
					value: 'https://picsum.photos/200/200'
				},
				ssn: {
					type: 'text',
					value: '13456789876543456764355656543567543567u54'
				}
			}
		}
	];
</script>

<div class="w-[1000px] h-[500px] overflow-x-scroll bg-yellow-400 flex flex-col gap-3">
	<div class="p-3 flex gap-5 w-full justify-between">
		{#each Object.entries(entity.schema) as [field, type]}
			<h1 class=" text-center w-52 shrink-0">{field}</h1>
		{/each}
		<h1 class=" text-center w-52 shrink-0">Actions</h1>
	</div>
	<div class="p3 flex flex-col h-52 gap-5 w-full justify-between">
		{#each entries as entry}
			<div class="p-3 flex gap-5 w-full justify-between">
				{#each Object.entries(entry.value) as [field, value]}
					{#if value.type === 'image'}
						<div class="w-52 h-52 shrink-0">
							<img src={value.value.toString()} alt="" />
						</div>
					{:else}
						<h1 class="break-all text-center w-52 shrink-0">{value.value}</h1>
					{/if}
				{/each}
				<h1 class="break-all text-center w-52 shrink-0">ActionsSSSSSSSSS</h1>
			</div>
		{/each}
	</div>
</div>
