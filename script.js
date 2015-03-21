function slideControl(what,where,when,how){
  console.log(what);
  console.log(where);
  console.log(when);
  console.log(how);
  if (what == "next") {
    if (window.slideConfig[slideN].next == false) {
      console.log("Moving to the next slide.");
      slideN++;
      slideControl("goto",slideN);
    } else if (window.slideConfig[slideN].next == "none") {
      console.log("slideConfig.next value of this slide is 'none'. Won't move to the next slide.");
    };
  } else if (what == "back") {
    if (window.slideConfig[slideN].back == false) {
      console.log("Moving a slide back.");
      slideN--;
      slideControl("goto",slideN);
    };
  };
}
var slideConfig;



var page = "start/start";
var oldpage = false;
function smallDragBox(){
  document.getElementById('drag-box').classList.add("small");
}
function normalDragBox(){
  document.getElementById('drag-box').classList.remove("small");
}
function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}
function removejscssfile(filename, filetype){
 var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
 var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
 var allsuspects=document.getElementsByTagName(targetelement)
 for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
  if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
   allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
 }
}

function loadPage(newPage) {
  console.log("cargando página " + newPage);
  document.getElementById('main-box').classList.remove("on");
  document.getElementById('loading').classList.add("on");
  var xhr = new XMLHttpRequest;
  /*xhr.open("GET",newPage + ".html");*/
  xhr.open("GET",newPage + ".html");
  xhr.addEventListener("load",function(){
    setTimeout(function(){
      document.getElementById('main-box').innerHTML = xhr.responseText;
    },400);
    setTimeout(function(){
      document.getElementById('loading').classList.remove("on");
      document.getElementById('main-box').classList.add("on");
    },800)
    setTimeout(function(){
      removejscssfile(oldpage + ".css", "css");
      loadjscssfile(newPage + ".css", "css");
      loadjscssfile(newPage + ".js", "js");
      removejscssfile(oldpage + ".js", "js");
    },401)
  });  
  xhr.send();
  oldpage = page;
  page = newPage;
}
window.addEventListener("load", function () {
  window.appWindow = chrome.app.window.current();
  loadPage("start/start");  
  document.getElementById("close-button").addEventListener("click", function() {
    console.log("Click detected!")
    appWindow.close();
});
});