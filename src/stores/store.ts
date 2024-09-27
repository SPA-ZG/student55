import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    favoriteDestinations: [] as number[],
    destinations: [] as { id: number, name: string, description: string, rating: number, imageUrl: string }[],
    currentTrip: [] as number[],
  }),
  actions: {
    toggleFavorite(destinationId: number) {
      const index = this.favoriteDestinations.indexOf(destinationId);
      if (index === -1) {
        this.favoriteDestinations.push(destinationId);
      } else {
        this.favoriteDestinations.splice(index, 1);
      }
    },
    updateDestinations(destinations: { id: number, name: string, description: string, rating: number, imageUrl: string }[]) {
      this.destinations = destinations;
    },
		getDestinationById(id: number) {
			return this.destinations.find((dest) => dest.id == id) || null;
		},
    addToCurrentTrip(id: number) {
      const index = this.currentTrip.indexOf(id);
      if (index === -1) {
        this.currentTrip.push(id);
      }
    },
    removeFromCurrentTrip(id: number) {
      const index = this.currentTrip.indexOf(id);
      this.currentTrip.splice(index, 1);
    }
  },
  getters: {
    isFavorite: (state) => (destinationId: number) => {
      return state.favoriteDestinations.includes(destinationId);
    },

    hasCurrentTrip: (state) => () => {
      return state.currentTrip.length > 0;
    },

    isInCurrentTrip: (state) => (destinationId: number) => {
      return state.currentTrip.includes(destinationId);
    }
  },
});
