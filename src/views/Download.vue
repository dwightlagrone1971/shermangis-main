<template>
  <div class="bg-white border-gray-100 border-2">
    <h1 class="text-red-900 font-serif m-auto mt-12 mb-12 text-5xl 2xl:mt-18 2xl:mb-20 mb-10 font-bold">GIS Data</h1>
    <div class="m-auto mb-10 w-40 grid h-fit pb-4 grid-cols-1 2xl:h-auto 2xl:w-1/2 2xl:grid-cols-5 2xl:gap-10">
      <div
       v-for="item in items"
        :key="item"
    >
        <a :href=item.url target=”_blank >
          <img 
          class="border-4 border-white shadow-2xl h-auto transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" 
          :src=item.src alt="">
        </a>       
        <h3 class="text-red-900 font-bold mb-10 mt-2">{{ item.name }}</h3>
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
    const items = computed(() => store.getters.getItems('downloads'))


    return { items, store }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .images {
    background: url("https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/0b342b43290044abbc68fe681f9b727c/data");
    width: 5000px;
    height: 500px;
  }
  
</style>
