<template>
  <div>
    <span v-if="loading">Loading product</span>
    <span v-else>Loaded {{ product.name }}</span>
  </div>
</template>

<script>
import useProduct from "../utils/useProduct";
import { computed } from "vue";
async setup (props, context) {
  const id = context.root.$route.params.id
  const { products, search } = useProduct()
  const { products: relatedProducts, search: relatedSearch } = useProduct()

  await search({ id }) // fetch main product
  await relatedSearch({ categoryId: products.value[0].catId }) // fetch some otheproducts from this category

  return {
    product: computed(() => products.value[0]),
    relatedProducts
  }
}
/*
The state is the most straightforward part to replicate. We just need to create a reactive property with ref
Now let’s create a mutation so we can have control over the state changes. Instead of using a string like we do in Vuex I will write a function. That way we can benefit from autocompletion and tree shaking (in opposite to traditional Vuex mutation)
 */

/*
const state = ref({ post: {} })
function setPost(post) { 
  state.value.post = post
} 
*/

/*
We can create action in the exactly same way - just remember that they can be asynchronous:
 async function loadPost(id) {
  const post = await fetchPost(id)
  setPost(post)
} */

/* For a getter we need to track changes of certain subproperties of a state object. computed function will be perfect for that!
instead of making the state object public we will export a getter to access it (getPost) and action to fetch new posts (loadPost ), which uses the (setPost) mutation to update the state. This way we are not allowing direct mutation of the state object and can control how and when it’s changed. */


/* 
const getPost = computed(() => state.value.post)

export {
  loadPost
  getPost
} 
const isLoading = ref(true)
const product = ref(product)
const productName = computed(() => product.name)
 */

/* 
For example you can save state history with watch function (which works exactly like watch property from Options API):
TIP: We can achieve the same result without doing initial push using watchEffect function that works like a watch from Options API with immediate flag set to true.
 */

/* 
 const history = []
history.push(state) // push initial state

watch(state, (newState, oldState) => {
  history.push(newState)
})
 */

/*
https://vueschool.io/articles/vuejs-tutorials/state-management-with-composition-api/
In Vue Storefront we used the same solution (but with reactive instead of ref) to manage our UI state:
import { reactive, computed } from '@vue/composition-api';

const state = reactive({
  isCartSidebarOpen: false,
  isLoginModalOpen: false
});

const isCartSidebarOpen = computed(() => state.isCartSidebarOpen);
const toggleCartSidebar = () => {
  state.isCartSidebarOpen = !state.isCartSidebarOpen;
};

const isLoginModalOpen = computed(() => state.isLoginModalOpen);
const toggleLoginModal = () => {
  state.isLoginModalOpen = !state.isLoginModalOpen;
};

const uiState = {
  isCartSidebarOpen,
  isLoginModalOpen,
  toggleCartSidebar,
  toggleLoginModal
};
export default uiState;






/* 
One of the best things about Composition API is the fact that it allows to write Vue logic outside of Vue components. Because of that you can slice your code into reusable, independent and self-contained pieces and hide their business logic behind a nice API.

For example when we have a code that is responsible for fetching products and managing its loading state instead of repeating it in every component we can put it into a function that is returning reactive properties: 

Did you noticed that instead of directly returning products and loading objects we are returning computed properties? That way we can make sure that no one will mutate these objects outside of useProduct.

TIP: You can achieve the same effect with readonly property from Composition API

Now when we want to fetch products in a component we can use our useProduct function like this:
*/

/* export default function useProduct() {
  const loading = ref(false)
  const products = ref([])

  async function search (params) {
    loading.value = true
    products.value = await fetchProduct(params)
    loading.value = false
  }
  return {
    loading: computed(() => loading.value)
    products: computed(() => products.value)
    search
  }
} */
</script>
