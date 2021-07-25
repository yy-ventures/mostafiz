<script>
  const content = [
    'Today, sustainability, and managerial responsibility, have become the driving keywords for Mostafiz Uddin.',
    'From security to water treatment, his factory is a state of the art Building, where plants grow, and fishes live in the water which is leaving the factory.',
    "\"I was born in the southern Bangladesh district of Chattogram (Chittagong), into a middle-class family. In many considerations, my childhood was just ordinary, except for the support from and relationship with my Mom. She was the one who inspired me to be ‘myself' and 'listen to my heart'. When other kids were being protected from the outside world, my mother encouraged me to go out and experience the world first-hand.",
    'I joined the Bangladesh scouts at the age of 11, where I quickly became a group Leader. This leadership role drove me to later form a cricket team which entered into the district cricket tournament. In 1991 I actively worked with Operation Sea Angel, the US-led, military disaster relief programme, in the aftermath of the cyclone which had devastated the southern coast of Bangladesh that year.',
    'Right after completing my Higher Secondary School in 1995, my father Mr. Moslem Uddin (who was my role model) passed away following a heart attack, leaving me, as I was the eldest son, as head of my family. After completion of my HSC I gained admittance to the University of Madras in India. Having secured my degree I returned home in 1999 and I met a USA citizen who requested that I join him in his endeavour to help the Bangladesh Ready-Made-Garment sector.',
    'I started my career in an apparel company as a trainee merchandiser in 1999. What I experienced in this role drove me to start my own business and open a buying house the same year.',
    'To make my dreams come true and to put into practice what I had in mind for the textile sector, I soon realised I needed to establish my own factory, with my standards and incorporating my vision for the future. This is what I did in 2009, when Denim Expert Ltd. was founded.',
    'After 2009 I invested time and energy into my plans to create trade-fairs and industry summits in Bangladesh, the likes of which had never been seen before in the region, with a view to help promote my country and our industry.',
    'I am now working on the next steps in the journey, for my country, my people, for the industry and for the well-being of workers across the world.',
    'Come and join me!"',
  ]
</script>

<template lang="pug">

  h1 SUSTAINABILITY

  header.center.overlay
    h2.underline {content[0]}
    img.background(src="images/sustainability_header.png")

  section.center.overlay
    img.background(src="images/sustainability_background.png")

    article.grid.two
      article
        h3.underline His factory copes with the higher standards of sustainability.
        p {content[1]} 
      img(src="images/sustainability_1.png")

    article.grid.two
      article
        img(src="images/sustainability_2.png")
        h3.underline His factory has all the modern sustainability certificates a denim factory should have.
      article
        h3.underline Special care is given to all workers and managers,
        p and numerous projects and initiatives create that special mood, where the entire team feels the collective responsibility Mostafiz is protecting his team with

    article.grid.two
      aside
        img(src="images/optimized/about_4.jpg")
      article
        h3.underline Mostafiz Uddin works personally on all latest denim developments,
        p which are based on recycled material and cradle-to-cradle projects. These developments can be of great benefit for his clients

</template>

<style lang="sass">
  @import '../styles/variables'

  article
    .underline
      &:after
        margin: 0 0 0 auto

  h1
    text-align: center
    font-weight: normal

  header
    height: 70vh
    justify-content: start
    position: relative

    &:after
      background: rgba($blue, 0.50)

    h2
      max-width: 35ch
      margin-top: 1em

  section
    position: relative

    &:after
      background: rgba($blue, 0.50)

    & > article
      width: 90%
      margin-top: 5em
      padding: 2em

      position: relative
      &:before
        content: ''
        position: absolute
        background: $blue
        z-index: -1
        inset: 0


    & > article:first-of-type
      img
        margin-top: 2em
      &:before
        width: 75%
        height: 100%

    & > article:nth-of-type(2)
      margin-top: 10em
      article:first-child
        margin-top: -7.5em

        p:first-of-type
          margin-top: 1em

      img
        margin-top: 2em
      &:before
        width: 100%
        height: 100%

    & > article:nth-of-type(3)
      &:before
        inset: 5em 0 5em 25%
      aside img + img
        margin-top: 1em
      article p:first-of-type
        margin-top: 5em
  
</style>
