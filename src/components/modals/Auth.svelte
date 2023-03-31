<script lang="ts">
	import { auth_modal_is_visible } from '../../stores';
    import SmRefresh from '../icons/SmRefresh.svelte';
	import OutlineButton from '../buttons/OutlineButton.svelte';
	import SimpleButton from '../buttons/SimpleButton.svelte';
	import Loading from '../icons/Loading.svelte';
	let user_email = '';
	let auth_code = '';
	let code_sent = false;
	let auth_step = 0;
	let error_message = '';
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
	} absolute w-full h-full flex flex-col bg-black items-center justify-center opacity-60`}
/>

<div
	class={`${
		$auth_modal_is_visible ? 'scale-100 w-[90%] h-72' : 'scale-0'
	} transform duration-300 absolute top-1/2 
    left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl transition-all flex flex-col p-2`}
>
	<div class="h-[10%]">
		<h1 class=" font-bold text-lg">Start Yooting!</h1>
	</div>
	<form class=" hidden flex flex-col gap-2 h-[90%] justify-between">
		<div class=" flex flex-col my-auto gap-2" id="state-0">
			<h1>Enter your email below and we will send you a code to verify it's really you</h1>
			<input
				type="email"
				required
				placeholder="Your email"
				class=" border focus:outline-violet-500 rounded-md p-2"
			/>
			<span class="text-red-500 text-xs">Something went wrong, please retry or contact us</span>
		</div>
		<div class=" flex justify-between">
			<OutlineButton title={'Cancel'} />
			<SimpleButton>Next</SimpleButton>  
		</div>
	</form>
	<form class=" flex flex-col gap-2 h-[90%] justify-between">
		<div class=" flex flex-col my-auto gap-2" id="state-1">
			<h1>Enter the code you received</h1>
			<input
				type="text"
				required
				placeholder="Verification code"
				class=" border focus:outline-violet-500 rounded-md p-2"
			/>
			<div class="flex gap-2 items-center">
				<button class=" text-left text-xs text-violet-500 underline">Resend code</button>
                {#if true}
                    <Loading />
                {:else}
                    <h1 class=" text-xs text-green-500">Code sent!</h1>
                {/if}
			</div>
			<span class="text-red-500 text-xs">Something went wrong, please retry or contact us</span>
		</div>
		<div class=" flex justify-between">
			<OutlineButton title={'Cancel'} />
			<SimpleButton  >Login</SimpleButton>
		</div>
	</form>
</div>
