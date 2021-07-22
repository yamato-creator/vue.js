<template>
  <div class="home">
    <hello-nuxt/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloNuxt from '@/components/HelloNuxt.vue'

export default {
  name: 'Home',
  components: {
    HelloNuxt
  }
}
</script>
