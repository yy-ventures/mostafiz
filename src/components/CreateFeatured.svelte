<script>
  import Background from "../components/Background.svelte";
</script>

<template lang="pug">
  #create_featured
    Background(image="home_background")
      .grid.two
        img(src="images/create_1.jpeg")
        img(src="images/create_2.jpeg")
      .grid.three
        a(href="denim-studio").center
          h3 denim
          h3 studio
        a(href="design-concepts").center
          h3 design
          h3 concepts
        a(href="fabric-innovation").center
          h3 fabric
          h3 innovation
        a(href="fabric-sourcing").center
          h3 fabric
          h3 sourcing
        a(href="training-n-development").center
          h3 taining
          h3 &
          h3 development
        a(href="wet-processing").center
          h3 wet
          h3 processing

</template>

<style lang="sass">
  @import '../styles/variables'
  #create_featured
    .grid:first-of-type
      img
        width: 100%
        height: 50vh
        object-fit: cover

    .grid:nth-of-type(2)
      a
        background: rgba(black, .25)
        text-align: center
        padding: 5em 0
        h3
          text-transform: uppercase
</style>
