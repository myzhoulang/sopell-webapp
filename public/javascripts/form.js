// 点击头部搜索切换到搜索页面
$(function() {
  $('#hilight1').focus(function(event) {
    event.preventDefault();
    $('.zui-content').hide();
    $('.zui-searchView').show();
    $('#index_newkeyword').focus();
  });
  $('.search-cancel').tap(function(event) {
    $('.zui-content').show();
    $('.zui-searchView').hide();
    $('#index_newkeyword').blur();
  });
});

// switch
$(function() {
  function change() {
    $('.zui-siwtch').toggleClass('zui-siwtchActive')
    $('.zui-siwtchFormCtrol input[type="checkbox"]').prop('checked', function(i, v) {
      return !v;
    });
  }

  $('.zui-siwtchFormCtrol').tap(function() {
    change()
  }).swipe(function(e) {
    e.stopPropagation();
    e.preventDefault();
    change();
  });
});