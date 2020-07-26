/* showcase area */

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

/* showroom area */
const h5Items = document.querySelectorAll('.h5');
const showroomContents = document.querySelectorAll('.showroom-content');

function selectItem(e) {
  removeShow();
  removeActive();
  const showroomContentsItem = document.querySelector(`#${this.id}-content`);
  showroomContentsItem.classList.add('show');
  this.classList.add('active');
}
function removeShow() {
  showroomContents.forEach((item) => item.classList.remove('show'));
}
function removeActive() {
  h5Items.forEach((item) => item.classList.remove('active'));
}

h5Items.forEach((item) => {
  item.addEventListener('click', selectItem);
});
