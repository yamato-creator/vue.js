var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(event){
      // 未入力だと配列データを追加しない
      if(this.newItem == '')return;

      var todo = {
        item: this.newItem,
        isDone: false
      };

      // 追加ボタンを押すと、todos配列に追加
      this.todos.push(todo);
      // 追加ボタンをおすとinput欄から消去
      this.newItem = '';
    },
    deleteItem: function(index) {
      this.todos.splice(index, 1)
    }
  }
})
