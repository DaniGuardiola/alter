var nslide = "welcome";

function transitionTo(slide) {
    document.getElementById('slide-' + nslide).classList.remove("on");
    document.getElementById('slide-' + slide).classList.add("on");
    nslide = slide;
    console.log("Moving to " + slide + ", the new value is " + nslide);
}
document.getElementById("main-box").addEventListener("mousewheel", MouseWheelHandler, false);

function MouseWheelHandler(e) {
    // cross-browser wheel delta
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    if (page === "start/start") {
        if (delta === 1) {
            //UP
            console.log("MouseWheel up detected!");
            if (nslide === "letsgetout") {
                transitionTo("principles");
            } else if (nslide === "firsttext") {
                transitionTo("welcome");
            } else if (nslide === "principles") {
                transitionTo("firsttext");
            }
        } else if (delta === -1) {
            //DOWN
            console.log("MouseWheel down detected!");
            if (nslide === "welcome") {
                transitionTo("firsttext");
            } else if (nslide === "firsttext") {
                transitionTo("principles");
            } else if (nslide === "principles") {
                transitionTo("letsgetout");
            }
        }
    }
}
document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    console.log("key detected!");
    if (page === "start/start") {
        if (e.keyCode === 38) {
            console.log("it's up!");
            //UP
            if (nslide === "letsgetout") {
                transitionTo("principles");
            } else if (nslide === "firsttext") {
                transitionTo("welcome");
            } else if (nslide === "principles") {
                transitionTo("firsttext");
            }
        } else if (e.keyCode === 40 || e.keyCode === 13 || e.keyCode === 32) {
            //DOWN
            console.log("it's down, or enter or space!");
            if (nslide === "welcome") {
                transitionTo("firsttext");
            } else if (nslide === "firsttext") {
                transitionTo("principles");
            } else if (nslide === "principles") {
                transitionTo("letsgetout");
            } else {
              if (e.keyCode === 13) {
                console.log("enter! loading page...")
                loadPage("start/list");
              }                
            }
        }
    }
}

document.getElementById("slide-welcome").addEventListener("click", function() {
    console.log("Click detected!")
    transitionTo("firsttext");
});
document.getElementById("slide-firsttext").addEventListener("click", function() {
    console.log("Click detected!")
    transitionTo("principles");
});
document.getElementById("slide-principles").addEventListener("click", function() {
    console.log("Click detected!")
    transitionTo("letsgetout");
});
document.getElementById("letsgetout-button").addEventListener("click", function() {
    console.log("Click detected!")
    loadPage("start/list");
});
/*document.getElementById("size-button").addEventListener("click", function() {
      if(appWindow.innerBounds.height == 415 && appWindow.innerBounds.width == 470){
          appWindow.resizeTo(470,615);
      } else {
          appWindow.resizeTo(470,415);
      }
  });*/