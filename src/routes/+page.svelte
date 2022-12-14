<svelte:head>
  <title>YOOT | Minimalistic CMS</title>
  <meta
    name="description"
    content="YOOT is a simple to use minimalistic CMS, designed for everyone running a content based business, dev or non dev YOOT is YOyoursOrs"
  />
</svelte:head>


<div class=" p-5 " >
  
  <!-- Nav -->
  <div class="  flex justify-between items-center ">
    <div
      class=" bg-no-repeat bg-cover bg-center bg-[url('/logo.png')] h-10 w-10"
    />
    <div class=" flex justify-between gap-3 md:gap-6 lg:gap-10" >
      <a class=" hover:underline" href="#pricing">Pricing</a>
      <a class=" hover:underline" href="/docs">Docs</a>
      <a class=" hover:underline" href="/auth">Login</a>
    </div> 
  </div>
  
  <!-- Description -->
  <div class=" mt-10 md:text-center" >
    <h1 class=" font-extrabold text-3xl " > 
      Manage your content as easily as 1-2-3
    </h1>
    <div class="lg:w-[48rem] lg:m-auto " >
        <p class=" mt-10 text-gray-500 text-lg " >
          YOOT is a simple and intuitive CMS designed for developers and business owners alike. 
          With its user-friendly interface and powerful features, YOOT makes it easy to manage and update your website content without any technical expertise. <br>
          Try YOOT today and experience the benefits of seamless content management for yourself!
        </p>
    </div>
  </div>

  <!-- Call to action -->
  <div class=" mt-10 flex gap-3 md:justify-center" >
    <button class=" rounded-md p-2 bg-indigo-600 text-white" >
      Get Started
    </button>
    <button class=" rounded-md border border-gray-400 bg-transparent p-2 text-slate-500" >
      Docs
    </button>
  </div>
</div>