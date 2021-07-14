<template lang="pug">
  Router
    Navbar
    main
      Route(path="/")
        Home
      Route(path="news")
        News
      Route(path="about")
        About
      Route(path="contact")
        Contact
</template>

<script>
  import Navbar from './components/Navbar.svelte';

  import Contact from './pages/Contact.svelte';
  import Home from './pages/Home.svelte';
  import News from './pages/News.svelte';
  import About from './pages/About.svelte';

  import { Router, Route } from "svelte-navigator";

  import './styles/resets.sass'
  import './styles/globals.sass'
  import './styles/navigation.sass'
  import './styles/utils.sass'

</script>
