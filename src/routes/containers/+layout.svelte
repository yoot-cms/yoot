<script lang="ts" >
    import LocationIndicator from "../../components/LocationIndicator.svelte";
</script>

<div class=" h-screen ">
    
    <!-- Takes 5% of parent height -->
    <header class=" flex justify-between items-center p-3 border-b-2 h-[5%]" >
        <h1 class=" text-3xl" >
            YOOT
        </h1>
        <div class=" flex gap-10" >
            <a class=" hover:underline" href="/docs">Help</a>
            <a class=" hover:underline" href="/docs">Developers</a>
            <a class=" hover:underline" href="/upgrade">Upgrade</a>
        </div>
    </header>
    
    <!-- Takes 5% of parent height -->
    <LocationIndicator/>
    
    <!-- Takes 90% of parent height -->
    <main class=" p-3 h-[90%] ">
        <slot />
    </main>
</div>