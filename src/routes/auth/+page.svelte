<script lang="ts">
  import { goto } from "$app/navigation";
  import { user_store } from "../../stores"
  import { api_url } from "../../config"
  import axios from "axios";
  let error = false;
  let error_message = ""
  let action = "Login";
  let email: string;
  let password: string;
  function switchAction() {
    error = false
    action = action == "Login" ? "Register" : "Login";
  }
  async function authenticate() {
    axios.post(
      `http://localhost:8000/auth/${action.toLocaleLowerCase()}`,
      {
        email,
        password
      }
    ).then((res)=>{
      const response = res.data
      switch (response.status) {
        case 404:
          error = true
          error_message = "User not found"
          break;
        case 400:
          error = true
          error_message = "Wrong password"
          break
        case 200:
          const token = response.token
          localStorage.setItem("token", token)
          user_store.set({
            token:token
          })
          goto("/containers")
      }
    }).catch( _ =>{
      error_message = "Something went wrong <br> Please try again or contact us "
      error = true
    })
  }
</script>

<svelte:head>
  <title>YOOT | Authenticate</title>
</svelte:head>


<div
  class=" h-screen w-full flex justify-center items-center bg-gray-100 px-2 "
>
  <div class=" h-96 flex flex-col justify-start items-center ">
    <div
      class=" bg-no-repeat bg-center bg-contain bg-[url('/logo.png')] w-16 h-16 "
    />
    <h1 class=" font-semibold text-2xl text-center mb-5">
      Let's start something big together!!
    </h1>

    <!-- Form -->
    <form
      on:submit|preventDefault={authenticate}
      class=" flex flex-col justify-center gap-2 "
    >
      <input
        bind:value={email}
        required
        class=" border border-grayscale-200 rounded-md p-2 w-[17rem] md:w-[24rem] lg:w-[34rem] focus:outline-none text-gray-400"
        placeholder="Email address"
        type="text"
      />
      <input
        bind:value={password}
        required
        class=" border border-grayscale-200 rounded-md p-2 w-[17rem] md:w-[24rem] lg:w-[34rem] focus:outline-none text-gray-400"
        placeholder="Password "
        type="password"
      />
      {#if error}
        <span class=" text-md text-red-500 text-center">{@html error_message}</span>
      {/if}
      <button
        class=" bg-indigo-500 rounded-md text-white p-2 flex justify-center h-10"
        type="submit"
      >
        {#if true}
          <h1>{action}</h1>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 animate-spin"
          >
            <path
              fill-rule="evenodd"
              d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
              clip-rule="evenodd"
            />
          </svg>
        {/if}
      </button>
    </form>
    <h1
      on:click={switchAction}
      on:keyup={()=>{}}
      class=" text-indigo-400 underline mt-5 cursor-pointer"
    >
      {action == "Login" ? "Register" : "Login"} instead
    </h1>
  </div>
</div>
