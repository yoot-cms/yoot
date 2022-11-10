<script lang="ts" >
    export let name: string
</script>

<div class=" cc bg-cover rounded-xl  w-60 h-60 border border-white cursor-pointer text-center items-center flex justify-center hover:scale-105 hover:-translate-y-1 transition-all" >
    <div class=" backdrop-blur-md w-full h-full rounded-xl" >
        <h1 class=" font-bold" >
            {name}
        </h1>
    </div>
</div>

<style>
    .cc{
        background-image: url('gggyrate.svg');
    }
</style>