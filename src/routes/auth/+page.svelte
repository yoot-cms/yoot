<script lang="ts">
	let auth_state = 0;
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
					class=" p-2 focus:outline-none rounded-md w-full border border-gray-500"
					placeholder="Your Email"
					required
				/>

				<button
					class=" p-2 rounded-md border border-white text-white font-semibold bg-violet-700 w-full"
				>
					Get code
				</button>
			</form>
		{/if}
        {#if auth_state===1}
            <h1>Something</h1>
        {/if}
	</div>
</div>
