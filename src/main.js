import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './../node_modules/bulma/css/bulma.css';
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.config.productionTip = false


// require styles

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
