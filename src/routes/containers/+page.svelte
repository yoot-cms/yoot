<script lang="ts">
  import Container from "../../components/Container.svelte";
</script>

<svelte:head>
  <title>YOOT | Containers</title>
</svelte:head>

<main class=" h-full w-full" >
  <!-- Toolbar -->
  <form class="toolbar" >
    <input type="text" class="rounded-md border-2 p-1 focus:outline-none text-gray-500" placeholder="Container name" required>
    <button type="submit" class="submitButton" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
      </svg>      
    </button>
  </form>
  <!-- Containers -->
  <div class="containersContainer" >
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
    <Container/>
  </div>
</main>
  
<style>
  .toolbar{
    @apply flex justify-end h-[5%] p-1 border-b-2 gap-2 ;
  }

  .containersContainer{
    @apply h-[95%] overflow-y-scroll grid grid-cols-2 justify-items-center p-1 ;
  }
</style>