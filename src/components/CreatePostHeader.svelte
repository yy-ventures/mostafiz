<template lang="pug">
  .container
    img(src="images/create_post_header.png")
    .texts
      h5 I have created Denim Expert Limited a place where denim lovers meet, work on products, washes and build the best jeans imaginable. We have the know-how, the technology, the expertise, and skilled personnel, necessary to provide a one-stop service for our customer’s needs. We ensure that the people who make our products, work in a safe environment and treated with dignity and respect and we hope to set a benchmark for others to follow within the industry!
      h5 Mostafiz Uddin Managing Director Denim Expert Limited
</template>

<style lang="sass">
  @import '../styles/variables'

  .container
    position: relative
    .texts
      background: rgba($blue, .5)
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      width: 90%
      padding: 2.5em

      h5:nth-child(2)
        max-width: 20ch
        margin: 0 auto
        margin-top: 1em
        text-align: center
</style>
