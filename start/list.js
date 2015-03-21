smallDragBox();
console.log("hola");
function selectAllInterests() {
  checkboxes = document.getElementsByName('interests');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = true;
  }
}
document.getElementById("interests-form-button-all").addEventListener("click", function () {
  selectAllInterests();
});
document.getElementById("interests-form-button-ok").addEventListener("click", function () {
  loadPage("start/start");
});