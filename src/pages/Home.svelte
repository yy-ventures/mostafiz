<script>
  import HomeHeader from "../components/HomeHeader.svelte";
</script>

<template lang="pug">
  #home
    HomeHeader

    section#expertise
      .grid.four
        a(href="create")
          .container: img(src="images/optimized/create.jpg")
          h3 CREATE
        a(href="connect")
          .container: img(src="images/optimized/connect.jpg")
          h3 CONNECT
        a(href="educate")
          .container: img(src="images/optimized/educate.jpg")
          h3 EDUCATE
        a(href="transmit")
          .container: img(src="images/optimized/transmit.jpg")
          h3 TRANSMIT

      article
        p My endless passion for denim has pushed me to develop several channels which are feeding one each other.
        p Production know-how, Technology savvy mindset doubled with ethical development vision, market intelligence and idustry network !
        p Mostafiz Uddin

      img.background(src="images/optimized/home_background.jpg")   

</template>

<style lang="sass">
  @import '../styles/variables'

  #home
    section
      position: relative
      padding-bottom: 2.5em

      .background
        position: absolute
        top: 0
        z-index: -1
        height: 100%
        width: 100%
        object-fit: cover

      .grid
        padding: 1em
        @media (min-width: 601px)
          padding: 2.5em

        h3
          text-align: center
          font-size: 2em
          font-family: 'Porter-BoldDEMO'

      article
        background: rgba(lightgrey, .15)
        width: 95%
        @media (min-width: 601px)
          width: 75%
          
        margin: 0 auto
        padding: 1em
        @media (min-width: 601px)
          padding: 2.5em
          
        text-align: center

        p
          font-family: Lora
          letter-spacing: 0.20rem
          font-size: 1.25rem
          text-align: center !important

        p + p
          margin: 0

        p:last-of-type
          margin-top: 2.5em

</style>
