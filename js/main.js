$(function() {
  var footerHeight = $('footer').css("height");
  console.log('before any actions, footerHeight = ' + footerHeight);


  $('.footer--menu-button').click(function(){
    var $this = $(this);
    var $footerHeight = $('footer').height();;
    var $footerReset = (-1) * $footerHeight;

    if ($this.hasClass('open')) {
      $('footer').animate({
        position: 'absolute',
        bottom: $footerReset + 10,
      }, 500);

      $this.html('Open Menu');

      $this.removeClass('open');
    } else {
      $('footer').animate({
        position: 'absolute',
        bottom: '0',
      }, 500);

      $this.html('Close Menu');

      $this.addClass('open');
    }
  });
});
