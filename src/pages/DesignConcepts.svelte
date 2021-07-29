<script>
  import Title from "../components/Title.svelte";
  import Background from "../components/Background.svelte";
  import HeaderGrid from "../components/HeaderGrid.svelte";
  import Article from "../components/Article.svelte";

  const header = {
    title: "trend & design",
    paragraph: "As a true denim lover, Mostafiz Uddin has a passion for denim design & trend. Traveling the world, working with the most important international retailers, he knows where to find trends and how to analyze them for any denim lover and any denim professional."
  };

</script>

<template lang="pug">
  #design_concepts
    Title(content="design concepts")
    Background(image="design_concepts_header")
      HeaderGrid({...header})

    Background(image="design_concepts_background")

      Article
        div(slot="first")
          h3 These trends are then transformed into sharp product design, which Mostafiz likes to do himself. 
          p These trend reports & denim designs are made with attention to detail, and relevant for targeted international countries by taking inspiration around the world.
        div(slot="last")
          img(src="images/design_concepts_1.jpeg")


      Article
        div(slot="first")
          img(src="images/design_concepts_2.jpeg")
          p When needed special designs can be made matching to the market demands of his customers. These specific designs include all technical information, like fit, specs, trimmings, fabric, wash, and do include full technical files.
        div(slot="last")
          h3 Once finished, these special designs and the trend-analysis, are made available to all customers.
          p Mostafiz personally ensures great market and trend-relevance in his products, thanks to these designs. These special designs are made available to customers without any extra-cost.
          img(src="images/design_concepts_3.jpeg")

      Article
        div(slot="first")
          img(src="images/design_concepts_4.jpeg")
        div(slot="last")
          h3 Design and trend being a real passion for Mostafiz,
          p He spends a large amount of time working on these, and benchmarking around the world. Continuously developing new product is his main occupation. He personnaly follows up the entire make, fittings & wash of each novelty.

</template>

<style lang="sass">
  #design_concepts
    :global
      article:nth-of-type(1):before
        inset: 3rem 0 15% 0 !important
</style>
