<template>
  <h2>Counter - Vuex State Access Types</h2>
  <!-- Not recommended -->
  <p>Direct Access: {{ $store.state.counter.count }}</p>
  <!-- Not recommended -->
  <p>Computed: {{ countComputed }}</p>
  <!-- Recommended -->
  <p>MapState - count: {{ count }}</p>
  <p>MapState - lastMutation: {{ lastMutation }}</p>

  <h2>Mutations</h2>
  <button @click="increment()">+1</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="incrementByRndInt()" :disabled="isLoading">+Random</button>

  <h2>Getters</h2>
  <p>Direct Getter: {{ $store.getters['counter/squareCount'] }}</p>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    /* ------ Calling Mutations ------ */
    // 1º Direct commit
    increment() {
      this.$store.commit("counter/incrementCounter");
    },
    incrementBy(value) {
      this.$store.commit("counter/incrementCounterBy", { value });
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
    // ...mapActions('counter', ['incrementRndInt'])
    // 2.2º Allow to rename actions...
    ...mapActions( 'counter', {
      incrementByRndInt: "incrementRndInt",
    }),
  },
  // computed: mapState(['count'])
  computed: {
    /* --------- Get state properties --------- */
    // 1º Direct State access
    countComputed() {
      return this.$store.state.counter.count;
    },
    // 2º mapState
    // 2.1º Take state properties you need...
    ...mapState( 'counter', ["count", "lastMutation", "isLoading"]),
    // 2.2º allow to rename, avoid name conflicts with data
    // ...mapState({
    //     count: state => state.count,
    //     last: 'lastMutation'
    // })
  },
};
</script>