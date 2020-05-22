function runOnMousewheel(event) {

  event.preventDefault();
  var wd = event.wheelDelta;
  var csp = window.pageYOffset;
  window.scrollTo(0, csp - wd);
};


if (navigator.userAgent.match(/Trident\/7\./)) {



  if (window.addEventListener) {

    window.addEventListener("mousewheel", function () {
      runOnMousewheel(event);
    });
  } else if (window.attachEvent) { // IE DOM
    window.attachEvent("mousewheel", runOnMousewheel(event));
  } else { // No much to do
    window["mousewheel"] = runOnMousewheel(event);
  }


}