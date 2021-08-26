<template>
  <h2>Counter - Vuex State Access Types</h2>
  <!-- Not recommended -->
  <p>Direct Access: {{ $store.state.count }}</p>
  <!-- Not recommended -->
  <p>Computed: {{ countComputed }}</p>
  <!-- Recommended -->
  <p>MapState - count: {{ count }}</p>
  <p>MapState - lastMutation: {{ lastMutation }}</p>

  <h2>Mutations</h2>
  <button @click="increment()">+1</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="incrementByRndInt()">+Random</button>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    /* ------ Calling Mutations ------ */
    // 1º Direct commit
    increment() {
      this.$store.commit("incrementCounter");
    },
    incrementBy(value) {
      this.$store.commit("incrementCounterBy", { value });
    },
    /* ------ Calling Actions ------- */
    // 1º Direct dispatch
    // incrementRndInt() {
    //     this.$store.dispatch('incrementRndInt')
    // }
    // 1.2º Call to mapActions methods from another method
    // incrementWithMapActions() {
    //     this.incrementByRndInt()
    // }
    // 2º mapActions
    // 2.1º Take store actions you need...
    // ...mapActions(['incrementRndInt'])
    // 2.2º Allow to rename actions...
    ...mapActions({
      incrementByRndInt: "incrementRndInt",
    }),
  },
  // computed: mapState(['count'])
  computed: {
    /* --------- Get state properties --------- */
    // 1º Direct State access
    countComputed() {
      return this.$store.state.count;
    },
    // 2º mapState
    // 2.1º Take state properties you need...
    ...mapState(["count", "lastMutation"]),
    // 2.2º allow to rename, avoid name conflicts with data
    // ...mapState({
    //     count: state => state.count,
    //     last: state => state.lastMutation
    // })
  },
};
</script>