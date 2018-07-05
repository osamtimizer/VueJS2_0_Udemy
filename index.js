new Vue({
  el: '#app',
  data: {
    title: 'hello world'
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value;
    },
    //Actually, "this" is not referring "data",
    //however, Vue.js is proxying and handling between data and methods,
    //therefore you can access the data you desired.
    sayHello: function(){
      return this.title;
    }
  }
});