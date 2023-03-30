<script lang="ts">
    import SimpleButton from "../components/buttons/SimpleButton.svelte";
    import OutlineButton from "../components/buttons/OutlineButton.svelte";
</script>

<header class="p-2 flex w-full fixed justify-between items-baseline absolute top-0">
    <h1 class=" font-bold text-2xl">YOOT</h1>
    <h1>Github</h1>
</header>

<main class="h-screen w-full">
	<!-- Hero section -->
	<section class=" h-screen flex flex-col items-center justify-center text-center gap-10">
		<div class=" space-y-5">
			<h1 class=" font-bold text-5xl">Manage your content as easily as One Two Three</h1>
			<section class=" text-gray-400">
				<h1>
					YOOT is a minimalistic, super simple to use CMS designed for simplicity Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Distinctio nisi nihil eos a modi ipsum consequuntur
					error? Nemo ut aspernatur omnis blanditiis nesciunt repellat, dignissimos amet tenetur
					sint voluptatibus reiciendis.
				</h1>
			</section>
		</div>
		<div class=" flex w-full justify-center gap-10 p-2">
            <SimpleButton text={"Get Started"} />
            <OutlineButton text={"Learn more"} />
		</div>
	</section>
</main>
