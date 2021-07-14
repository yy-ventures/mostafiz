<template lang="pug">
  Router
    Navigation
    main
      Route(path="/")
        Home
      Route(path="contact")
        Contact
</template>
<style lang="sass">
</style>
<script>
  import Navigation from './components/Navigation.svelte';

  import Contact from './pages/Contact.svelte';
  import Home from './pages/Home.svelte';

  import { Router, Route } from "svelte-navigator";

  import './styles/resets.sass'
  import './styles/globals.sass'

</script>
