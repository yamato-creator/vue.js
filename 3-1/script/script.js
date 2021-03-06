new Vue({
  el: '#app',
  data(){
    return{
      text: 'hello vue.js'
    };
  },
  methods: {
    handleClick(){
      this.text = 'button pushed';
    }
  }
});