<script lang="ts">
  import axios from "axios";
  import { apiUrl } from "../../config"

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
    loading = true
    let params = { email, password };
    if (email == "" || password == "") {
      error = true
      errorMessage = "Invalid email or password"
      loading = false
      return;
    }
    if(! email.includes("@") || ! email.includes(".") ){
        error = true
        errorMessage = "Invalid email"
        loading = false
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
        loading = false
        console.log(err)
        const { message } = err.response.data;
        error = true;
        errorMessage = message;
      });
  }
</script>

<svelte:head>
  <title>YOOT | Authenticate</title>
</svelte:head>

<div class="" >
 
</div>