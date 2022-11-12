import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import LdButton from '@litchi-design/components/button';

const app = createApp(App);
console.log(LdButton);

app.use(LdButton).mount('#app');
