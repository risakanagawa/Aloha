$(function () {

  // HEADER-MENU-SCROLLING
  var headerHeight = 125;
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({ scrollTop: position }, 500);
    return false;
  });

  // COUNTER-SETTING
  const counter = $(".counter");
  const countBtn = $(".add--btn")
  let counterNum = 0;

  countBtn.click(() => {
    counterNum++;
    counter
      .css("display", "block")
      .html(counterNum);
  })

  // EMAIL-VALIDATION
  const subscribeBtn = $(".subscribe--submit");
  const emailReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  subscribeBtn.click((e) => {
    let inputEmail = $(".subscribe--email").val();
    e.preventDefault();
    if (inputEmail.match(emailReg)) {
      alert("Thanks for subscribing!");
    } else {
      alert("Hmm.. something seems wrong");
    }
  });

  // FLICKLY-SETTING
  $('.main-carousel').flickity({
    // options
    prevNextButtons: false,
    cellAlign: 'center',
    contain: true,
    groupCells: '90%'
  });

});


