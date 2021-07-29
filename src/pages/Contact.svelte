<script>
  import Title from "../components/Title.svelte";
  import Background from "../components/Background.svelte";
</script>

<template lang="pug">
  Background(image="contact")
    .container
      h1 contact
      h5 mostafiz@denimexpert.com
      h5 www.denimmostafiz.com
</template>

<style lang="sass">
  .container
    height: 60vh
    
    h1,
    h5
      text-align: center
    
    h1
      text-transform: uppercase
      font-family: 'Porter-BoldDEMO'
      letter-spacing: 0.5rem
      margin-bottom: 10rem
    h5
      color: black
      font-family: Lora
      font-size: 2rem
      line-height: 0
      letter-spacing: 0.25rem
</style>
