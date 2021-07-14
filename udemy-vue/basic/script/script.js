var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    url: 'https://jp.vuejs.org/',
    toggle: true,
    languages: [
      'ruby',
      'java',
      'python'
    ]
  },
  methods: {
    clickHandler: function(){
      this.message = 'Clicked'
    }
  }
})









// テンプレート
// Vue.component('hello-component',{
//   template: '<p>Hello</p>'
//   })
//   var app = new Vue({
//     //options
//     el: '#app',
// })