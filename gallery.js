/*Name this external file gallery.js*/
const choosingImage = document.getElementById("image");
const defaultContext = "Hover over an image below to display here.";
var showIndex = 0;
function upDate(previewPic){
    console.log("update");
    choosingImage.textContent = previewPic.alt;
    choosingImage.style.backgroundImage = "url('"+ previewPic.src +"')";
	}

	function unDo(){
     console.log("undo");
    choosingImage.textContent = defaultContext;
		choosingImage.style.backgroundImage = null;
	}
function addTabIndexes() {
    console.log("onload event triggered");
    const previews = document.querySelectorAll(".preview");
    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute("tabindex", i);
    }
}
function tap() {
    console.log("tap");
    const previews = document.querySelectorAll(".preview");
    if(showIndex > 0)upDate(previews[showIndex-1]);
  else unDo();
    showIndex = (showIndex + 1) % (previews.length +1);
}
function focus(){
  showIndex = 1;
}
function blur(){
  showIndex = 0;
  unDo();
}
