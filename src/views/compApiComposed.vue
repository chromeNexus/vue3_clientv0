<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
//import { ref, computed } from "vue";
import useEventSpace from "../use/eventSpace.js";
// import useMapping from "@/utils/mapping"
export default {
  /*  props: {
        name: String
    }, */
  setup() {
    return useEventSpace();
    /* DONT USE spread syntax becaue its not clear
    return { ...useEventSpace(), ...useMapping()}
    ||||||||||
    instead use
    const {capacity, attending, spacesLeft, increaseCapacity } =useEventSpace();
    const { map, embedId } = useMapping()

    return { capacity, attending, spacesLeft, increaseCapacity,  map, embedId }
    */
  },
};
// useEventSpace = composition function};
/*
    return the variables & functions that template will need
    allows for control of what is exposed
    can be traced where a prop is defined */

/*   watch(() => {

           console.log(props.name);
        context.attrs; // etc.

        })
        
  beforeCreate - Called immediately after instance is initialized, before options are processed.

created - Called after the instance has been created.

beforeMount - Right before mounting of the DOM begins

mounted - Called when the instance has been mounted (browser updated).

beforeUpdate - Called when reactive data has changed, before the DOM is re-rendered.

updated - Called when reactive data has changed, and the DOM has been re-rendered.

beforeDestroy - Called right before the Vue instance is destroyed.

destroyed - Called after the Vue instance has been destroyed.      



import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured
} from "vue";

export default {
  setup() {
    onBeforeMount(() => {
      console.log("Before Mount!");
    });
    onMounted(() => {
      console.log("Mounted!");
    });
    onBeforeUpdate(() => {
      console.log("Before Update!");
    });
    onUpdated(() => {
      console.log("Updated!");
    });
    onBeforeUnmount(() => {
      console.log("Before Unmount!");
    });
    onUnmounted(() => {
      console.log("Unmounted!");
    });
    onActivated(() => {
      console.log("Activated!");
    });
    onDeactivated(() => {
      console.log("Deactivated!");
    });
    onErrorCaptured(() => {
      console.log("Error Captured!");
    });
  }
};
onRenderTracked - called when a reactive dependency is first being accessed in the render function, during render. This dependency will now be tracked. This is helpful to see which dependencies are being tracked, for debugging.

onRenderTriggered - Called when a new render is triggered, allowing you to inspect what dependency triggered a component to re-render.
        */
</script>
