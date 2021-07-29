<script>
  import Title from "../components/Title.svelte";
  import Background from "../components/Background.svelte";

  import PostHeader from "../components/CreatePostHeader.svelte";
  import Featured from "../components/CreateFeatured.svelte";
</script>

<template lang="pug">
  #create
    Background(image="create_header")
      Title.title(content="create")
    PostHeader
    Featured
</template>

<style lang="sass">
  @import '../styles/variables'

  #create
    :global
      > .container:first-of-type
        &:after
          background: none
        .content
          height: 90vh
          h1
            font-size: 7rem
</style>
