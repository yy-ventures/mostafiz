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
        Link(to="/") EXPERTISE
        Link(to="sustainability") SUSTAINABILITY
        Link(to="news") NEWS
        Link(to="about") ABOUT
        Link(to="contact") CONTACT
        .socials
           a(class="fab fa-instagram" href="#" target="_blank" rel="noopener noreferrer")
           a(class="fab fa-linkedin-in" href="#" target="_blank" rel="noopener noreferrer")
           a(class="fab fa-facebook-f" href="#" target="_blank" rel="noopener noreferrer")
           a(class="fab fa-twitter" href="#" target="_blank" rel="noopener noreferrer")
</template>

<script>
  import { Link }  from "svelte-navigator";
</script>
