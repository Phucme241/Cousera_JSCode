/*Name this external file gallery.js*/
const choosingImage = document.getElementById("image");
const defaultContext = "Hover over an image below to display here.";
function upDate(previewPic){
    console.log("update");
    choosingImage.textContent = previewPic.alt;
}

function unDo(){
    console.log("undo");
    choosingImage.textContent = defaultContext;
}

function addTabIndexes() {
    console.log("onload event triggered");
    const previews = document.querySelectorAll(".preview");
    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute("tabindex", "0");
    }
}
