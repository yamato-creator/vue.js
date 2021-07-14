// computedとmethodの違い

// 1.プロパティとメソッド
// computed:プロパティ
// ()が不要
// methods:メソッド
// ()が必要

// 2.getter,setter
// computed:getter,setterも定義可能
// methods:getterのみ定義可能

// 3.キャッシュ
// computed:キャッシュされる
// methods:キャッシュされない

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    basePrice: 100,

  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    taxIncludedPrice: {
      get: function() {
        return parseInt(this.basePrice * 1.08)
      },
      set: function(taxIncludedPrice) {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
      }
    },
    computedNumber: function() {
      return Math.random()
    }
  },
  methods: {
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    },
    methodsNumber: function() {
      return Math.random()
    }
  }
})
