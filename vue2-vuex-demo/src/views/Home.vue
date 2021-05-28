<template>
  <div class="home">
    <Addition />

    <p>----------------------</p>

    <Subtraction />
  </div>
</template>

<script>
// @ is an alias to /src

import Addition from '@/components/Addition'
import Subtraction from '@/components/Subtraction'

export default {
  name: 'Home',
  components: {
    Addition,
    Subtraction
  }
}
</script>
