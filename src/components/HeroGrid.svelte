<script>
  /* export let background, title; */
</script>

<template lang="pug">
  .container.overlay
    img.background(src="images/denim_studio_header.jpeg")
    .grid.two
      h1 a world class denim studio!
      p More than 5000 design and development which continuous source of inspiration for denim lovers and professionals.
</template>

<style lang="sass">
  @import '../styles/variables'
  @import '../styles/mixins'

  .container
    height: 70vh
    position: relative

    .grid
      padding: 5em
      h1
        text-transform: uppercase
        @include underline
        &:after
          margin: 0
          width: 50%
          height: 0.10em
      p
        align-self: center
        margin-top: 5em
</style>
