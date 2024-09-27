<template>
  <div>
    <p>Total Destinations: {{ totalDestinations }}</p>
    <p>Favorite Destinations: {{ favoriteDestinationsCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../stores/store';

const store = useStore();

const totalDestinations = computed(() => store.destinations.length);
const favoriteDestinationsCount = computed(() => store.favoriteDestinations.length);
</script>
