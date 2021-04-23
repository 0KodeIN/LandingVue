function spoiler(obj) {
  obj.className == 'spoiler'?
  obj.className='spoiler revealed':
  obj.className='spoiler';
}

function anim(duration) {
  var temp;
  return function(sel) {
      cancelAnimationFrame(temp);
      var start = performance.now();
      var from = window.pageYOffset || document.documentElement.scrollTop,
      to = document.querySelector(sel).getBoundingClientRect().top;
      requestAnimationFrame(function step(timestamp) {
          var progress = (timestamp - start) / duration;
          1 <= progress && (progress = 1);
          window.scrollTo(0, from + to * progress | 0);
          1 > progress && (temp = requestAnimationFrame(step))
      })
  }
};
var scrollMenu = anim(1000)
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
})