<script>
  const content = [
    'A selfless promoter of Bangladesh’s apparel industry, with an innate desire to change the game.',
    'Mr. Mostafiz Uddin is a visionary in the area of the sustainable apparel ecosystem in Bangladesh through his philosophy which evolved from his passion for social and environmental ethics. He is believed to be a game changer in the industry through the promotion of innovation and fashion disruption, which he sees as key to the future success of the Bangladesh apparel sector. He is a selfless promoter of the critical issues surrounding sustainable apparel which include responsible business, technology, innovation, circularity and transparency.',
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

  h1 ABOUT

  header.center.overlay
    h2.underline {content[0]}
    img.background(src="images/optimized/about_header.jpg")

  section.center.overlay
    img.background(src="images/optimized/about_background.jpg")

    article.grid.two
      p {content[1]} 
      img(src="images/optimized/about_1.jpg")

    article.grid.two
      article
        img(src="images/optimized/about_2.jpg")
        p {content[2]}
        p {content[3]}
      article
        p {content[4]}
        p {content[5]}
        img(src="images/optimized/about_3.jpg")

    article.grid.two
      aside
        img(src="images/optimized/about_4.jpg")
        img(src="images/optimized/about_4.jpg")
      article
        p {content[6]}
        p {content[7]}
        p {content[8]}
        p {content[9]}

</template>

<style lang="sass">
  @import '../styles/variables'

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
