<template>
  <div class="destination-item">
    <img
      :src="destination.imageUrl"
      alt="Destination Image"
      class="destination-image" 
      loading="lazy"
    />
    <div class="destination-info">
      <p class="destination-name">{{ destination.name }}</p>
      <p class="destination-rating">Rating: {{ destination.rating }}</p>
      <span :class="{ 'favorite-icon': true, 'filled': isFavorite }">&#9733;</span>
      <div v-if="isRemovable">
        <button class="remove-button" @click="removeDestination(destination.id)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  destination: {
    type: Object as PropType<{ id: number, name: string, description: string, rating: number, imageUrl: string }>,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    required: true,
  },
  isRemovable: {
    type: Boolean,
    required: false,
  }
});

const emit = defineEmits([
  "removeDestination"
]);

const removeDestination = (destinationId: number) => {
  emit("removeDestination", destinationId);
};

</script>

<style scoped>

h3 {
  color: #3498db;
}

.favorite-icon {
  cursor: pointer;
  font-size: 2em;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.favorite-icon.filled {
  color: gold;
}

.destination-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.destination-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.destination-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.destination-info p {
  margin: 0;
}

.destination-item:hover .destination-image {
  transform: scale(1.1);
}

.destination-item:hover .destination-info {
  opacity: 1;
}
.remove-button {
  background-color: red;
  color: white;
  padding: 8px;
  cursor: pointer;
  margin-top: 8px;
  border: none;
  border-radius: 4px;
}
</style>


