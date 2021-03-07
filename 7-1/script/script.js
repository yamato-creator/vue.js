new Vue({
  el: '#app',
  data() {
    return {
      todos: [],
      text: ''
    };
  },
  methods: {
    //テキストボックスからの入力を引数して受け取りtextプロパティにセット
    inputText(e) {
      this.text = e.target.value;
    },
    addTodo() {
      //textプロパティが空なら何も起きない
      if (!this.text) return;

      const text = this.text;
      const id = Math.ceil(Math.random() * 1000);
      const todo = {
        id,
        text,
        isDone: false
      };
      this.todos.push(todo);
      this.resetText();
    },
    resetText() {
      this.text = '';
    }
  }
});