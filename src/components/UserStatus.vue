<template>
  <div>
     <!-- And now that we’re listening to state changes on the user, we need a way to access the user in a template. To maximize the reasonability of this component. use slot & make the actual user data available by binding it to the user property on this slot. This is what we call a slot crop, and it makes the user data available to any other component that consumes the user component. -->
    <slot name="user" :user="user"></slot>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "../server/firebase.js";
export default {
  setup() {
     // initialize user to null (no user | not signed in)
    const user = ref(null);
    /*listen to changes on the user state by setting up a realtime stream using auth on state changed. And this actually returns as a function that we can call to unsubscribe from that stream when needed,(generally a good idea). So you don’t create memory leaks in the app. Now on all state changed takes a callback as an argument that will fire every time the state changes, like when the user logs in or logs out. And we can make our user state on this component reactive by simply defining the user value as the Firebase user.  */
    const unsubscribe = auth.onAuthStateChanged(
      /*acts as event listener for when user logins in and out */
      (firebaseUser) => (user.value = firebaseUser)
    );
    return {
      user,
      unsubscribe,
    };
  },
  unmounted() {
    this.unsubscribe();
  },
};
</script>
