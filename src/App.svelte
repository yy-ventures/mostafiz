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
  import DenimStudio from "./pages/DenimStudio.svelte";
  import DesignConcepts from "./pages/DesignConcepts.svelte";
  import FabricInnovation from "./pages/FabricInnovation.svelte";
  import FabricSourcing from "./pages/FabricSourcing.svelte";
  import TrainingNDevelopment from "./pages/TrainingNDevelopment.svelte";
  import WetProcessing from "./pages/WetProcessing.svelte";

  import { Router, Route } from "svelte-navigator";

  import "./styles/resets.sass";
  import "./styles/globals.sass";
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
      Route(path="denim-studio")
        DenimStudio
      Route(path="design-concepts")
        DesignConcepts
      Route(path="fabric-innovation")
        FabricInnovation
      Route(path="fabric-sourcing")
        FabricSourcing
      Route(path="training-n-development")
        TrainingNDevelopment
      Route(path="wet-processing")
        WetProcessing
</template>
