<template>
  <div id="app" class="p-0">
    <!--   <NavBar if="loggedIn" />
    <NavBarMain if="!loggedIn" />
    -->
    <router-view />
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar.vue";
// import NavBarMain from "@/components/NavBarMain.vue";
// import { authComputed } from "./store/helper.js"; // import { authComputed } from '../vuex/helper.js'
// import { auth } from "./server/firebase.js";
// console.log(auth); // use to test auth look at devtoools console. removed once firebase is working
export default {
  name: "app",
  components: {
    //  NavBar, NavBarMain,
  },
  /* computed: {
    ...authComputed,
  }, */
  methods: {
    logout() {
      this.$store.dispatch("logout");
      // console.log('logged out')
    },
  },
};
</script>
