new Vue({
  el: '#app',
  data: {
    title: 'hello world',
    link: "http://google.com",
    finishedLink: '<a href="http://google.com">Google</a>'
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value;
    },
    sayHello: function(){
      return this.title;
    }
  }
});