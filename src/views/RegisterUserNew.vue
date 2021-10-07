<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <!-- <div>{{ res.user }}</div> -->
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Create An Account
      </h2>
      <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
      <p class="mt-2 text-center text-sm text-gray-600 max-w">
        Or
        {{ " " }}
        <router-link
          to="/login"
          class="button text-base font-medium text-green-500 hover:text-gray-900"
        >
          Have an Account? Login
        </router-link>
        <!-- <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Have an Account? Sign In
        </a>
        -->
      </p>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <br />
          <input
            id="email"
            name="email"
            v-model="email"
            placeholder="email"
            type="email"
            class="input appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mt-8"
          >
            Password
          </label>
          <br />
          <input
            id="password"
            name="password"
            v-model="password"
            type="password"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <br />
          <!--signInOrCreateUser() click below -->
          <button
            class="button is-info w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
            :class="{ 'is-loading': loading }"
          >
            {{ newUser ? "Sign Up" : "login" }}
          </button>
          <div class="flex items-center justify-between mt-1">
            <div class="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import UserStatus from "..UserStatus.vue";
import { auth } from "../server/firebase";
import { ref } from "vue";
import * as register from "../use/register.js";
//import { user } from "../use.user.js";
// import { MailIcon } from "@heroicons/vue/solid";
//defineStore returns a function that has to be called to get access to the store
//import { useUserStore } from "../store/user.js";

export default {
  setup() {
    //  const currentUser = ref(null);
    const email = ref(""); //const email = ref("");
    const password = ref(""); //const password = ref("");
    const loading = ref(false);
    const errorMessage = ref("");
    /* components: {
      MailIcon,
  }, */
    const onSubmit = () =>
      register
        .signUp(email.value, password.value)
        // const onSubmit = async () => register.signUp(email.value, password.value) // console.log(email.value + "" + password.value);
        .then(res => console.log(res)); // .then(r => r.json())

    return {
      // gives access to the whole store user
      onSubmit,
      auth,
      newUser: true,
      email,
      password,
      errorMessage,
      loading,
      // gives access only to specific state
      // state: computed(() => user.counter),
      // gives access to specific getter; like `computed` properties
      // doubleCount: computed(() => user.doubleCount),
    };
  },
};
</script>
