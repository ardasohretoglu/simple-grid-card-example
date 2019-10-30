import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import vuetify from './plugins/vuetify';

Vue.use(vueResource)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
