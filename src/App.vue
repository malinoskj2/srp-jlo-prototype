<template>
  <va-app id="app"
          :topbar-priority="topbar.priority"
          desktop-margin="0"
         desktop-topbar-height="64"
         mobile-topbar-height="64"
         bgColor="#FFFFFF">

    <va-topbar theme="white" id="nav">

      <template v-slot:left>
        <div>
          <router-link to="/" class="router-link">
            <brand name="JLO Test" delimiter="●" id="brand"/>
          </router-link>
          <nav-text-list :links="navLinksLeft"/>
        </div>
      </template>

      <template v-slot:right>
        <div id="nav-right">
          <va-icon size="1rem"
                   bg-color="transparent"
                   padding=".5rem"
                   type="search"/>
          <nav-text-list :links="navLinksRight"/>
          <va-button string="primary" size="md" id="signup">
            <div>Sign Up</div>
          </va-button>
        </div>
      </template>

    </va-topbar>

    <router-view/>

  </va-app>
</template>
<script>
  import Brand from '@/components/Brand.vue';
  import NavTextList from '@/components/NavTextList.vue';

  export default {
    data() {
      return {
        navLinksLeft: [
          {text: "Features" , route: "/TODO" },
          {text: "How Does it Work", route: "/TODO" },
        ],
        navLinksRight: [
          {text: "Give an exam", route: "/exam"},
          {text: "Log in", route: "/TODO"}
        ],
        topbar: {
          priority: true
        }
      }
    },
    components: {
      Brand, NavTextList
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

#nav {
  border-bottom: .25px solid #e5e3dd;
}

#nav-right {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  padding-right: .5rem;
  margin-right: 1rem;
}

#brand {
    padding: 0rem 2rem 0rem .5rem;
}

#signup {
  color: #FFFFFF;
  background-color: #E85B46;
}

.router-link {
  color: inherit;
  text-decoration: inherit;
  outline: none;
}

</style>
