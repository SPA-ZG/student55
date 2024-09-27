<template>
  <div>
    <div v-if="hasCurrentTrip()">
      <current-trip-component/>
      <button class="button" @click="planTrip">Plan Trip</button>
    </div>

    <br>
    <h2>Destinations</h2>

    <div class="destination-grid">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'DestinationDetail', params: { id: destination.id } }"
      >
       <destination-component :destination="destination" :isFavorite="isFavorite(destination.id)"/>
      </router-link>
    </div>

    <label for="sortDropdown">Sort By:</label>
    <select id="sortDropdown" v-model="sortOption">
      <option value="default">Default</option>
      <option value="favorited">Favorited First</option>
      <option value="rating">Rating</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useStore } from '../stores/store';

const store = useStore();

const destinations = computed(() => {
  const temp = store.destinations;

  switch (sortOption.value) {
    case "default": {
      return temp.sort((a, b) =>  b.id - a.id);
    }
    case "favorited": {
      return temp.sort((a, b) =>  Number(isFavorite(b.id)) - Number(isFavorite(a.id)));
    }
    default: {
      return temp.sort((a, b) =>  b.rating - a.rating);
    }
  }
});

const sortOption = ref('default');

async function planTrip() {
  if (store.hasCurrentTrip()) {
    alert(`Trip planned!`);
  } else {
    alert('Please select a destination first.');
  }
}

const isFavorite = (destinationId: number) => {
  return store.isFavorite(destinationId);
};

const hasCurrentTrip = () => {
  return store.hasCurrentTrip();
}


</script>

<style scoped>

.h2 {
  align-content: center;
}
.destination-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.button {
  background-color: green;
  color: white;
  padding: 8px;
  cursor: pointer;
  margin-top: 8px;
  border: none;
  border-radius: 4px;
}
</style>
