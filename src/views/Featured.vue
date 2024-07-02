<template>
  <h1 class="font-serif m-auto mt-12 mb-4 text-5xl 2xl:mt-18 2xl:mb-1 font-bold" style="color: #4a4a4a">GIS Data</h1>
  <div class="m-auto h-full 2xl:mb-8">
    <router-link
      class="m-auto mt-8 w-72 lg:w-60 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
      style="background-color: #4a4a4a;"
      to="/external"
    >
      <div class="font-serif text-lg p-2 shadow-2xl" style="color: #f8f8f8;">More Maps</div>
    </router-link>
  </div>
  <div class="m-auto w-40 grid h-fit grid-cols-1 2xl:h-auto 2xl:w-1/2 2xl:grid-cols-3 2xl:gap-10">
    <div
      v-for="item in items"
      :key="item"
    >
      <a :href=item.url target=”_blank >
        <img 
        class="h-auto transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" 
        :src=item.src alt="">
      </a>       
      <h3 class="font-bold mb-10 mt-2" style="color: #4a4a4a">{{ item.name }}</h3>
    </div>
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
