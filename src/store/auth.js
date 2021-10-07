// luccidchart for mapping db
// import { GoogleAuthProvider } from "firebase/auth";
// const provider = new GoogleAuthProvider();
// auth.languageCode = 'it';
// https://firebase.google.com/docs/auth/web/google-signin#web-v9
// fb = firebase
import { fb, db } from "../server/firebase";
const state = {
  user: {},
  isLoggedIn: false,
};
const mutations = {
  setUser(state, user) {
    state.user = user;
    state.isLoggedIn = true;
  },
};

const actions = {
  async login({ commit }) {
    // const provider = new fb.auth.GoogleAuthProvider();
    const googleProvider = new fb.auth.GoogleAuthProvider();

    // const { user } = await fb.auth().signInWithPopup(provider);
    const { user } = await fb.auth().signInWithPopup(googleProvider);
    // const result = await fb.auth().signInWithPopup(provider);
    console.log(user);
    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: fb.firestore.FieldValue.serverTimestamp(),
    };
    db.collection("users").doc(setUser.id).set(setUser);
    commit("setUser", setUser);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
