<script lang="ts">
    import SideBar from "$lib/components/ui/SideBar.svelte";
</script>

<div class=" h-screen w-full">
    <!-- Header-->
    <div class=" flex justify-between items-center border-b-2 p-2 w-full h-[8%] ">
        <h1 class="text-3xl font-bold">YOOT</h1>
        <div class=" flex gap-5 items-center">
            <a href="/pricing" class="underline">Pricing</a>
            <a href="/docs" class="underline">Documentation</a>
            <button class="underline">Quick links</button>
        </div>
    </div>
    <div class=" flex w-full h-[92%] ">
        <SideBar/>
        <div class=" w-[85%] ">
            <slot/>
        </div>
    </div>
</div>
