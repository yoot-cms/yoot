<script lang="ts">
	export let name: string;
    type Colors = 'text' | 'number' | 'image' | 'boolean' ;
	export let schema : Record<string, string> 	
    $: schema_array = Object.entries(schema)
	function color(type: string | Colors) {
		switch (type) {
			case 'Image':
				return 'text-yellow-500';
			case 'Number':
				return 'text-orange-500';
			case 'Text':
				return 'text-sky-500';
		}
	}
</script>

<div class=" max-h-full shrink-0 hover:cursor-pointer w-[300px] rounded-lg p-5 flex flex-col drop-shadow-lg hover:drop-shadow-xl bg-neutral-50">
	<div class=" mb-2 ">
		<span class="text-neutral-800 text-2xl font-bold">{name}</span>
	</div>
	<div class="overflow-y-auto pr-5 h-full pb-5 text-lg">
		{#each schema_array as property}
			<div class="flex w-full items-center justify-between pt-6">
				<span class="font-medium text-neutral-600">{property[0]}</span>
				<span class={color(property[1])}>{property[1]}</span>
			</div>
		{/each}
	</div>
</div>
