<script>
  import Title from "../components/Title.svelte";
  import Background from "../components/Background.svelte";
</script>

<template lang="pug">
  #educate
    Background(image="educate_header")
      Title.title(content="educate")
    Background(image="educate_post_header")
      p The Bangladesh Denim Academy is an educational platform, to guide & educate the Denim industry professionals of Bangladesh. The program consists of workshops, masterclasses & seminars. Specifically made for professionals working in factories or in the field of denim. It’s aim is to have the best international experts upgrading the knowledge of the local professionals. Bangladesh Denim Academy practices programs settings & expertise to bring you or your company to the next level.
    Background(image="educate_background")
      .grid.two
        img(src="images/educate_1.png")
        img(src="images/educate_2.png")
        img(src="images/educate_3.png")
        img(src="images/educate_4.png")
</template>

<style lang="sass">
  @import '../styles/variables'

  #educate
    :global
      > .container:first-of-type .content
        height: 90vh
        h1
          font-size: 7rem
      > .container:nth-of-type(2)
        &:after
          background: none
        p
          margin: 2.5em 5em
          background: rgba($blue, 0.75)
          padding: 2.5em
          font-size: 1.5rem

      .grid
        img
          width: 100%
          height: 60vh
          object-fit: cover

</style>
