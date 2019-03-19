$(document).ready(function() {
  $(document).on('click', '.lang-js', function(e) {
    $('.lang__select-js').toggleClass('lang__select--active');
    if ($(e.target).data('src') !== undefined) {
      $('.lang__img').attr('src', $(e.target).data('src'));
    }
  });
  $(document).on('click', '.header__mobile-btn-js', function() {
    $('.header__wrap').toggleClass('header__wrap--active');
  });
  if ($('.steps__slider').length > 0) {
    $('.steps__slider').slick({
      prevArrow: '<button class="steps__slider-prev steps__slider-btn"><img src="assets/images/steps/arrow-left.png"></button>',
      nextArrow: '<button class="steps__slider-next steps__slider-btn"><img src="assets/images/steps/arrow-right.png"></button>'
    });
  }
});