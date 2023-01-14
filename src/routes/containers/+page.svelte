<script lang="ts">
  import Container from "../../components/Container.svelte";
</script>

<svelte:head>
  <title>YOOT | Containers</title>
</svelte:head>

<div class=" h-full p-4 " >
  <!-- Main container -->
  <main class=" flex flex-col bg-white h-full  md:px-16 ">
    
    <!-- Form to add a new container -->
    <form class=" flex justify-between w-full mb-5 " >
      <input required type="text" class=" pl-2 h-[2.5rem] w-[80%] rounded-md border-2 p-1  focus:outline-gray-600" placeholder="Container name" name="" id="">
      <button type="submit" class="flex rounded-md w-[15%] border-2 justify-center items-center" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
        </svg>          
      </button>
    </form>

    <div class="overflow-y-scroll space-y-3 md:space-y-0 max-h-full md:grid md:grid-cols-2 md:gap-5 " >
      <Container/>
      <Container/>
      <Container/>
      <Container/>
    </div>

  </main>
</div>