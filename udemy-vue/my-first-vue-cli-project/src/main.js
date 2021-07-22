import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 新規にインスタンスを作成して、idがappである要素(index.html)にマウントする
new Vue({
  router,
  store,
  // 最初にレンダリングする要素はrenderオプションでAppコンポーネントを呼んでいる
  render: h => h(App)
}).$mount('#app')
