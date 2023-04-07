<script lang="ts">
	import Spinner from "../../components/icons/Spinner.svelte";
    let auth_state = 0;
    let sending_code = true
    let submitting = false
    $: error_sending_code = ""
    $: error_submitting = ""

</script>

<div class=" h-screen w-full flex flex-col items-center justify-center p-2">
	<div class=" w-full h-52 flex flex-col gap-5">
		<h1 class=" text-center text-3xl font-bold">Welcome (back)</h1>
		{#if auth_state === 0}
			<h1 class=" text-center">
				Enter your email below and we will send you a code to authenticate
			</h1>
			<form class=" flex flex-col items-center gap-2">
				<input
					type="email"
					class=" p-2 focus:outline-none rounded-md w-full border border-gray-500 text-center"
					placeholder="Your Email"
					required
				/>
                <span class=" text-red-700 text-sm" >{error_sending_code}</span>
				<button
					class=" flex justify-center p-2 rounded-md border border-white text-white font-semibold bg-violet-700 w-full"
				>
                    {#if sending_code}
                        <Spinner/>
                    {:else}
                        <h1>Get code</h1>
                    {/if}
				</button>
			</form>
		{/if}
		{#if auth_state === 1}
			<h1 class=" text-center">Check your mail box and enter the 6 digit code you received</h1>
			<form class=" flex flex-col items-center gap-2">
				<input
					type="text"
					class=" p-2 focus:outline-none rounded-md w-full border border-gray-500 text-center"
					placeholder=""
					required
                    maxlength="6"
				/>
                <span class="text-red-700 text-sm">{error_submitting}</span>
                <button class=" p-2 rounded-md text-white font-semibold bg-violet-700 w-full" >
                    Submit
                </button>
			</form>
		{/if}
	</div>
</div>
