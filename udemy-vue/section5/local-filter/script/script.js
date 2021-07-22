var app = new Vue({
  el: '#app',
  data: {
    price: 2980
  },
  filters: {
    numberFormat: function(value) {
      return value.toLocaleString()
    }
  }
})
