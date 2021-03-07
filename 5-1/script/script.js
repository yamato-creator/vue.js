// リストレンダリング：配列（リスト）に基づいてレンダリングする機能

new Vue({
  el: '#app',
  data() {
    return {
      items: [
        {id: 1, label: "子" },
        {id: 2, label: "丑" },
        {id: 3, label: "寅" }
      ]
    };
  }
});