$(function () {
  // 文字色変化
  $('#change-color').on('click', function() {
    $('#target').css('color', 'blue');
  });
  // 文字内容変化
  $('#change-text').on('click', function() {
    $('#target').text('こんばんは！');
  });
  // フェードアウト
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });
  // フェードイン
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});