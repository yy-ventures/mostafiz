<template lang="pug">
  img.contact_background(src="images/optimized/contact.jpg")
  .contact_content
    h1.contact Contact
    h5.email muddin@mostafiz.org
    h5.website www.mostafiz.org
</template>
<style lang="sass">
  .contact_background
    width: 100%
    height: 80vh
    object-fit: cover
    margin-bottom: 5em

  .contact_content
    position: absolute
    top: 15%
    left: 50%
    transform: translateX(-50%)

    text-align: center

    h1
      letter-spacing: 0.25ch
      margin-bottom: 1em

    h5
      font-size: 1.5em
      margin: 0
</style>
