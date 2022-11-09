<script lang="ts">
  import axios from "axios";
  const url = "http://localhost:6000/auth/";

  let action: string = "REGISTER";
  let error: boolean = false;
  let errorMessage: string;
  let loading = false
  $: alternative =
    action == "REGISTER"
      ? "Already have an account? Login"
      : "Don't have an account yet? Register";
  let email: string = "";
  let password: string = "";
  function authenticate() {
    let params = { email, password };
    if (email == "" || password == "") {
      error = true
      errorMessage = "Invalid email or password"
      return;
    }
    if(! email.includes("@") || ! email.includes(".") ){
        error = true
        errorMessage = "Invalid email"
        return
    }
    axios
      .post(url + `${action == "REGISTER" ? "register" : "login"}`, params)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        window.location.href = "/dashboard";
        return;
      })
      .catch((err) => {
        console.log(err)
        const { message } = err.response.data;
        error = true;
        errorMessage = message;
      });
  }
</script>

<div
  class=" text-white h-screen w-full flex flex-col justify-center items-center bg-no-repeat bg-cover dark:bg-slate-600 "
  style="background-image: url('./ffflurry.svg');"
>
  <div class=" flex flex-col w-4/5 md:w-3/5 lg:w-2/5 rounded-md  items-center ">
    <div class=" w-4/5 md:w-3/5 lg:w-2/5 py-3 space-y-3  ">
      <div class=" flex flex-col gap-3 items-center justify-center h-full">
        <input bind:value={email}
          class=" w-full focus:outline-none text-center p-2 border rounded-md text-slate-500 "
          type="text"
          placeholder="email"
        />
        <input bind:value={password}
          class=" w-full focus:outline-none text-center p-2 border rounded-md text-slate-500 "
          type="password"
          placeholder="password"
        />
      </div>
    </div>
    {#if error}
    <p class=" text-red-500 font-bold" >{errorMessage}</p>
    {/if}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="authButton my-3 p-2 rounded-md cursor-pointer w-24 text-center"
      on:click={authenticate}
    >
      { !loading?action:"..." }
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      on:click={() => {
        action = action == "LOGIN" ? "REGISTER" : "LOGIN";
      }}
      class=" hover:underline cursor-pointer text-blue-500 "
    >
      {alternative}
    </div>
  </div>
</div>

<style>
  .authButton {
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  }
</style>
