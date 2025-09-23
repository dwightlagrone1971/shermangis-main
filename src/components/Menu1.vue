<template>
  <div app class="flex items-center justify-center h-24 m-auto border-2 border-gray-300 bg-gray-200 font-poppins">
    <div class="h-20 m-auto mt-4 grid grid-cols-1 lg:grid-cols-7 lg:w-8/12 2xl:-mt-8 2xl:grid-cols-7 2xl:w-6/12">
      <div
        v-on:click="scrollToElement"
        v-for="item in items"
        :key="item"
        class="hover:underline"
      > 
        <router-link :to="item.to">
          <div>
            <img :src="item.icon" class="rounded-full m-auto mb-4 rounded-full inline-block border-2 border-white bg-red-800 text-white w-18 lg:w-16 lg:h-16 2xl:h-18 transition transform p-4 rounded hover:bg-red-800 hover:text-white transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" alt="" />
          </div>          
          <div>
            <div class="text-sm font-bold">{{ item.name }}</div>
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
    const store = useStore()
    const items = computed(() => store.getters.getItems('menuItems'))

    return { items, store }
  },
  methods: {
    scrollToElement() {
      let element = document.getElementById('top');
      element.scrollIntoView(true);
    }
  }
}


</script>


<style scoped>


</style>
