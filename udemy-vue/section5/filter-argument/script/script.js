Vue.filter('readMore', function(text, length, suffix){
  return text.substring(0,length) + suffix
})

var app = new Vue({
  el: '#app',
  data: {
    text: 'President Trump and Chairman Kim Jong Un conducted a comprehensive, in-depth, and sincere exchange of opinions on the issues related to the establishment of new U.S.-DPRK relations and the building of a lasting and robust peace regime on the Korean Peninsula. President Trump committed to provide security guarantees to the DPRK, and Chairman Kim Jong Un reaffirmed his firm and unwavering commitment to complete denuclearization of the Korean Peninsula.'
  }
})
