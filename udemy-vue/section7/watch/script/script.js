var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!'
  },
  watch: {
    message: function(newValue, oldValue) {
      console.log('new: %s, old: %s', newValue, oldValue)
    }
  }
})
