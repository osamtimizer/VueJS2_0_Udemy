new Vue({
  el: '#app',
  data: {
    title: 'hello world'
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value;
    },
    //In {{ }}, HTML can execute any functions.
    sayHello: function(){
      return 'Hello from Vue.js';
    }
  }
});