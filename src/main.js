import { createApp } from 'vue';
// Import SCSS
import './scss/style.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import { router } from './router';

import App from './App.vue';

createApp(App).use(router).mount('#app');
