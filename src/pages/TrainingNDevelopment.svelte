<script>
  import Title from "../components/Title.svelte";
  import Background from "../components/Background.svelte";
  import HeaderGrid from "../components/HeaderGrid.svelte";
  import Article from "../components/Article.svelte";

  const header = {
    title: "",
    paragraph:
      "Being a very pragmatic person, Mostafiz knows exactly how to manufacture  denims at all industrial levels, from prototype to the final product in the stores."
  };

</script>

<template lang="pug">
  #training_n_development
    Title(content="training & development")
    Background(image="training_n_development_header")
      HeaderGrid({...header})

    Background(image="training_n_development_background")

      Article
        div(slot="first")
          h3 In his factory, Mostafiz has always an eye on products. 
          p He can be seen in the sewing stations, washing unit and in the finishing area. Always with helpful advice, sharing his technical know-how with his workers. His point is always to train and uplift the technical know-how of his team.
        div(slot="last")
          img(src="images/training_n_development_1.jpeg")

      Article
        div(slot="first")
          img(src="images/training_n_development_2.jpeg")
        div(slot="last")
          h3 Product samples are the face of the factory. 
          p Product samples are the face of the factory. This is a major point Mostafiz teaches his teams. If the first sample made for a customer is great, chances are the order will be placed with the factory. This philosophy is teached and trained by Mostafiz for all members of his team.

      Article
        div(slot="first")
          h3 At any moment, Mostafiz tries to identify eventual product problems,
          p and to identify these directly on the production chain. When doing this, he always focusses on pragmatic solutions, rather then commanding out of his office.
        div(slot="last")
          img(src="images/training_n_development_3.jpeg")
</template>

<style lang="sass">
  #training_n_development
    :global
      article:nth-of-type(1):before
        inset: 3rem 25% 15% 0 !important
      article:nth-of-type(2):before
        inset: 3rem 0 0 25% !important
      article:nth-of-type(3):before
        inset: 3rem 25% 25% 0 !important
      
      h1:first-of-type:after
        height: 0 !important
</style>
