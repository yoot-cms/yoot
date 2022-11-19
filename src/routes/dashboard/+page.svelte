<!-- <script lang="ts">
  import axios from "axios";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { ContentContainers } from "../../stores/contentContainersStore"
  import Header from "../../components/Header.svelte";
  import ContentContainer from "../../components/ContentContainer.svelte";
  onMount(() => {
    if (browser) {
      if (!localStorage.getItem("token")) {
        window.location.href = "/auth";
      }
    }
  });

  const url = "http://localhost:5000/container/";

  let containerName = "";
  let addingContainer = false;
  let error = false;

  function addContainer() {
    addingContainer = true
    if (containerName == "") {
      error=true
      addingContainer = false
      return;
    }
    let params = {name: containerName}
    axios.post(
      url+"create",
      params,
      {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    ).then((res)=>{
      error = false
      const { data } = res.data
      ContentContainers.update((containers)=>[
        ...containers,
        data
      ])
      addingContainer = false
      containerName = ""
    }).catch((_err)=>{
      error = true
      addingContainer = false
    })
  }

  async function getContainers(){
    if (browser) {
      await axios.get(
        `${url}all`,
        {
          headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      ).then((res)=>{
        const { data } = res.data
        console.log(data)
        ContentContainers.set([...data])
      }).catch((err)=>{
        console.log(err.response)
      })
    }
  }
  let fetchresult = getContainers()
</script> -->

<svelte:head>
	<title>YOOT | Dashboard</title>
</svelte:head>

<div>
  
</div>