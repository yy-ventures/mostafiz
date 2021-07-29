<script>
  import Title from "../components/Title.svelte";
  import Background from "../components/Background.svelte";
</script>

<template lang="pug">
  #transmit
    Background(image="transmit_header")
      Title(content="transmit")
    Title(content="bangladesh denim times")
    Background(image="transmit_post_header")
      p Bangladesh Denim Times is one of Mostafiz Uddin denim-dreams come true. Wether it is through it’s printed version, on instagram or facebook, he shares : everything Denim. He believes that, talking about denim all day, dreaming about denim all night, thinking and breathing Denim, it was very natural to create a multi-channel media dedicated to Denim. When he is not in the factory, he is at trade-fairs in Holland, or meeting designers in France…. So it was natural to gather all those precious encounters in a media. Bangladesh Denim Times covers trends, technical innovation, market watch and sustainability issues.
    Background(image="transmit_footer")
      .grid.three
        .grid_container
          img(src="images/transmit_1.jpeg")
          h2 print
        .grid_container
          img(src="images/transmit_2.jpeg")
          h2 website
        .grid_container
          img(src="images/transmit_3.jpeg")
          h2 facebook

</template>

<style lang="sass">
  @import '../styles/variables'

  #transmit
    :global
      > .container:first-of-type .content
        height: 90vh
        h1
          font-size: 7rem
      > .container:nth-of-type(2) .content
        p
          font-size: 1.5rem
          width: 65%
          margin: 0 auto
          text-align: center
      
      .grid
        img
          width: 100%
          height: 50vh
          object-fit: cover
        h2
          font-family: Lora
          margin-top: 1em
          text-align: center
          text-transform: uppercase

</style>
