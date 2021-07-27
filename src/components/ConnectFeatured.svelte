<template lang="pug">
  .container.overlay
    img.background(src="images/optimized/home_background.jpg")   
    .grid.two
      img(src="images/create_1.png")
      img(src="images/create_2.png")
    .grid.three
      a(href="#").center
        h3 denim
        h3 studio
      a(href="#").center
        h3 design
        h3 concept
      a(href="#").center
        h3 fabric
        h3 innovation
      a(href="#").center
        h3 fabric
        h3 sourcing
      a(href="#").center
        h3 taining
        h3 &
        h3 development
      a(href="#").center
        h3 wet
        h3 processing
</template>

<style lang="sass">
  @import '../styles/variables'
  .container
    position: relative

    .grid
      padding: 5em
      a
        background: rgba($blue, .45)
        text-align: center
        padding: 5em 0
        h3
          text-transform: uppercase
</style>
