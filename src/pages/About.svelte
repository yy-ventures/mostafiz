<script>
  import Title from "../components/Title.svelte";
  import Background from "../components/Background.svelte";
  import Article from "../components/Article.svelte";

  const content = [
    "A selfless promoter of Bangladesh’s apparel industry, with an innate desire to change the game.",
    "Mr. Mostafiz Uddin is a visionary in the area of the sustainable apparel ecosystem in Bangladesh through his philosophy which evolved from his passion for social and environmental ethics. He is believed to be a game changer in the industry through the promotion of innovation and fashion disruption, which he sees as key to the future success of the Bangladesh apparel sector. He is a selfless promoter of the critical issues surrounding sustainable apparel which include responsible business, technology, innovation, circularity and transparency.",
    "\"I was born in the southern Bangladesh district of Chattogram (Chittagong), into a middle-class family. In many considerations, my childhood was just ordinary, except for the support from and relationship with my Mom. She was the one who inspired me to be ‘myself' and 'listen to my heart'. When other kids were being protected from the outside world, my mother encouraged me to go out and experience the world first-hand.",
    "I joined the Bangladesh scouts at the age of 11, where I quickly became a group Leader. This leadership role drove me to later form a cricket team which entered into the district cricket tournament. In 1991 I actively worked with Operation Sea Angel, the US-led, military disaster relief programme, in the aftermath of the cyclone which had devastated the southern coast of Bangladesh that year.",
    "Right after completing my Higher Secondary School in 1995, my father Mr. Moslem Uddin (who was my role model) passed away following a heart attack, leaving me, as I was the eldest son, as head of my family. After completion of my HSC I gained admittance to the University of Madras in India. Having secured my degree I returned home in 1999 and I met a USA citizen who requested that I join him in his endeavour to help the Bangladesh Ready-Made-Garment sector.",
    "I started my career in an apparel company as a trainee merchandiser in 1999. What I experienced in this role drove me to start my own business and open a buying house the same year.",
    "To make my dreams come true and to put into practice what I had in mind for the textile sector, I soon realised I needed to establish my own factory, with my standards and incorporating my vision for the future. This is what I did in 2009, when Denim Expert Ltd. was founded.",
    "After 2009 I invested time and energy into my plans to create trade-fairs and industry summits in Bangladesh, the likes of which had never been seen before in the region, with a view to help promote my country and our industry.",
    "I am now working on the next steps in the journey, for my country, my people, for the industry and for the well-being of workers across the world.",
    'Come and join me!"',
  ];
</script>

<template lang="pug">
  #about
    Title(content="about")
    Background(image="about_header")
      h2 A selfless promoter of Bangladesh’s apparel industry, with an innate desire to change the game.


    Background(image="about_background")

      Article
        div(slot="first")
          p Mr. Mostafiz Uddin is a visionary in the area of the sustainable apparel ecosystem in Bangladesh through his philosophy which evolved from his passion for social and environmental ethics. He is believed to be a game changer in the industry through the promotion of innovation and fashion disruption, which he sees as key to the future success of the Bangladesh apparel sector. He is a selfless promoter of the critical issues surrounding sustainable apparel which include responsible business, technology, innovation, circularity and transparency.
        div(slot="last")
          img(src="images/about_1.jpeg")

      Article
        div(slot="first")
          img(src="images/about_2.jpeg")
          p "I was born in the southern Bangladesh district of Chattogram (Chittagong), into a middle-class family. In many considerations, my childhood was just ordinary, except for the support from and relationship with my Mom. She was the one who inspired me to be ‘myself' and 'listen to my heart'. When other kids were being protected from the outside world, my mother encouraged me to go out and experience the world first-hand.
          p I joined the Bangladesh scouts at the age of 11, where I quickly became a group Leader. This leadership role drove me to later form a cricket team which entered into the district cricket tournament. In 1991 I actively worked with Operation Sea Angel, the US-led, military disaster relief programme, in the aftermath of the cyclone which had devastated the southern coast of Bangladesh that year.
        div(slot="last")
          p Right after completing my Higher Secondary School in 1995, my father Mr. Moslem Uddin (who was my role model) passed away following a heart attack, leaving me, as I was the eldest son, as head of my family. After completion of my HSC I gained admittance to the University of Madras in India. Having secured my degree I returned home in 1999 and I met a USA citizen who requested that I join him in his endeavour to help the Bangladesh Ready-Made-Garment sector.
          p I started my career in an apparel company as a trainee merchandiser in 1999. What I experienced in this role drove me to start my own business and open a buying house the same year.
          img(src="images/about_3.jpeg")

      Article
        div(slot="first")
          img(src="images/about_4.jpeg")
          img(src="images/about_5.jpeg")
        div(slot="last")
          p To make my dreams come true and to put into practice what I had in mind for the textile sector, I soon realised I needed to establish my own factory, with my standards and incorporating my vision for the future. This is what I did in 2009, when Denim Expert Ltd. was founded.
          p After 2009 I invested time and energy into my plans to create trade-fairs and industry summits in Bangladesh, the likes of which had never been seen before in the region, with a view to help promote my country and our industry.
          p I am now working on the next steps in the journey, for my country, my people, for the industry and for the well-being of workers across the world.
          p Come and join me!"



</template>

<style lang="sass">
  @import '../styles/mixins'

  #about
    :global
      h2:first-of-type
        font-size: 4rem
        padding: 1em 0
        @include underline
        &:after
          margin: 0 auto
          width: 15%
          height: 0.10em

      article
        p
          text-align: start !important
    

      article:nth-of-type(1)
        &:before
          inset: 0 25% 0 0 !important
        p
          margin-top: 1em !important
        img
          margin-top: 3em !important

      article:nth-of-type(2)
        p:nth-child(1)
          margin-top: 5rem
        &:before
          inset: 3rem 0 0 0 !important


      article:nth-of-type(3)
        p:first-of-type
          margin-top: 4rem
        &:before
          inset: 3rem 0 25% 25% !important
</style>
