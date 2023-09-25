import { createApp } from 'vue';
import App from './App.vue';
import 'animate.css';
import { router } from './router/router.js'; // Import the router object from router.js
import './input.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
