<template>
  <div app class="m-auto" style="background-color: #f8f8f8;">
    <div class="m-auto mt-4 mb-8 grid grid-cols-1 lg:grid-cols-6 lg:w-11/12 2xl:-mt-8 2xl:grid-cols-6 2xl:w-7/12">
      <div
        v-on:click="scrollToElement"
        v-for="item in items"
        :key="item"
        class="m-auto mb-4 inline-block border-2 border-gray-300 bg-white w-36 lg:w-48 2xl:h-16 transition transform p-4 rounded hover:bg-gray-200 hover:text-black transition-colors duration-300"
      >
        <router-link :to="item.to">
          <div class="m-auto text-lg 2xl:text-lg">
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
