// 基本的にはdata関数を使うことが推奨
// コンポーネント化(インスタンスを複数作る)するときにdata関数はコンポーネントごとに異なるデータだがdataオブジェクトは全て共有されてしまう。

const app = new Vue({
  el: '#app',
  data: {
    count: 0,
    text: 'こんにちはです！！！！！'
  }
});