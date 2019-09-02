import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-146908314-1'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')