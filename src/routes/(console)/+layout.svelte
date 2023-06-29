<script lang="ts">
    import SideBar from "$lib/ui/SideBar.svelte";
    import { breadcrumb_items } from "$lib/stores"
</script>

<div class="  w-full h-screen flex ">
    <SideBar />
    <div class=" flex flex-col w-full h-full ">
        <div class=" flex justify-between items-center p-5 w-full h-20 border-b ">
            {#each $breadcrumb_items as breadcrumb_item}
               <a href={breadcrumb_item.path} class=" hover:underline ">{breadcrumb_item.title}</a> 
            {/each}
            <div class=" flex gap-5">
                <h1>Free</h1>
                <h1>Upgrade to pro</h1>
            </div>
        </div>
        <slot/>
    </div>
</div>
