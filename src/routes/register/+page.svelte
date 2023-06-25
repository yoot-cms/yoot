<script lang="ts">
    import type { PageData, ActionData } from "./$types";
    export let form : ActionData
    import Loading from "$lib/components/Loading.svelte";
    import { loading } from "./store"
</script>

<div class="fixed flex h-screen w-screen items-center justify-center bg-white">
	<div
		class="max-h-[75vh] lg:max-h-[60vh] max-w-[90vw] rounded-lg p-4 transition-all md:max-w-[75vw] lg:max-w-[60vw] duration-500"
	>
		<form method="post" class=" flex flex-col gap-5">
			<input
				class={`border-2 ${form?.error? "border-red-500" :"border-gray-500 "} focus:outline-none p-2 rounded-md`}
				type="email"
				required
                name="email"
                value={form?.email ?? ""}
				placeholder="Enter your email"
			/>
			<input
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="text"
				required
                name="username"
                value={form?.username ?? ""}
				placeholder="Enter your username"
			/>
			<input
				class="border-2 border-gray-500 focus:outline-none p-2 rounded-md"
				type="password"
				required
                name="password"
				placeholder="Enter your password"
			/>
            {#if form?.error}
               <small class="text-center text-red-700 ">Email already in use</small> 
            {/if}
			<button on:click={()=>{ loading.set(true) }} disabled={$loading} class="flex justify-center p-2 bg-blue-500 text-white rounded-md">
                {#if !$loading}
                    <h1>Register</h1>
                {:else}
                    <Loading/>
                {/if}
			</button>
			<a class="text-sm text-blue-500 underline" href="/login"
				>Already have an account? Login instead</a
			>
		</form>
	</div>
</div>
