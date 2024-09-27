<template>
  <div>
    <h2>Current trip</h2>
    <ul class="current-trip-container" >
      <li v-for="destinationId in currentTrip" :key="destinationId">
        <destination-component :destination="store.getDestinationById(destinationId)!!" 
          :isFavorite="isFavorite(destinationId)" :isRemovable="true" @removeDestination="handleDestinationRemoved" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../stores/store';

const store = useStore();
const currentTrip = computed(() => store.currentTrip);

const isFavorite = (destinationId: number) => {
  return store.isFavorite(destinationId);
};

const handleDestinationRemoved = (destinationId: number) => {
  store.removeFromCurrentTrip(destinationId);
};

</script>

<style scoped>

.current-trip-container {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
}

</style>