<template lang="pug">
  .container
    img(src="images/connect_footer.png")
    .stats.grid.four
      .stat
        h1 11
        h3 editions
      .stat
        h1 50k
        h3 visitors
      .stat
        h1 206
        h3 exhibitors
      .stat
        h1 160
        h3 hours of workshop
</template>

<style lang="sass">
  @import '../styles/variables'
  .container
    position: relative
    .stats
      padding: 2.5em 1em
      position: absolute
      background: $blue
      width: 90%
      left: 50%
      transform: translateX(-50%)
      margin: 0 auto
      bottom: 10%

      h3,
      h1
        line-height: 1
        margin: 0
        text-align: center
        text-transform: uppercase

      h1
        font-size: 5rem

</style>
