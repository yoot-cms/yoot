<script lang="ts">
</script>

<div class="fixed flex h-screen w-screen items-center justify-center bg-white">
	<div
		class="max-h-[75vh] lg:max-h-[60vh] max-w-[90vw] rounded-lg p-4 transition-all md:max-w-[75vw] lg:max-w-[60vw] duration-500"
	>
        <form class=" flex flex-col gap-5 ">
            <input class="border-2 border-gray-500 focus:outline-none p-2 rounded-md" type="email" required placeholder="Enter your email">
            <input class="border-2 border-gray-500 focus:outline-none p-2 rounded-md" type="password" required placeholder="Enter your password">
            <button class="p-2 bg-blue-500 text-white rounded-md">
                <h1>Login</h1>
            </button>
            <a class="text-sm text-blue-500 underline" href="/register">Don't have an account ? Register instead</a>
        </form>
	</div>
</div>
