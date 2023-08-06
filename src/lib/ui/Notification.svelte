<script lang="ts">
  import Check from "$lib/components/Check.svelte";
  import OpenInvitation from "$lib/components/OpenInvitation.svelte";
  export let notification: { id:string, type:"notification"|"invitation", read:boolean, invitation:string, notifiee:string }
  export let show_read: boolean
</script>

<div hidden={show_read&&notification.read} class={` w-full ${notification.read?"bg-white":"bg-neutral-300"} rounded-md p-2 flex justify-between `}>
  <h1>Some message</h1>
  <div class=" flex gap-2">
    {#if notification.type==="invitation"}
      <button>
        <OpenInvitation/>
      </button>
    {:else}
      <button>
        <Check/>
      </button>
    {/if}
    <button class=" ">
      <Check/>
    </button>
  </div>
</div>
