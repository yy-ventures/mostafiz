<script>
  import Title from "../components/Title.svelte";
  import Background from "../components/Background.svelte";
  import HeaderGrid from "../components/HeaderGrid.svelte";
  import Article from "../components/Article.svelte";

  const header = {
    title: "a world class denim studio",
    paragraph:
      "More than 5000 design and development which continuous source of inspiration for denim lovers and professionals.",
  };

</script>

<template lang="pug">
  #denim_studio
    Title(content="denim studio")
    Background(image="denim_studio_header")
      HeaderGrid({...header})

    Background(image="denim_studio_background")

      Article
        div(slot="first")
          h3 The studio hosts a huge library of fabrics, with a strong focus on sustainable fabrications. 
          p Recycled material, Gots certified, from affordable denim to heritage fabrications.
        div(slot="last")
          img(src="images/denim_studio_1.jpeg")


      Article
        div(slot="first")
          img(src="images/denim_studio_2.jpeg")
          p Mostafiz Uddin personally updates all samples & designs with the latest Fits, patterns, fabrications and innovation in washes.
        div(slot="last")
          h3 The studio is open to invites and to it’s clients.
          p It’s archives with over 4 000 samples, make it a state of the art studio. Inspirational brainstormings & fruitful work sessions are key occupations in the denim studio.
          img(src="images/denim_studio_3.jpeg")

      Article
        div(slot="first")
          img(src="images/denim_studio_4.jpeg")
        div(slot="last")
          h3 This wash innovation is an important added value to each client.
          p The studio is the place where Mostafiz Uddin shares his in depth know-how of denim product. One-on-one sessions with clients, team training, or larger seminars are hold in the denim studio.

</template>

<style lang="sass">
</style>
