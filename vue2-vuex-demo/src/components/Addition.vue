<template>
  <div>
    <h3>Count: {{ $store.getters.showNum }}</h3>
    <button @click="handlePlus(1)">+1</button>
    <button @click="handlePlusAsync(1)">+1 async</button>
    <button @click="handlePlus(3)">+3</button>
  </div>
</template>

<script>
export default {
  data () {
    return{}
  },
  methods: {
    handlePlus (step) {
      this.$store.commit('add', step)
    },
    handlePlusAsync (step) {
      console.log(step)
      this.$store.dispatch('addAsync', step)
    }
  }
}
</script>