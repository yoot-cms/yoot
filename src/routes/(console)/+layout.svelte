<script lang="ts">
    import SideBar from "$lib/ui/SideBar.svelte";
</script>

<div class=" w-full h-screen flex ">
    <SideBar />
    <div class=" w-full h-full bg-neutral-100">
        <slot/>
    </div>
</div>
