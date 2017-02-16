window.onload = function() {
  var start = document.querySelector('button');
  var hey = document.querySelector('h1');
  var howAreYa = document.querySelector('h2');
  var hand = document.querySelector('.hand');

  TweenLite.to(start, 1.5, {opacity: '1'});

  start.onclick = function() {
    this.style.display = 'none';
    TweenLite.to(hey, 1.5, {y: '0'})
    TweenLite.to(howAreYa, 2, {y: '0', delay: 1.5});
    TweenLite.to(hand, 2.5, {x:"0", delay: 3.5, ease:Bounce.easeIn2});
  }
}
