<script lang="ts">
	import { goto } from '$app/navigation';
	import SimpleButton from '../components/buttons/SimpleButton.svelte';
	import OutlineButton from '../components/buttons/OutlineButton.svelte';
	import GithubLogo from '../components/logos/GithubLogo.svelte';
    import Auth from '../components/modals/Auth.svelte';
    import { auth_modal_is_visible } from "../stores"

	async function get_started() {
		let auth_token = localStorage.getItem('auth_token') ?? '';
		if (auth_token !== '') {
			let auth_status = await fetch('https://api.yoot.site/user/login', {
				headers: {
					Authorization: `Bearer ${auth_token}`
				}
			}).then(res=> res.status);
            if(auth_status===200){
                goto("/containers")
                return
            }
		}
        auth_modal_is_visible.set(true)
	}
</script>

<header class="p-2 flex w-full fixed justify-between items-center absolute top-0">
	<h1 class=" font-bold text-2xl">YOOT</h1>
	<GithubLogo />
</header>

<Auth />

<main class="h-screen w-full p-2">
	<!-- Hero section -->
	<section class=" h-full flex flex-col items-center justify-center text-center gap-10">
		<div class=" space-y-5">
			<h1 class=" font-bold text-5xl">Content Management made Simple</h1>
			<section class=" text-gray-400">
				<h1>
					YOOT is a content management system designed for simplicity and ease-of-use. With its user
					friendly interface, and various integration method for developers, creating and managing
					content has never been easier. From small blogs to fully fledged eCommerce apps, YOOT's
					got you covered
				</h1>
			</section>
		</div>
		<div class=" flex w-full justify-center gap-10 p-2">
			<SimpleButton title={'Get Started'} on_click={get_started} />
			<OutlineButton title={'Learn more'} />
		</div>
	</section>
</main>

<footer class=" text-center absolute bottom-0 p-1 border-t w-full text-sm">
	<h1>
		Built by passionate developers @<a href="https://reexlabs.com" class=" underline font-bold"
			>REEX Labs</a
		>
	</h1>
</footer>
