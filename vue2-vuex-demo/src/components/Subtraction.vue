<template>
  <div>
    <h3>Count: {{ showNum }}</h3>
    <button @click="handleSub(1)">-1</button>
    <button @click="handleSubAsync(1)">-1 Async</button>
    <button @click="handleSub(3)">-3</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return{}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub']),
    ...mapActions(['subAsync']),
    handleSub (step) {
      this.sub(step)
    },
    handleSubAsync (step) {
      this.subAsync(step)
    }
  }
}
</script>