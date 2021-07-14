<template lang="pug">
  header.grid
    img(src="images/optimized/avatar.jpg")
    article.center
      img(src="images/optimized/summary.jpg")
      .texts
        h5 Denim is my true passion. From the early days in the industry, till today, I do emphasize on bringing my part to denim at all levels. I boldly invest time into denim-fabric, design, development and washing, enabling my team and clients to take advantage of this. Let me take you through a presentation of my denim-universe.
        h3
          | MOSTAFIZ UDDIN
          //- |
          //- span.speciality / The Denim Expert

  section
    .grid.four
      a(href="#")
        .container: img(src="images/optimized/create.jpg")
        p CREATE
      a(href="#")
        .container: img(src="images/optimized/connect.jpg")
        p CONNECT
      a(href="#")
        .container: img(src="images/optimized/educate.jpg")
        p EDUCATE
      a(href="#")
        .container: img(src="images/optimized/transmit.jpg")
        p TRANSMIT

    article
      p My endless passion for denim has pushed me to develop several channels which are feeding one each other.
      p Production know-how, Technology savvy mindset doubled with ethical development vision, market intelligence and idustry network !
      p Mostafiz Uddin

    img.background(src="images/optimized/home_background.jpg")   

</template>
<style lang="sass">
  @import '../styles/variables'

  header
    grid-gap: 0
    @media (min-width: 601px)
      grid-template-columns: 1fr 2fr

    img
      width: 100%
      @media (min-width: 601px)
        height: 80vh
        object-fit: cover

    article
      position: relative
      z-index: 1

      padding: 0 1em
      @media (min-width: 601px)
        padding: 0 7em
        

      img
        position: absolute
        top: 0
        z-index: -1

      h5
        font-size: 1rem

      h3
        margin-top: 1em
        display: inline-block
        &:after
          content: ''
          display: block
          width: 50%
          height: 0.25em
          background: white
          margin-top: 0.5em

      &:after
        content: ''
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba($blue, 0.25)
        z-index: -1


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

      p
        text-align: center
        font-size: 1.5em
        

    article
      background: rgba(lightgrey, .15)
      width: 75%
      margin: 0 auto
      padding: 2.5em
      text-align: center
    
</style>
