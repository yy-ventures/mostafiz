<template lang="pug">
  #news.overlay
    img.background(src="images/optimized/news_background.jpg")

    h1 NEWS

    .filters
      a(href="#") ALL
      a(href="#") VIDEO
      a(href="#") PRINT
      a(href="#") ONLINE
    
    .grid.three
      img.contact_background(src="images/optimized/news_1.jpg")
      img.contact_background(src="images/optimized/news_2.jpg")
      img.contact_background(src="images/optimized/news_3.jpg")

</template>

<style lang="sass">
  @import '../styles/variables'

  #news
    text-align: center
    background: white

    h1
      letter-spacing: 0.25ch

    .filters
      display: flex
      justify-content: center
      
      a
        text-decoration: underline

      * + *
        margin-left: 1em

    .grid
      /* margin-top: 2.5em */
      padding: 1em
      @media (min-width: 601px)
        padding: 5em
  
</style>
