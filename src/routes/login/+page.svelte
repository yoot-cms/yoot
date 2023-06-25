<script lang="ts">
    import Loading from "$lib/components/Loading.svelte";
    import type { ActionData } from "./$types";
    export let form: ActionData
    import { loading } from "./store";
</script>

<div class="fixed flex h-screen w-screen items-center justify-center bg-white">
	<div
		class="max-h-[75vh] lg:max-h-[60vh] max-w-[90vw] rounded-lg p-4 transition-all md:max-w-[75vw] lg:max-w-[60vw] duration-500"
	>
		<form method="post" class=" flex flex-col gap-2">
			<input
				value={form?.email ?? ""}
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="email"
                name="email"
				required
				placeholder="Enter your email"
			/>
			<input
				value={form?.password ?? ""}
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="password"
                name="password"
				required
				placeholder="Enter your password"
			/>
            {#if form?.error}
                <small class=" text-center text-red-500 ">{form.error}</small>
            {/if}
			<button on:click={()=>{ loading.set(true) }} disabled={$loading} class="flex justify-center p-2 bg-blue-500 text-white rounded-md">
                {#if !$loading}
                    <h1>Login</h1>
                {:else}
                    <Loading/>
                {/if}
			</button>
			<a class="text-sm text-blue-500 underline" href="/register"
				>Don't have an account ? Register instead</a
			>
		</form>
	</div>
</div>
