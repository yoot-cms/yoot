<script lang="ts" >
    import Header from "../../components/Header.svelte";
</script>

<main class=" h-screen" >
    <div class=" h-[10%] " >
        <Header/>
    </div>
    <div class=" h-[90%] " >
        <slot />
    </div>
</main>