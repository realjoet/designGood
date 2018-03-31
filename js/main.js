$(function() {
  $('.footer--menu-button').click(function(){
    var $this = $(this);
    var $footer = $('.menu-container');

    if ($footer.hasClass('open')) {
      $this.html('Open Menu');
      $footer.removeClass('open');
    } else {
      $this.html('Close Menu');
      $footer.addClass('open');
    }
  });
});
