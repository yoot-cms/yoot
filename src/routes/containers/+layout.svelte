<script lang="ts" >
    import LocationIndicator from "../../components/LocationIndicator.svelte";
</script>

<header class=" flex justify-between items-baseline p-3 border-b-2" >
    <h1 class=" text-3xl" >
        YOOT
    </h1>
    <div class=" flex gap-10" >
        <a class=" hover:underline" href="/docs">Help</a>
        <a class=" hover:underline" href="/docs">Developers</a>
        <a class=" hover:underline" href="/upgrade">Upgrade</a>
    </div>
</header>

<LocationIndicator/>

<main class=" p-3">
    <slot />
    
</main>