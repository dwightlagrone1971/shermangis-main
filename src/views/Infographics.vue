<template>
  <div class="font-serif m-auto w-10/12 mb-10 lg:w-9/12 2xl:w-6/12">
    <p class="font-serif m-auto mb-6 2xl:py-10 text-xl font-bold" style="color: #4a4a4a;">
      <span class="text-5xl">Infographics</span> are a visual representation of information
 or data. The infographics below use American Community
 Survey (ACS), Census, Esri forecasts, and third-party retail data.</p>

 <div class="pb-12 font-serif m-auto grid grid-cols-1 lg:grid-cols-3">
   <div
     v-for="item in items"
     :key="item"
     style="background-color: #4a4a4a;"
     class="m-auto mb-4 pb-10 w-72 2xl:w-60 h-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
     <a :href="item.url" :title="item.name" target="_blank">
       <div
         class="font-serif text-md p-3"
         style="color: #f8f8f8;">
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
    const store = useStore()
    const items = computed(() => store.getters.getItems('infographics'))

    return { items, store }
  },
}

</script>



<style scoped>

</style>
