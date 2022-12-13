document.addEventListener("DOMContentLoaded", function(){
  const shopSwiper = new Swiper('.shop_products', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 25
  });
  const cateSwiper = new Swiper('.category_slider_wrap', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.category_slider_wrap .pager',
      type: 'bullets',
      clickable: true,
    },
  });
  const detailSwiper = new Swiper('.details_pic_slides', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 25,
    pagination: {
      el: '.details_pic_slides_wrapper .pager',
      type: 'bullets',
      clickable: true,
    },
  });

  const asideBtnEl = document.querySelector('.menu_icon_left');
  const asideEl = document.querySelector('aside');
  const asideCloseBtnEl = asideEl.querySelector('.close');

  asideBtnEl.addEventListener('click', function(){
    asideEl.classList.add('show');
  });
  asideCloseBtnEl.addEventListener('click', function(){
    asideEl.classList.remove('show');
  });
});