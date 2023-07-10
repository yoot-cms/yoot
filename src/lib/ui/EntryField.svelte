<script lang="ts">
	import ImagePreview from './ImagePreview.svelte';
	import Discard from '$lib/components/Discard.svelte';
	export let data_type: string;
	export let field_name: string;
	let image_element: HTMLInputElement | null;
	let image: Blob;
	let loaded_preview = false;
	function preview_image(input_name: string) {
		image_element = document.getElementById(input_name) as HTMLInputElement;
		let file = image_element.files ? image_element.files[0] : null;
		image = file as Blob;
		loaded_preview = true;
	}
</script>

{#if data_type === 'Text'}
	<div class="flex flex-col gap-2 ">
		<h1 class="">{field_name}</h1>
		<input
			required
			class=" border p-2 rounded-md w-full focus:outline-none"
			type="text"
			name={field_name}
		/>
	</div>
{/if}

{#if data_type === 'Number'}
	<div class="flex flex-col gap-2 ">
		<h1 class="">{field_name}</h1>
		<input
			required
			class=" border p-2 rounded-md w-full focus:outline-none"
			type="number"
			name={field_name}
		/>
	</div>
{/if}

{#if data_type === 'Boolean'}
	<div class=" flex flex-col gap-2">
		<h1 class="">{field_name}</h1>
		<label class="relative inline-flex items-center cursor-pointer">
			<input type="checkbox" name={field_name} class="sr-only peer" />
			<div
				class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
			/>
		</label>
	</div>
{/if}

{#if data_type === 'Image'}
	<div class="flex flex-col gap-2 w-full h-full relative">
		<div class="flex gap-2">
			<h1>{field_name}</h1>
		</div>
		<div class="flex">
			{#if loaded_preview}
				<div class=" w-full relative">
					<img class=" w-full max-h-[200px]" src={window.URL.createObjectURL(image)} alt="" />
					<button
						on:click|preventDefault={() => {
							loaded_preview = false;
						}}
						class="bg-red-500 rounded-full z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
					>
						<Discard />
					</button>
				</div>
			{/if}
			<div class="relative w-full" hidden={loaded_preview}>
				<label
					for={field_name}
					class="flex min-h-[175px] w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-primary p-6"
				>
					<div>
						<input
							on:change={(event) => {
								event.preventDefault();
								preview_image(field_name);
							}}
							type="file"
							accept="image/*"
							name={field_name}
							id={field_name}
							class="sr-only"
						/>
						<span
							class="mx-auto mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-stroke bg-white"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M2.5013 11.666C2.96154 11.666 3.33464 12.0391 3.33464 12.4993V15.8327C3.33464 16.0537 3.42243 16.2657 3.57871 16.4219C3.73499 16.5782 3.94695 16.666 4.16797 16.666H15.8346C16.0556 16.666 16.2676 16.5782 16.4239 16.4219C16.5802 16.2657 16.668 16.0537 16.668 15.8327V12.4993C16.668 12.0391 17.0411 11.666 17.5013 11.666C17.9615 11.666 18.3346 12.0391 18.3346 12.4993V15.8327C18.3346 16.4957 18.0712 17.1316 17.6024 17.6004C17.1336 18.0693 16.4977 18.3327 15.8346 18.3327H4.16797C3.50493 18.3327 2.86904 18.0693 2.4002 17.6004C1.93136 17.1316 1.66797 16.4957 1.66797 15.8327V12.4993C1.66797 12.0391 2.04106 11.666 2.5013 11.666Z"
									fill="#3056D3"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M9.41074 1.91009C9.73618 1.58466 10.2638 1.58466 10.5893 1.91009L14.7559 6.07676C15.0814 6.4022 15.0814 6.92984 14.7559 7.25527C14.4305 7.58071 13.9028 7.58071 13.5774 7.25527L10 3.67786L6.42259 7.25527C6.09715 7.58071 5.56951 7.58071 5.24408 7.25527C4.91864 6.92984 4.91864 6.4022 5.24408 6.07676L9.41074 1.91009Z"
									fill="#3056D3"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M10.0013 1.66602C10.4615 1.66602 10.8346 2.03911 10.8346 2.49935V12.4994C10.8346 12.9596 10.4615 13.3327 10.0013 13.3327C9.54106 13.3327 9.16797 12.9596 9.16797 12.4994V2.49935C9.16797 2.03911 9.54106 1.66602 10.0013 1.66602Z"
									fill="#3056D3"
								/>
							</svg>
						</span>
						<span class="text-base text-body-color">
							Drag &amp; drop or
							<span class="text-primary underline"> browse </span>
						</span>
					</div>
				</label>
			</div>
		</div>
	</div>
{/if}
