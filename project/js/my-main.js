$(document).ready(function () {
  "use-strict"
  // toggle sidebar
  $(".toggle-sidebar").on("click", function () {
    $(".sidebar").toggleClass("no-sidebar")
    if ($(".sidebar").is(":not(.no-sidebar)")) {
      $(".all-notification").addClass("d-flex")
      $(".all-notification").removeClass("d-none")
      console.log("not")
    } else {
      $(".all-notification").removeClass("d-flex")
      $(".all-notification").addClass("d-none")

    }
  })

  var smallScreen = window.matchMedia("(max-width: 580px)");
  if (smallScreen.matches) {
  }

  // toggle full screen
  $(".toggle-fullscreen").on("click", function () {
    console.log("test")
    $(this).toggleClass("screen")
    if ($(this).hasClass("screen")) {
      openFullscreen()
    } else {
      closeFullscreen()
    }
  })
  // toggle setting
  $(".toggle-setting").on("click", function () {
    $(this).find("i").toggleClass("fa-spin")
    $(".sitting-box").toggleClass("hide-setting")
    console.log("yes")
  })
});

var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}