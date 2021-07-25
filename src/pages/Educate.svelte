<script>
  import Hero from "../components/Hero.svelte";
  import PostHeader from "../components/PostHeader.svelte";

  const data_hero = {
    background: "educate_header",
    title: "educate",
  };

  const data_post_header = {
    background: "educate_post_header",
    paragraphs: [
      "The Bangladesh Denim Academy is an educational platform, to guide & educate the Denim industry professionals of Bangladesh. The program consists of workshops, masterclasses & seminars. Specifically made for professionals working in factories or in the field of denim. It’s aim is to have the best international experts upgrading the knowledge of the local professionals. Bangladesh Denim Academy practices programs settings & expertise to bring you or your company to the next level."
    ]
  };


</script>

<template lang="pug">
  Hero({...data_hero})
  PostHeader({...data_post_header})

  .container.overlay
    img.background(src="images/educate_background.png")
    .grid.two
      img(src="images/educate_1.png")
      img(src="images/educate_2.png")
      img(src="images/educate_3.png")
      img(src="images/educate_4.png")
</template>


<style lang="sass">
  @import '../styles/variables'

  .container
    &:after
      background: rgba($blue, 0.5)
    .grid
      padding: 5em 2.5em 7.5em 2.5em
</style>
