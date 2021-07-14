<template lang="pug">
    nav
      input#toggler(type="checkbox")
      label(for="toggler" )#menu_toggler_label
        #menu_button
          #bar

      Link(to="/")
        img(src="images/logo.png")
        h3 THE DENIM EXPERT
      .menu
        Link(to="#") EXPERTISE
        Link(to="#") SUSTAINABILITY
        Link(to="#") NEWS
        Link(to="#") ABOUT
        Link(to="contact") CONTACT
        .socials
           a(class="fab fa-instagram" href="#" target="_blank" rel="noopener noreferrer")
           a(class="fab fa-linkedin-in" href="#" target="_blank" rel="noopener noreferrer")
           a(class="fab fa-facebook-f" href="#" target="_blank" rel="noopener noreferrer")
           a(class="fab fa-twitter" href="#" target="_blank" rel="noopener noreferrer")
</template>
<style lang="sass">

@import '../styles/variables'

nav
  transition: transform 500ms ease-in-out
  a
    transition: color .5s
    &:last-child
      transition: background .5s
  background: rgba($bg_light, 0.95)
  // background: $bg_light
  // box-shadow: 0 0 0.5em 0 grey
  a
    color: grey
    &:hover,
    &:active
      color: black
      // color: black !important

  a
    font-weight: 600
  
  input
    display: none

  display: flex
  justify-content: space-between
  align-items: center

  position: fixed
  width: 100%
  @media (min-width: 601px)
    position: sticky
    

  top: 0
  z-index: 99

  padding: 1em
  flex-direction: column
  @media (min-width: 601px)
    padding: 1em 2.5em
    flex-direction: row

  
  min-height: 3.5em
  img
    width: 25%
    position: absolute
    top: 0
    left: 50%
    transform: translate(-50%, -25%)

    @media (min-width: 601px)
      width: 10%
      left: 0
      transform: translate(25%, -25%)

    // width: 25%
    // margin: auto
    // @media (min-width: 601px)
    //   width: 35%
    //   margin: 0
      
  h3
    color: $fg_dark_title
    margin-left: 7em
    display: none
    letter-spacing: 0.25ch
    @media (min-width: 601px)
      display: block
      

  .menu
    overflow: hidden
    transition: max-height 500ms
    text-align: center

    max-height: 0
    @media (min-width: 601px)
      max-height: 100%

    @media (min-width: 601px)
      display: flex

    a + a
      @media (min-width: 601px)
        margin-left: 2em

    a
      margin-top: 1em
      @media (min-width: 601px)
        margin-top: 0
      &:first-child
        margin-top: 5em
        @media (min-width: 601px)
          margin-top: 0

    .socials
      a + a
        margin-left: 0.5em

  #toggler:checked
    ~ .menu
      // display: block
      max-height: 600px
    ~ label #menu_button #bar
      background: none
      margin-top: 7px
      &:before,
      &:after
        top: 0
      &:before
        transform: rotate(45deg)
      &:after
        transform: rotate(-45deg)


  #menu_toggler_label
    @media (min-width: 601px)
      display: none
    #menu_button
      position: absolute

      top: 10px
      right: 10px

      z-index: 99
      cursor: pointer

      padding: 5px 10px
      padding-bottom: 20px

      @media (min-width: 601px)
        display: none

      #bar
        position: relative
        transition: background 500ms
        &, &:after, &:before
          width: 30px
          height: 3px
          background: #333
          border-radius: 50px
        &:after, &:before
          content: ""
          display: block
          position: absolute
          transition: transform 500ms
        &:before
          top: 7px
        &:after
          top: 15px

</style>
<script>
  import { Link }  from "svelte-navigator";
</script>
