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
  if (window.innerWidth < 1300) {
    $('.header__wrap').removeClass('header__wrap--active');
  }
});