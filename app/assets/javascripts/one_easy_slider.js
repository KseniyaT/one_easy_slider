(function($){
  $.fn.oneEasySlider = function( options ) {
    var defaults = {};
    options = $.extend(defaults, options);
    return this.each(function(){
      var self = $(this)
        , view = self.find('.easy-slider-view')
        , preview = self.find('.easy-slider-preview')
        ;
      view.find('img').attr('src',preview.find('li.active').find('img').attr('src'));
      preview.find('li').on('click', function(){
        if (!$(this).hasClass('active')) {
          preview.find('li.active').removeClass('active');
          $(this).addClass('active');
          var img = $(this).find('img').attr('src');
          view.find('img').attr('src',img);
        }
      });

    });
  }
})(jQuery);