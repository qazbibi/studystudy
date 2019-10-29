$(function () {
  /**
   * 初始化fullpage组件
   */
  $('.container').fullpage({
    // 配置参数
    sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
    verticalCentered: false,
    navigation: true,
    afterLoad: function (link, index) {
      $('.section').eq(index - 1).addClass('now');
    },
    afterRender: function () {
      $('.more').on('click', function () {
        $.fn.fullpage.moveSectionDown();
      });
      $('.screen04 .cart').on('transitionend', function () {
        $('.screen04 .address').show().find('img:last').fadeIn(1500);
        $('.screen04 .text').addClass('show');
      });
    },
    onLeave: function (index, nextindex, direction) {
      var currentSection = $('.section').eq(index - 1);
      if (index == 2 && nextindex == 3) {
        currentSection.addClass('leaved');
      } else if (index == 3 && nextindex == 4) {
        currentSection.addClass('leaved');
      } else if (index == 5 && nextindex == 6) {
        currentSection.addClass('leaved');
        $('.screen06 .box').addClass('show');
      } else if (index == 6 && nextindex == 7) {
        $('.screen07 .star img').each(function (i, item) {
          $(this).delay(i * 500).fadeIn(500);
          // $(this).css('transition-delay',i*0.5+'s');
        });
        $('.screen07 .text').addClass('show');
      }
      $('.screen08').on('mousemove', function (e) {
        // console.log(e);
        $(this).find('.hand').css({
          left: e.clientX - 557,
          top: e.clientY - 320,
        });
      }).find('.again').on('click',function () {
        $('.now, .leaved, .show').removeClass('now').removeClass('leaved').removeClass('show');
        $('.content [style]').removeAttr('style');
        $.fn.fullpage.moveTo(1);
      });
    },
    scrollingSpeed: 1000,
  });
});
