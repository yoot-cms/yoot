<script lang="ts">
  import axios from "axios";
  import { apiUrl } from "../../config"
  // const url = "http://localhost:5000/auth/";

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
      .post(apiUrl + `${action == "REGISTER" ? "auth/register" : "auth/login"}`, params)
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

<div class=" flex flex-col h-screen items-center justify-center gap-5" >
  <div class=" text-5xl font-bold" >
    <h1 >YOOT</h1>
  </div>
  <h1 class=" text-2xl text-center" >
    Let's start something big together
  </h1>
  <input bind:value={email} type="text" class=" auth_form_field" placeholder="Email">
  <input bind:value={password} type="password" class=" auth_form_field" placeholder="Password">
  {#if error}
  <span class=" text-red-500" >{errorMessage}</span>
  {/if}
  <div>
    <button class=" w-36 cta" on:click={authenticate} >{action}</button>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <h1 class=" underline cursor-pointer text-blue-500" on:click={()=>{ action=action=="REGISTER"?"LOGIN":"REGISTER" }} >{alternative}</h1>
</div>
