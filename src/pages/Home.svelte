<template lang="pug">
  header
    .avatar
      img(src="images/optimized/avatar.jpg")
    .summary
      img(src="images/optimized/summary.jpg")
      article
        h5 Denim is my true passion. From the early days in the industry, till today, I do emphasize on bringing my part to denim at all levels. I boldly invest time into denim-fabric, design, development and washing, enabling my team and clients to take advantage of this. Let me take you through a presentation of my denim-universe.
        h3
          | MOSTAFIZ UDDIN
          //- |
          //- span.speciality / The Denim Expert
</template>
<style lang="sass">
  @import '../styles/variables'

  header
    display: grid
    grid-template-columns: 1fr 2fr

    img
      width: 100%
      height: 80vh
      object-fit: cover

    .summary
      position: relative

      &:after
        content: ''
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba($blue, 0.25)


      article
        width: max-content
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)

        h5
          max-width: 60ch

        h5,
        h3
          color: white

        h5
          font-size: 1em

        h3
          margin-top: 1em
          display: inline-block
          &:after
            content: ''
            display: block
            width: 50%
            height: 0.25em
            background: white
            margin-top: 0.5em
</style>
