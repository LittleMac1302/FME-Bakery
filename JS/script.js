function myFunction(x) {
  x.classList.toggle("change");
}

function openPop() {
  document.getElementById('pop-menu').style.width="250px";
}

function closePop() {
  document.getElementById('pop-menu').style.width="0px";
}

function popFunction(){
  var sideOpen = false;
  if(sideOpen == false){
    openPop();
  } else if (sideOpen == true) {
    closePop();
  }
}
