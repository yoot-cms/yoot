<script lang="ts">
	import ApiKeys from "../ApiKeys.svelte";
	import Avatar from "../Avatar.svelte";
    import Projects from "../Projects.svelte";
	import Stats from "../Stats.svelte";
</script>

<div class=" w-[15%] h-[100%] border-r-2 flex flex-col p-2 gap-5">
    <button class=" bg-neutral-100 hover:bg-neutral-400 hover:text-white text-xl rounded-md p-3 flex items-center gap-2">
        <Projects/>
        <h1>Projects</h1>
    </button>
    <button class=" bg-neutral-100 hover:bg-neutral-400 hover:text-white text-xl rounded-md p-3 flex items-center gap-2">
        <ApiKeys/>
        <h1>API keys</h1>
    </button>
    <button class=" bg-neutral-100 hover:bg-neutral-400 hover:text-white text-xl rounded-md p-3 flex items-center gap-2">
        <Avatar/>
        <h1>Profile</h1>
    </button>
    <button class=" bg-neutral-100 hover:bg-neutral-400 hover:text-white text-xl rounded-md p-3 flex items-center gap-2">
        <Stats/>
        <h1>Stats</h1>
    </button>

</div>
