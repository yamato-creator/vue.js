var app = new Vue({
	el: '#app',
	data: {
		counter: 0,
		message: ''
	},
	methods: {
		// イベントオブジェクトが参照できる

		// clickHandler: function(event) {
		// 	this.counter++
		// 	console.log(event)
		// 	console.log(event.target.tagName)
		// 	console.log(event.target.innerHTML)
		// 	console.log(event.target.type)
		// }


		// 引数を渡す

		// clickHandler: function(message) {
		// 	this.message = message
		// }


		// 引数を渡しながら、イベントオブジェクトを参照する

		// clickHandler: function($event, message) {
		// 	this.message = message
		// 	console.log($event)
		// }


		// イベント修飾子

		// clickHandler: function() {
		// 	this.message = new Date().toLocaleTimeString()
		// }


		// キー修飾子
		clear: function() {
			this.message = ''
		},
		clickHandler: function() {
			alert('shift + click')
		}
	}
})