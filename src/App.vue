<template>
  <VaApp id="app"
         desktop-topbar-height="64"
         mobile-topbar-height="64"
         bgColor="#FFFFFF">

    <VaTopbar theme="white" class="nav">
      <template v-slot:left>
        <Brand name="JLO Test" delimiter="●"/>
      </template>
    </VaTopbar>

    <router-view/>

  </VaApp>
</template>
<script>
  import Brand from '@/components/Brand.vue';

  export default {
    data() {
      return {
      }
    },
    components: {
      Brand
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Karla:700|Lato:300,400&display=swap');

#app {
    font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
}
.nav {
  border-bottom: .25px solid #e5e3dd;
}

</style>
