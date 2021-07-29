

<script>
  import Hero from "../components/Hero.svelte";
  import Featured from "../components/CreateFeatured.svelte";
  import Footer from "../components/ConnectFooter.svelte";

  const data_hero = {
    background: "connect_header",
    title: "connect",
  };



</script>

<template lang="pug">
  Hero({...data_hero})
  .container.overlay.grid.two
    img.background(src="images/connect_post_header.png")
    h2 bangladesh denim expo
    h5 The largest Denim fair where international denim professionals meet. The Expo’s objective is to showcase Bangladesh’s growth potential in the denim industry. At the fair, Bangladesh’s exhibitors stand shoulder to shoulder with firms from Italy, Turkey, Japan, Pakistan and India among others. Bangladesh Denim expo is the place where Mostafiz act like the pioneer of change, setting a new scene for how international buyers and brands see Bangladesh’s denim industry in the future.
  Featured
  Footer

</template>

<style lang="sass">
  @import '../styles/variables'

  h1
    text-align: center
    text-transform: uppercase
    margin: 0.25em 0

  .container
    padding: 2em 7.5em
    h2
      text-transform: uppercase
    h5
      margin-top: 5em
</style>
