<script>
  import Navbar from "./components/Navbar.svelte";

  import Connect from "./pages/Connect.svelte";
  import Contact from "./pages/Contact.svelte";
  import Home from "./pages/Home.svelte";
  import News from "./pages/News.svelte";
  import About from "./pages/About.svelte";
  import Create from "./pages/Create.svelte";
  import Educate from "./pages/Educate.svelte";
  import Transmit from "./pages/Transmit.svelte";
  import Sustainability from "./pages/Sustainability.svelte";

  import { Router, Route } from "svelte-navigator";

  import "./styles/resets.sass";
  import "./styles/globals.sass";
  import "./styles/navigation.sass";
  import "./styles/utils.sass";

  import "./scripts/main.js";
</script>

<template lang="pug">
  Router
    Navbar
    main
      Route(path="/")
        Home
      Route(path="sustainability")
        Sustainability
      Route(path="news")
        News
      Route(path="about")
        About
      Route(path="contact")
        Contact
      Route(path="create")
        Create
      Route(path="educate")
        Educate
      Route(path="transmit")
        Transmit
      Route(path="connect")
        Connect
</template>
