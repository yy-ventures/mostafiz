<template lang="pug">
  article
    slot(name="first")
    slot(name="last")
</template>

<style lang="sass">
  @import '../styles/variables'
  @import '../styles/mixins'

  article
    padding: 0 2.5em 2.5em 2.5em
    position: relative
    z-index: 1

    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 5rem

    &:before
      content: ''
      z-index: -1
      position: absolute
      inset: 3rem 25% 25% 0
      background: $blue

    &:nth-of-type(2):before
      inset: 3rem 0 15% 0
    &:nth-of-type(3):before
      inset: 3rem 0 0 25%


    :global
      h3
        text-align: end
        @include underline
        font-size: 2rem
      p
        text-align: end
        font-size: 1.5rem

      & > *
        * + *
          margin-top: 2.5em
        img + h3
          margin: 0
          &:after
            height: 0

      & > *:first-child
        h3
          margin-left: 5em

        img + p
          @include underline

      & > *:nth-child(2)
        img:first-child
          margin-top: 7.5rem


</style>
