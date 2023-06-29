<script lang="ts">
	export let name: string;
    type Colors = 'text' | 'number' | 'image' | 'boolean' ;
	export let schema: { name: string; type: Colors }[] 	
	function color(type: string | Colors) {
		switch (type) {
			case 'image':
				return 'text-yellow-500';
			case 'number':
				return 'text-orange-500';
			case 'text':
				return 'text-sky-500';
		}
	}
</script>

<div class=" max-h-full shrink-0 hover:cursor-pointer w-[300px] rounded-lg p-5 flex flex-col drop-shadow-lg hover:drop-shadow-xl bg-neutral-50">
	<div class=" mb-2 ">
		<span class="text-neutral-800 text-2xl font-bold">{name}</span>
	</div>
	<div class="overflow-y-auto pr-5 h-full pb-5 text-lg">
		{#each schema as property}
			<div class="flex w-full items-center justify-between pt-6">
				<span class="font-medium text-neutral-600">{property.name}</span>
				<span class={color(property.type)}>{property.type}</span>
			</div>
		{/each}
	</div>
</div>
