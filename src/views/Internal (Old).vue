<template>
  <div class="font-serif m-auto lg:w-10/12 2xl:w-10/12">
    <h1 class="font-serif m-auto mt-12 mb-12 text-5xl 2xl:mt-18 2xl:mb-20 mb-10 font-bold" style="color: #4a4a4a">Internal Maps</h1>
    <div class="m-auto grid grid-cols-1 lg:grid-cols-3 lg:w-10/12 2xl:w-8/12">
      <div
        v-for="item in items"
        :key="item"
        style="background-color: #4a4a4a"
        class="font-serif m-auto mb-6 pb-10 w-60 2xl:w-60 h-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
        <a :href="item.url" :title="item.name" target="_blank">
          <div
            class="font-serif text-md p-3"
            style="color: #f8f8f8">
            {{ item.name }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  setup() {
    const store = useStore();
    const items = computed(() => store.getters.getItems('internal'))


    return { items, store }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
