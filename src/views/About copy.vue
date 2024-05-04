<template>
  <div>
    <div class="font-serif m-auto w-10/12 mb-10 lg:w-9/12 2xl:w-6/12">
    <p class="font-serif m-auto mb-6 2xl:py-10 text-xl font-bold" style="color: #4a4a4a;">
      <span class="text-5xl">Geospatial Services</span>   is a division of the City’s Information Technology Department. The Geospatial Services Division provides the means by which City departments can create, store, display, and analyze data (parcels, zoning, streets, utilities, etc.) for critical decision-making. GIS is the primary tool for leveraging this data, and it is available to the public through our GeoHub.</p>
</div>
 <!-- <div class="pb-12 font-serif m-auto grid grid-cols-1 lg:grid-cols-3">
    <h1 class="font-serif text-5xl mt-12 mb-12 font-bold 2xl:mt-24 2xl:mb-20" style="color: #4a4a4a">About Page</h1>
    <p>Geospatial Services</p>Geospatial Services
   <p></p>--> 
    <div class="m-auto grid grid-cols-1 lg:grid-cols-3 lg:w-8/12 2xl:w-6/12"> 
      <div
        v-for="item in items"
        :key="item"
        :click="item.to"
        style="background-color: #4a4a4a;"
        class="m-auto mb-6 pb-10 w-48 2xl:w-60 h-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
        <router-link :to="item.to">
          <div
            class="font-serif text-md p-3"
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
