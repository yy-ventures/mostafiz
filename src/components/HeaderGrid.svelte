<script>
  export let title, paragraph;
</script>

<template lang="pug">
  .container
    h1 {title}
    p {paragraph}
</template>

<style lang="sass">
  @import '../styles/mixins'

  .container
    height: 50vh
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 1em

    h1
      text-transform: uppercase
      @include underline
      &:after
        margin: 0
        width: 50%
        height: 0.10em

    p
      align-self: center
      margin-top: 5em
      font-size: 1.5rem


</style>
