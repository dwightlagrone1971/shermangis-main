<template>
  <div class="h-screen">
    <h1 class="text-red-900 font-serif text-5xl mt-12 mb-12 font-bold 2xl:mt-24 2xl:mb-20">About Page</h1>
    <div class="text-red-900 m-auto grid grid-cols-1 lg:grid-cols-3 lg:w-8/12 2xl:w-6/12">
      <div
        v-for="item in items"
        :key="item"
        :click="item.to"
        class="bg-red-900 m-auto mb-6 pb-10 w-48 2xl:w-60 h-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
        <router-link :to="item.to">
          <div
            class="font-serif text-md p-3 text-red-900"
            style="color: #f8f8f8;">
            {{ item.name }}
          </div>
        </router-link>
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
    const items = computed(() => store.getters.getItems('about'))


    return { items, store }
  }
}


</script>

<style scoped>

</style>
