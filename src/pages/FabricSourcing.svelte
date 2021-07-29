<script>
  import Title from "../components/Title.svelte";
  import Background from "../components/Background.svelte";
  import HeaderGrid from "../components/HeaderGrid.svelte";
  import Article from "../components/Article.svelte";

  const header = {
    title: "sourcing the core of the product!",
    paragraph:
      "Fabric is the heart, the soul and the strength of each pair of jeans. Sourcing the right fabric is a real passion for Mostafiz. To him, sourcing the right fabric goes way beyond simply selecting and buying.",
  };

</script>

<template lang="pug">
  Title(content="fabric sourcing")
  Background(image="fabric_sourcing_header")
    HeaderGrid({...header})

  Background(image="fabric_sourcing_background")

    Article
      div(slot="first")
        h3 Many fabric Mills are invited to meet Mostafiz at his factory, 
        p ...and many more travel to Chittagong and present their latest fabric developments. Exchanging about developments, developing fabrics, and sourcing the right product at the right price, is a true everyday business.
      div(slot="last")
        img(src="images/fabric_sourcing_1.jpeg")
        h3 Bangladesh-2019

    Article
      div(slot="first")
        img(src="images/fabric_sourcing_2.jpeg")
        h3 China-2002
        p Price being a key element to successful fabric development, and  even more to successful fabric sourcing, it is important to understand the  mechanics of coton, fiber, dyeing and weaving. Mostafiz knows exactly what to find where, and can be seen in many places around the globe.

      div(slot="last")
        h3 Well known for his expertise in fabric-trends, many mills are welcoming the design input of Mostafiz.
        p Numerous denim fabrics have been developed thanks to his input. Some mills even build their range-structure based on the technical input and advice given by him.
        img(src="images/fabric_sourcing_3.jpeg")
        h3 USA-2015

    Article
      div(slot="first")
        img(src="images/fabric_sourcing_4.jpeg")
        h3 Germany-2016
      div(slot="last")
        h3 Fabric fairs are another great source of inspiration.
        p Most have met Mostafiz at Kingpins Amsterdam, New York, Hong-Kong, at Bluezone Munich, Denim PV in London or Milano,at Première Vision and Texworld in Paris. Or best, at Mostafiz very own fair, the Bangladesh Denim Expo in Dhaka. These are the places where all experts meet.

</template>

<style lang="sass">
  :global
    article:nth-of-type(1):before
      inset: 3rem 25% 25% 0 !important
    article:nth-of-type(2):before
      inset: 3rem 0 15% 0 !important
    article:nth-of-type(3):before
      inset: 3rem 0 0 25% !important
</style>
