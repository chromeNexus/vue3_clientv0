<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600 max-w">
        Or
        {{ " " }}
        <router-link
          to="/register"
          class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          start your 14-day free trial
        </router-link>
      </p>
    </div>
    <!--insert dont delete -->
    <form>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email
        </label>
        <br />
        <input
          v-model="email"
          placeholder="email"
          type="email"
          class="input appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <br />
        <input
          v-model="password"
          type="password"
          class="input appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <br />
        <button
          class="button is-info w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          :class="{ 'is-loading': loading }"
          @click="signInOrCreateUser()"
        >
          {{ newUser ? "Sign Up" : "Login" }}
        </button>
        <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
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
  <!-- 
    
     *********** DONT DELETE KEEP
    <h3>Sign in Anonymously</h3>
    <button
      type="button"
      @click="auth.signInAnonymously()"
      class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Sign In
      <slot></slot>
      -->
  <!--  Login Anonymously
      <MailIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
    </button> -->
  <!-- <div v-if="newUser">
      <h3>Sign Up for a New Account</h3>
      <a href="#" @click="newUser = false">Returning User?</a>
    </div> -->
  <!-- <div v-else>
      <h3>Sign In with Email</h3>
      <a href="#" @click="newUser = true">New User?</a>
    </div> 
    
    
     <div>
    20.62 - 2.95 = 17.65 - .80 = 16.85
    const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dexterarcher:<password>@cluster0.a4wlk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
Replace <password> with the password for the dexterarcher user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.
    {{ email }}
    {{ password }}



Add <your mongo shell's download directory>/bin to your $PATH variable

    mongo "mongodb+srv://cluster0.a4wlk.mongodb.net/myFirstDatabase" --username dexterarcher

    Replace myFirstDatabase with the name of the database that connections will use by default. You will be prompted for the password for the Database User, dexterarcher. When entering your password, make sure all special characters are URL encoded.
  </div> -->
</template>

<script>
import { auth } from "../server/firebase";
// import { MailIcon } from "@heroicons/vue/solid";

export default {
  components: {
    //    MailIcon,
  },
  data() {
    return {
      auth,
      newUser: false,
      email: "",
      password: "",
      errorMessage: "",
      loading: false,
    };
  },
  methods: {
    async signInOrCreateUser() {
      //TODO Validate Form
      this.loading = true;
      this.errorMessage = "";
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password);
        /*if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password);
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password);
        } */
      } catch (error) {
        this.errorMessage = error.message;
      }
      this.loading = false;
    },
  },
};
</script>
