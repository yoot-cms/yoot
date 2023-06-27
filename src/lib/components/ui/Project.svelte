<script lang="ts">
    export let name : string
    export let id: string
    import Options from "../Options.svelte";
</script>

<button class="hover:border-neutral-500 relative flex justify-center text-center items-center w-72 h-52 rounded-xl border-2 p-2 ">
    <Options />
    <h1>{name}</h1>
</button>
