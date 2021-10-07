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
// exe before components | props | data | methods | computed properties | lifecycle methods | no access to this
// optional 1st argument is props => is reactiveand can be watched import { watch } from vue;
// optional 2nd argument is context => props prev accessed by this
// context.attrs | context.slots | context.parent |context.root | context.emit|
import { ref, computed } from "vue";
import { useEventSpace } from "../use/eventSpace.js";
export default {
  /*  props: {
        name: String
    }, */
  setup() {
    const capacity = ref(3);
    const attending = ref(["Tim", "Bob", "Joe"]);
    const spacesLeft = computed(() => {
      return capacity.value - attending.value.length;
    });

    // creates a reactive reference | wraps primative in an object and allows tracking changes
    // prev data() was wrapping primatives in an object
    // *******note: comp api can declare reactice obj that are associated with comp. ******
    function increaseCapacity() {
      capacity.value++; // this is a reactice ref no an object .... cant use capacity++; use.value
    }
    return { capacity, increaseCapacity, attending, spacesLeft };
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

        }) */
</script>
