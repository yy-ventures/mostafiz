<script>
  import Hero from "../components/Hero.svelte";

  const data_hero = {
    background: "transmit_header",
    title: "transmit",
  };



</script>

<template lang="pug">
  Hero({...data_hero})
  h1 bangladesh denim times

  .container.overlay.center
    img.background(src="images/transmit_post_header.jpeg")
    h5 Bangladesh Denim Times is one of Mostafiz Uddin denim-dreams come true. Wether it is through it’s printed version, on instagram or facebook, he shares : everything Denim. He believes that, talking about denim all day, dreaming about denim all night, thinking and breathing Denim, it was very natural to create a multi-channel media dedicated to Denim. When he is not in the factory, he is at trade-fairs in Holland, or meeting designers in France…. So it was natural to gather all those precious encounters in a media. Bangladesh Denim Times covers trends, technical innovation, market watch and sustainability issues.


  .container.overlay.center
    img.background(src="images/transmit_footer.jpeg")
    .grid.three
      .grid_container
        img(src="images/transmit_1.jpeg")
        h3 print
      .grid_container
        img(src="images/transmit_2.jpeg")
        h3 website
      .grid_container
        img(src="images/transmit_3.jpeg")
        h3 facebook

</template>

<style lang="sass">
  @import '../styles/variables'

  h1
    text-align: center
    text-transform: uppercase
    margin: 0.25em 0

  .container
    &:after
      background: rgba($blue, 0.5)
    h5
      width: 50%
      text-align: center

    .grid_container
      padding: 2.5em
      h3
        margin-top: 1em
        text-align: center
        text-transform: uppercase
      
</style>
