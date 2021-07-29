<script>
  import Title from "../components/Title.svelte";
  import Background from "../components/Background.svelte";
  import Article from "../components/Article.svelte";
</script>

<template lang="pug">
  Title(content="sustainability")

  Background(image="sustainability_header")
    h2 Today, sustainability, and managerial responsibility, have become the driving keywords for Mostafiz Uddin.

  Background(image="sustainability_background")

    Article
      div(slot="first")
        h3 His factory copes with the higher standards of sustainability.
        p From security to water treatment, his factory is a state of the art Building, where plants grow, and fishes live in the water which is leaving the factory.
      div(slot="last")
        img(src="images/sustainability_1.jpeg")

    Article
      div(slot="first")
        img(src="images/sustainability_2.jpeg")
        p His factory has been recognized as 'New Champion' by the World Economic Forum (WEF) for its extraordinary performance in sustainability and inclusivity.
      div(slot="last")
        h3 Special care is given to all workers and managers,
        p and numerous projects and initiatives create that special mood, where the entire team feels the collective responsibility Mostafiz is protecting his team with
        img(src="images/sustainability_3.jpeg")

    Article
      div(slot="first")
        img(src="images/sustainability_4.jpeg")
      div(slot="last")
        h3 Mostafiz Uddin works personally on all latest denim developments,
        p which are based on recycled material and cradle-to-cradle projects. These developments can be of great benefit for his clients

</template>

<style lang="sass">
  @import '../styles/mixins'

  :global
    h2:first-of-type
      font-size: 4rem
      padding: 1em 0
      @include underline
      &:after
        margin: 0 auto
        width: 15%
        height: 0.10em

    article:nth-of-type(1):before
      inset: 3rem 25% 25% 0 !important
    article:nth-of-type(2):before
      inset: 3rem 0 0 0 !important

</style>
