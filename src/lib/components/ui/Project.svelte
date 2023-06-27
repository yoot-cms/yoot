<script lang="ts">
	export let name: string;
    let show_options = false
</script>

<button
	on:click={() => {
		alert('You clicked me toooo');
	}}
	class="text-neutral-500 hover:border-neutral-500 relative flex justify-center text-center items-center w-72 h-52 rounded-xl shadow-md border-1 p-2"
>
	<button
		on:click={(event) => {
			event.stopPropagation();
			show_options = !show_options
		}}
		class={` ${show_options?"rotate-90":""} transform duration-200 z-10 absolute top-[3%] right-[3%]`}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class=" stroke-neutral-500 w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	</button>
	<button
		on:click={(event) => {
			event.stopPropagation();
			alert('You clicked jere ');
		}}
		class={`z-10 ${show_options? " scale-100 translate-y-8  stroke-neutral-500 hover:stroke-red-500 " : " translate-y-0 scale-0 "} transform transition-all duration-200 absolute top-[3%] right-[3%]`}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			class=" w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
			/>
		</svg>
	</button>
	<h1>{name}</h1>
</button>
