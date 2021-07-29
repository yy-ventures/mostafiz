<script>
  import Title from "../components/Title.svelte";
  import Background from "../components/Background.svelte";
  import HeaderGrid from "../components/HeaderGrid.svelte";
  import Article from "../components/Article.svelte";

  const header = {
    title: "fabric innovation & development",
    paragraph:
      "Working with all main denim mills around the world, Mostafiz has a in depth knowledge of fabrics. Attending all main fabric fairs and being a special guest at many mills, he sees the market, and understands the evolution in fabrics."
  };

</script>

<template lang="pug">
  #fabric_innovation
    Title(content="fabric innovation")
    Background(image="fabric_innovation_header")
      HeaderGrid({...header})

    Background(image="fabric_innovation_background")

      Article
        div(slot="first")
          h3 Mostafiz believes that this know-how is important for the Bangladesh denim industry. 
          p He therefore spends a large amount of time sharing his fabric know-how with denim fabric manufacturers.
        div(slot="last")
          img(src="images/fabric_innovation_1.jpeg")
          h3 Japan-2001


      Article
        div(slot="first")
          img(src="images/fabric_innovation_2.jpeg")
          h3 China-2002
        div(slot="last")
          h3 The training and innovation part is very important here.
          p Mostafiz provides fabric trend-direction to mills, and works on new fabric concepts with the engineers.

      Article
        div(slot="first")
          h3 Developing fabrics for specific markets with adapted price-levels is key to all. 
          p There is no successful development without precise commercial targets. With his skills, Mostafiz provides precise direction.
        div(slot="last")
          img(src="images/fabric_innovation_3.jpeg")
          h3 Bangladesh-2014

</template>

<style lang="sass">
  #fabric_innovation
    :global
      article:nth-of-type(2):before
        inset: 3rem 0 0 25% !important
      article:nth-of-type(3):before
        inset: 3rem 25% 25% 0 !important
</style>
