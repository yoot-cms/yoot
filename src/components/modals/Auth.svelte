<script lang="ts">
	import { auth_modal_is_visible } from '../../stores';
	import CloseButton from '../buttons/CloseButton.svelte';
	let user_email = '';
	let auth_code = '';
	let code_sent = false;

	function close() {
		auth_modal_is_visible.set(false);
	}
</script>

<main
	on:click={() => {
		auth_modal_is_visible.set(false);
	}}
	on:keyup={() => {}}
	class={`${
		$auth_modal_is_visible ? 'scale-100 w-[90%] h-96' : 'scale-0'
	} absolute w-full h-full flex flex-col bg-black items-center justify-center opacity-50`}
/>

<div
	class={`${
		$auth_modal_is_visible ? 'scale-100 w-[90%] h-96' : 'scale-0'
	} transform duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md transition-all `}
>
	<div class=" w-full h-[10%] border-b flex items-center justify-between p-1">
		<h1>Start Yooting!</h1>
		<CloseButton on_click={close} />
	</div>
</div>
