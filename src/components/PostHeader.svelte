<script>
  export let background, paragraphs;
</script>

<template lang="pug">
  .container
    img(src="{`images/${background}.png`}")
    .texts.center_z
      | {#each paragraphs as paragraph}
      h5 {paragraph}
      | {/each}
</template>

<style lang="sass">
  @import '../styles/variables'

  .container
    position: relative
    .texts
      background: rgba($blue, .5)
      width: 75%
      padding: 2.5em

      h5:nth-child(2)
        max-width: 20ch
        margin: 0 auto
        margin-top: 1em
        text-align: center
</style>
