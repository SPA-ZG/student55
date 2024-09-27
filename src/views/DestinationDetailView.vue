<template>
  <div v-if="destination">
    <h2>{{ destination.name }}</h2>
    <p>{{ destination.description }}</p>
    <p>Rating: {{ destination.rating }}</p>
		<div class="image-container">
			<img :src="destination.imageUrl" alt="Destination Image" loading="lazy" style="max-width: 100%;" />
			<div class="favorite-section">
				<span class="favorite-text">Favorite</span>
				<span @mouseenter="isHovered = true" @mouseleave="isHovered = false"
					@click="toggleFavorite(destination.id)"
					:class="{ 'favorite-icon': true, 'filled': isFavorite(destination.id), 'hovered': isHovered }"
				>
					&#9733;
				</span>
			</div>

      <button :class="{ 'button': true, 'remove': isDestinationAdded(destination.id) }" @click="toggleDestinationStatus(destination.id)">
          {{ isDestinationAdded(destination.id) ? 'Remove from current trip' : 'Add to current trip' }}
        </button>
		</div>
  </div>
	<div v-else>
    <p>Destination not found.</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from "vue-router";
import { useStore } from '../stores/store';

const store = useStore();

const isHovered = ref(false);

let destination = ref({} as { id: number, name: string, description: string, rating: number, imageUrl: string } | null);
const route = useRoute();
watch(
  () => route.params.id,
  async (to, from) => {
    console.log(`Route changed: ${from} -> ${to} `);
    setSelectedDestination();
  }
);
const setSelectedDestination = () => {
	const id = parseInt(route.params.id as string)
  destination.value = store.getDestinationById(id);
};

const toggleFavorite = (destinationId: number) => {
	isHovered.value = false;
  store.toggleFavorite(destinationId);
};

const isFavorite = (destinationId: number) => {
  return store.isFavorite(destinationId);
};

const isDestinationAdded = (destinationId: number) => {
  return store.isInCurrentTrip(destinationId);
}

const toggleDestinationStatus = (destinationId: number) => {
  if (isDestinationAdded(destinationId)) {
    store.removeFromCurrentTrip(destinationId);
  } else {
    store.addToCurrentTrip(destinationId);
  }
};

onMounted(async () => {
  setSelectedDestination();
});

</script>

<style scoped>

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.favorite-icon {
  cursor: pointer;
  font-size: 2em;
	color: lightgray;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.favorite-icon.filled {
  color: gold;
}

.favorite-icon.hovered {
	color: gold;
}

.favorite-icon.hovered.filled {
  color: lightgray;
}

.favorite-section {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.favorite-text {
  margin-right: 4px;
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

.button.remove {
  background-color: red;
}

</style>
