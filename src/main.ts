import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import DestinationComponent from "./components/DestinationComponent.vue";
import CurrentTripComponent from "./components/CurrentTripComponent.vue";


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("destination-component", DestinationComponent);
app.component("current-trip-component", CurrentTripComponent);

app.mount('#app')
