<template>
  <div>
    <h1 class="font-serif text-5xl mt-12 mb-12 font-bold 2xl:mt-18 2xl:mb-16" style="color: #4a4a4a">Featured Items</h1>
    <div class="m-auto grid grid-cols-1 lg:grid-cols-3 lg:w-8/12 2xl:w-6/12">
      <div
        v-for="item in items"
        :key="item"
        style="background-color: #4a4a4a;"
        class="font-serif m-auto mb-6 pb-10 w-60 2xl:w-60 h-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
        <a :href="item.url" :title="item.name" target="_blank">
          <div
            class="font-serif text-lg p-3"
            style="color: #f8f8f8;">
            {{ item.name }}
          </div>
        </a>
      </div>
    </div>
    <router-link
      class="m-auto mt-8 w-72 lg:w-60 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
      style="background-color: #4a4a4a;"
      to="/external"
    >
      <div class="font-serif text-lg p-2 shadow-2xl" style="color: #f8f8f8;">More Maps</div>
    </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  setup() {
    const store = useStore();
    const items = computed(() => store.getters.getItems('featured'))


    return { items, store }
  }
}


</script>
