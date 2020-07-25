$(document).ready(function () {
  $('.default-option').click(function () {
    $(this).parent().toggleClass('active');
  });
});

$(document).ready(function () {
  $('.select-ul li').click(function () {
    let currentele = $(this).html();
    $(this).parent().siblings().children().html(currentele);
    $('.search-field').removeClass('active');
  });
});
