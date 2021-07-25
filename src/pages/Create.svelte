<script>
  import Hero from "../components/Hero.svelte";
  import PostHeader from "../components/CreatePostHeader.svelte";
  import Featured from "../components/CreateFeatured.svelte";

  const data_hero = {
    background: "create_header",
    title: "create",
  };
</script>

<template lang="pug">
  Hero({...data_hero})
  PostHeader
  Featured
</template>
