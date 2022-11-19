
<svelte:head>
  <title>YOOT | Minimalistic CMS</title>
  <meta name="description" content="YOOT is a simple to use minimalistic CMS, designed for everyone running a content based business, dev or non dev YOOT is YOyoursOrs">
</svelte:head>

<div class=" flex justify-around items-center my-3" >
  <div>
    <h1 class=" text-2xl font-extrabold" >YOOT</h1>
  </div>
  <div class=" flex justify-between gap-10" >
    <button class=" cta">Docs</button>
    <button class=" cta">Get started</button>
  </div>
</div>

<div class=" text-center text-3xl mt-14" >
  <h1 class=" font-extrabold" >
    Content Management the <h1 >EASY way</h1>
  </h1>
</div>
<h1 class=" text-center text-xl my-5">
  Manage your content driven websites easily and without the need of developers
</h1>
<div class=" flex justify-center" >
  <button on:click={()=>{ window.location.href="/auth" }} class="cta my-5 " >Sign up now</button>
</div>