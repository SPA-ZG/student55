<!-- App.vue -->
<template>
  <div>
    <h1>{{ message }}</h1>

    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from './stores/store';
import colorsJson from './assets/destinations.json';

const store = useStore();

const message = 'Travel Planner';

onMounted(async () => {
  try {
    // const response = await fetch('http://localhost:3000/destinations');
    // const destinations = await response.json();
    const destinations = colorsJson.destinations;
    await new Promise( resolve => setTimeout(resolve, 1000) );

    store.updateDestinations(destinations);
  } catch (error) {
    console.error('Error fetching destinations:', error);
  }
});
</script>