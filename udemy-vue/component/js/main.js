// グローバル登録
// Vue.component('hello-component', {
// 	template: '<p>hello</p>'
// })

// ローカル登録
// var helloComponent = {
// 	template: '<p>Hello!</p>'
// }

// コンポーネントのデータは関数である必要がある
// （各インスタンスが独自のデータオブジェクトを持てるようにするため）
Vue.component('button-counter', {
	data: function() {
		return {
			count: 0
		}
	},
	template: '<button v-on:click="count++">{{ count }}</button>'
})

var app = new Vue({
	el: '#app',
	data: {
	},
	// components: {
	// 	'hello-component': helloComponent
	// }
})