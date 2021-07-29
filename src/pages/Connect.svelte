<script>
  import Hero from "../components/Hero.svelte";
  import Footer from "../components/ConnectFooter.svelte";

  import Title from "../components/Title.svelte";
  import Background from "../components/Background.svelte";
  import HeaderGrid from "../components/HeaderGrid.svelte";

  const data_hero = {
    background: "connect_header",
    title: "connect",
  };

  const header = {
    title: "bangladesh denim expo",
    paragraph:
      "The largest Denim fair where international denim professionals meet. The Expo’s objective is to showcase Bangladesh’s growth potential in the denim industry. At the fair, Bangladesh’s exhibitors stand shoulder to shoulder with firms from Italy, Turkey, Japan, Pakistan and India among others. Bangladesh Denim expo is the place where Mostafiz act like the pioneer of change, setting a new scene for how international buyers and brands see Bangladesh’s denim industry in the future.",
  };
</script>

<template lang="pug">
  #connect
    Background(image="connect_header")
      Title.title(content="connect")
    Background(image="connect_post_header")
      HeaderGrid({...header})
    Background(image="connect_background")
      .grid.two
        img(src="images/connect_1.jpeg")
        img(src="images/connect_2.jpeg")
        img(src="images/connect_3.jpeg")
        img(src="images/connect_4.jpeg")
    Footer
</template>

<style lang="sass">
  #connect
    :global
      > .container:first-of-type .content
        height: 90vh
        h1
          font-size: 7rem

      > .container:nth-of-type(2) .content
        height: 90vh
</style>
