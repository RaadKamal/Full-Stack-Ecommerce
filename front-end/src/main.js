import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS6bbENZf0q1Agtp_Ja6IxvHubAtvK-nI",
  authDomain: "eng-bloom-384805.firebaseapp.com",
  projectId: "eng-bloom-384805",
  storageBucket: "eng-bloom-384805.appspot.com",
  messagingSenderId: "532133083573",
  appId: "1:532133083573:web:b9862867c3dac8a6df41fc"
};

// Initialize Firebase
initializeApp(firebaseConfig);


createApp(App)
  .use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
      path: '/cart',
      component: ShoppingCartPage,
    }, {
      path: '/products',
      component: ProductsPage,
    }, {
      path: '/products/:productId',
      component: ProductDetailPage,
    }, {
      path: '/',
      redirect: '/products',
    }, {
      path: '/:pathMatch(.*)*',
      component: NotFoundPage,
    }]
  }))
  .mount('#app')
