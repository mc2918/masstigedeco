$(document).ready(function () {
  gnbUI();
  searchUI();
  mobileMenu();
  scrollMotion();

  var isScrolled = false;
  $(window).on('scroll', function () {
    var scroll = $(this).scrollTop();
    if (scroll > 0) {
      $('.headerWrap').addClass('on');
      if (isScrolled == false) {
        $('.hd-bottom').css({
          'position': 'fixed',
          'display': 'none'
        }).slideDown();
      }
      isScrolled = $('.headerWrap').hasClass('on');
    } else {
      $('.headerWrap').removeClass('on');
      $('.hd-bottom').css({
        'position': 'relative',
        'display:': 'block'
      });
      isScrolled = false;
    }
  })
});

//gnbUI
function gnbUI() {
  // //foucus event
  $('.gnb .lnb').each(function () {
    $(this).find('a').last().addClass('last');
  });
  $('.gnb>li>a').on('focusin', function () {
    $(this).next('.lnb').css('display', 'block');
  });
  $('.last').on('focusout', function () {
    $(this).parent('.lnb').css('display', 'none');
  });
  $('.gnb .lnb a').last().on('focusout', function () {
    $('.lnb').css({
      'display': 'none'
    })
  });

}

function mobileMenu() {
  $('.hamburger').on('click', function () {
    $('.m-menu').animate({
      'left': '0'
    });
  });
  $('.m-menu > .close').on('click', function () {
    $('.m-menu').animate({
      'left': '-100%'
    });
  });
  mobileGnbAccordion();
}

function mobileGnbAccordion(){
  $('.anchor').on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
}

//search-box
function searchUI() {
  $('.search').on('click', function (e) {
    e.preventDefault();
    $('.mask').append();
    $('.search-box').stop().fadeIn();
    $('.mask').stop().fadeIn();
  });

  $('.close,.mask').on('click', function (e) {
    e.preventDefault();
    $('.search-box').fadeOut();
    $('.mask').fadeOut();
  });

  $('.m-search-wrap > .search').on('click', function () {
    $('.mask').remove();
    $('.m-search-box').animate({
      'right': '0'
    });
  });
  $('.m-search-box .close').on('click', function () {
    $('.m-search-box').animate({
      'right': '-100%'
    });
  });

}

//main slide
mainSlide();

function mainSlide() {
  var myswiper = new Swiper('.carousel', {
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //마우스 오버시 stop/play
  $('.carousel').on('mouseenter', function () {
    myswiper.autoplay.stop();
  });
  $('.carousel').on('mouseleave', function () {
    myswiper.autoplay.start();
  });
}

//media-slide ppl
mediaSlidePPL();

function mediaSlidePPL() {
  var myswiper = new Swiper('.ppl', {
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    autoplay: {
      delay: 7000,
    },
  });
}

//media-slide news
mediaSlideNews();

function mediaSlideNews() {
  var myswiper = new Swiper('.news', {
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    autoplay: {
      delay: 9000,
    },
  });
}

//topbtn
topBtn();

function topBtn() {
  $('.btn-top').on('click', function () {
    var speed = 500;
    $('html, body').animate({
      scrollTop: 0
    }, speed);
    return false;
  });

  btnFadeIn();

  function btnFadeIn() {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 1000) {
        $('.btn-top').fadeIn(300);
      } else {
        $('.btn-top').fadeOut(300);
      }
    });
  }
}

// scrollmotion 
function scrollMotion (){
   matchHeight();
  var  pos1, pos2, pos3, pos4, pos5, pos6;
  var num = -500; 

    function matchHeight(){
      pos1 = $('#content> section').eq(0).offset().top;
      pos2 = $('#content> section').eq(1).offset().top;
      pos3 = $('#content> section').eq(2).offset().top;
      pos4 = $('#content> section').eq(3).offset().top;
      pos5 = $('#content> section').eq(4).offset().top;
      pos6 = $('#content> section').eq(5).offset().top;
    }

    $(window).on('scroll',function(){
       var scroll = $(this).scrollTop();
       var selector = $('#content>section');

       $(selector).removeClass('on');
      if(scroll >= pos1+num && scroll<pos2+num){
        $(selector).eq(0).addClass('on');
      }
      if(scroll >= pos2+num && scroll<pos3+num){
        $(selector).eq(1).addClass('on');
      }
      if(scroll >= pos3+num && scroll<pos4+num){
        $(selector).eq(2).addClass('on');
      }
      if(scroll >= pos4+num && scroll<pos5+num){
        $(selector).eq(3).addClass('on');
      }
      if(scroll >=pos5+num && scroll<pos6+num){
        $(selector).eq(4).addClass('on');
      }
      if(scroll >=pos6+num){
        $(selector).eq(5).addClass('on');
      }

    });
}