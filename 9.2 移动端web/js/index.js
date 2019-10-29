$(function () {
  document.querySelector('.nav-tabs-parent').addEventListener('touchmove', function (e) {
    e.preventDefault();
  });
  $('[data-toggle="tooltip"]').tooltip();
  banner();
  initMobileTab();
});
var banner = function () {
  var getData = function (callback) {
    if (window.data) {
      callback && callback(window.data);
    } else {
      $.ajax({
        type: "get",
        url: "js/data.json",
        data: "",
        dataType: "json",
        success: function (data) {
          window.data = data;
          callback && callback(window.data);
        }
      });
    }
  };
  var render = function () {
    getData(function (data) {
      var isMobile = $(window).width() < 768;
      // console.log(isMobile);
      var pointHtml = template('pointTemplate', { list: data });
      var imageHtml = template('imageTemplate', { list: data, isM: isMobile });
      $('.carousel-indicators').html(pointHtml);
      $('.carousel-inner').html(imageHtml);
    })
  };

  render();
  $(window).on('resize', function () {
    render();
  });

  var stratX = 0;
  var distanceX = 0;
  var isMove = false;
  $('.wjs_banner').on('touchstart', function (e) {
    stratX = e.originalEvent.touches[0].clientX;
  }).on('touchmove', function (e) {
    isMove = true;
    var moveX = e.originalEvent.touches[0].clientX;
    distanceX = moveX - stratX;
  }).on('touchend', function (e) {
    if (isMove && Math.abs(distanceX) > 50) {
      if (distanceX < 0) {
        $('.carousel').carousel('next');
      } else {
        $('.carousel').carousel('prev');
      }
    }
    stratX = 0;
    distanceX = 0;
    isMove = false;
  });
};

var initMobileTab = function () {
  var $navTabs = $('.wjs_product .nav-tabs');
  var width = 0;
  $navTabs.find('li').each(function (i, item) {
    var $currLi = $(this);
    width += $currLi.outerWidth(true);
  });
  console.log(width);
  $navTabs.width(width);
  new IScroll($('.nav-tabs-parent')[0], {
    scrollX: true,
    scrollY: false,
    click: true
  });
};
