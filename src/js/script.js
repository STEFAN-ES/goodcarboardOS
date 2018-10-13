var btntel = $('.button_tel');
var closemodal = $('.popup-close');
var formcnf = $('.popup-form__btn');
var popup = document.querySelector('.popup');
var overlay = document.querySelector('.overlay');

  function modal(){
    overlay.style.display = "block"
  };
  function modalclose(){
    overlay.style.display = "none"
  };
  
  btntel.on('click', modal);
  closemodal.on('click', modalclose);
  formcnf.on('click', modalclose);

  $(document).ready(function(){
    var link = $('.menu-link-line');
    var link_active = $('.menu-link_active');
    var menu_mobile = $('.menu-mobile');
    var nav_link = $('.menu-mobile a');

    link.click(function(){
      link.toggleClass('menu-link_active');
      menu_mobile.toggleClass('menu-mobile_active');
    });
    nav_link.click(function(){
      link.removeClass('menu-link_active');
      menu_mobile.toggleClass('menu-mobile_active');
    });

  });


