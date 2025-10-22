<template>
  <div>
    <h3 class="text-blue-900 font-serif m-auto text-5xl font-bold py-10 2xl:py-10">Contact Page</h3>
    <div class="m-auto py-6 w-11/12 grid 2xl:grid-cols-3 2xl:w-8/12">
      <div
        class="py-8 px-8 mb-10 shadow-2xl rounded-3xl 2xl:w-72 border-2"
        v-for="contact in items"
        :key="contact"
        style="background-color: #08244c"
      >
      <div class="m-auto">
        <h2 class="mb-2 text-white text-2xl font-semibold">{{ contact.name }}</h2>
      </div>
      <div class="m-auto">
        <h2 class="text-xl text-white">{{ contact.title }}</h2>
        <h2 class="text-xl text-white">{{ contact.employer }}</h2>
        <h2 class="text-xl text-white">{{ contact.address }}</h2>
        <h2 class="text-xl text-white">{{ contact.city }}</h2>
          <div class="">
            <a
              href="tel+:{{ contact.phone }}" 
              class="text-xl text-white"
              target="_blank"
            >{{ contact.phone }}</a>
          </div>
          <div class="">
          <a
            href="mailto:{{contact.email}}"
            class="text-xl text-white underline hover:bg-blue-500 pd-2"            
            target="_blank"
          >Click to Email</a>
          </div>
        </div>
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
    const items = computed(() => store.getters.getItems('contacts'))


    return { items, store }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
