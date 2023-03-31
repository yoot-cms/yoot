<script lang="ts" >
    import { auth_modal_is_visible } from "../../stores";
    let user_email = ""
    let auth_code = ""
    let code_sent = false
</script>

<main hidden={!$auth_modal_is_visible}>
</main>
